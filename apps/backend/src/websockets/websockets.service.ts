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

@Injectable()
export class WebsocketService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private wss: Server;

  constructor(
    private log: AppLogger,
    private configService: ConfigService,
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

  handleRequest(
    socket: Socket,
    req: OutgoingClientMessage,
    reply: (res: OutgoingServerMessage) => void,
  ) {
    if (req.data.type === 'client/login') {
      try {
        jwt.verify(
          req.data.access_token,
          this.configService.getAuthJWTSecret(),
        );
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
  }

  async onApplicationBootstrap() {
    // THIS is so live reload works, kinda of a hack
    await killport(3001, 'tcp').catch(() => null);
    this.wss = new Server({ transports: ['websocket'] });
    this.wss.on('connection', (ws) => {
      const handleMsg = (message: Uint8Array, cb) => {
        const req = decodeOutgoingClientMessage(message);
        const reply = (res: OutgoingServerMessage) => {
          if (cb) cb(encodeOutgoingServerMessage(res));
          else this.send(ws, res);
        };
        this.handleRequest(ws, req, reply);
      };

      ws.on('message', (name, message: Uint8Array, cb) => {
        handleMsg(message, cb);
      });
      ws.on('request', (message: Uint8Array, cb) => {
        handleMsg(message, cb);
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
