import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { AppLogger } from 'src/commons/log/logger';
import killport from 'kill-port';
import {
  OutgoingClientMessage,
  OutgoingServerMessage,
  decodeOutgoingClientMessage,
} from '@beast/shared';
import { encodeOutgoingServerMessage } from '@beast/shared';
import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';
import { ConfigService } from 'src/config/config.service';
import { PlayerService } from 'src/player/player.service';

interface WsSession {
  access_token: string;
  currentPlayer?: string;
}

@Injectable()
export class WebsocketService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private wss: Server;
  private sessions = new Map<Socket['id'], WsSession>();

  constructor(
    private log: AppLogger,
    private configService: ConfigService,
    private playerService: PlayerService,
  ) {}

  broadcast(msg: OutgoingServerMessage) {
    this.wss.emit('request', encodeOutgoingServerMessage(msg));
  }

  send(client: Socket, msg: OutgoingServerMessage) {
    client.emit('request', encodeOutgoingServerMessage(msg));
  }

  async sendWithAck(client: Socket, msg: OutgoingServerMessage) {
    const res = await client
      .timeout(5000)
      .emitWithAck('request', encodeOutgoingServerMessage(msg));
    return decodeOutgoingClientMessage(res);
  }

  async handleRequest(
    socket: Socket,
    session: WsSession | undefined,
    req: OutgoingClientMessage,
    reply: (res: OutgoingServerMessage) => void,
  ) {
    if (req.data.type === 'client/login') {
      if (session) throw new Error('already logged in');

      try {
        jwt.verify(
          req.data.access_token,
          this.configService.getAuthJWTSecret(),
        );

        this.sessions.set(socket.id, {
          access_token: req.data.access_token,
        });

        return reply({
          data: {
            type: 'server/auth',
            status: { type: 'success' },
          },
        });
      } catch {
        return reply({
          data: {
            type: 'server/auth',
            status: { type: 'error', errorType: 'invalid_credentials' },
          },
        });
      }
    }

    // if (req.data.type === 'client/player/start') {
    //   if (!session) throw new Error('no session');

    //   const [player] = await this.playerService.startPlayer({
    //     media: req.data.mediaId,
    //     seek: 0,
    //   });
    //   session.currentPlayer = player.id;

    //   // player.ffpmegProcess.stdout.on('data', (data) => {
    //   //   this.send(socket, {
    //   //     data: {
    //   //       type: 'server/player/data',
    //   //       data: new Uint8Array(data),
    //   //     },
    //   //   });
    //   // });

    //   // player.ffpmegProcess.stderr.on('data', (data) => {
    //   //   console.log(data.toString());
    //   // });
    //   // player.ffpmegProcess.on('exit', () => {
    //   //   session.currentPlayer = undefined;
    //   // });
    // }

    // if (req.data.type === 'client/player/end') {
    //   // if (!session?.currentPlayer) return;
    //   // this.playerService.endPlayer(session.currentPlayer);
    // }
  }

  async onApplicationBootstrap() {
    // THIS is so live reload works, kinda of a hack
    await killport(3001, 'tcp').catch(() => null);
    // Give it some time to actually kill it (still a hack btw )
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('websocket server open');
    this.wss = new Server({ transports: ['websocket'], pingTimeout: 10_000 });
    this.wss.on('connection', (ws) => {
      const handleMsg = async (message: Uint8Array, cb) => {
        const session = this.sessions.get(ws.id);
        const req = decodeOutgoingClientMessage(message);
        const reply = (res: OutgoingServerMessage) => {
          if (cb) cb(encodeOutgoingServerMessage(res));
          else this.send(ws, res);
        };
        await this.handleRequest(ws, session, req, reply);
      };

      ws.on('message', async (name, message: Uint8Array, cb) => {
        await handleMsg(message, cb);
      });

      ws.on('request', async (message: Uint8Array, cb) => {
        await handleMsg(message, cb);
      });

      ws.on('disconnect', () => {
        console.log('connection closed');
        const session = this.sessions.get(ws.id);
        if (session?.currentPlayer) {
          this.playerService.endPlayer(session.currentPlayer);
        }
        this.sessions.delete(ws.id);
      });

      ws.on('error', console.error);
    });
    this.wss.listen(3001);
    setInterval(() => {
      this.broadcast({ data: { type: 'server/ping' } });
    }, 1000);
  }

  onApplicationShutdown() {
    this.wss.close();
  }
}
