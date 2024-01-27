import { Accessor, createContext, createSignal, onCleanup, onMount, useContext } from "solid-js";
import { OutgoingClientMessage, OutgoingServerMessage, OutgoingServerMessageTypeMap, OutgoingServerMessageTypes, decodeOutgoingServerMessage, encodeOutgoingClientMessage } from '@beast/shared'
import { getAuthTokens, logout } from "./auth";
import { Socket, io } from "socket.io-client";



export interface WebsocketContext {
  state: Accessor<WebsocketState>,
  send: (msg: OutgoingClientMessage['data']) => void;
  sendWithAck: (msg: OutgoingClientMessage['data']) => Promise<OutgoingServerMessage['data']>;
  login: () => void;
  socket: Socket,
  onMessage: <T extends OutgoingServerMessageTypes>(type: T, cb: (data: OutgoingServerMessageTypeMap[T]) => void | OutgoingClientMessage['data']) => void;
}


export interface WebsocketState {
  status: 'open' | 'connected' | 'disconnected' | 'refreshing';
}

export const WebsocketContextC = createContext<WebsocketContext>();

export function useWebsockets() {
  const context = useContext(WebsocketContextC);

  if (!context)
    throw new Error('useWebsockets must be within a WebsocketContextC Provider')

  return context;
}

export type MessageEvent = {
  res: OutgoingServerMessage['data'];
  reply: (msg: OutgoingClientMessage['data']) => void;
}

// export function createWebocket() {
//   const socket = new WebSocket(import.meta.env.VITE_API_WS_PATH)
//   socket.binaryType = 'arraybuffer';
//   return socket;
// }

export interface SocketInputs {
  request: (data: ArrayBuffer, cb?: (data: ArrayBuffer) => void) => void;
};

export function provideWebsockets(): WebsocketContext {
  const [state, setState] = createSignal<WebsocketState>({ status: 'open' });
  const socket: Socket<SocketInputs> = io(import.meta.env.VITE_API_WS_PATH, { transports: ['websocket'] });
  const eventlistener = new EventTarget();

  const send = (msg: OutgoingClientMessage['data']) => {
    socket.send("request", encodeOutgoingClientMessage({ data: msg }))
  };

  const sendWithAck = async (msg: OutgoingClientMessage['data']) => {
    const res = await socket.timeout(5000).emitWithAck("request", encodeOutgoingClientMessage({ data: msg }))
    return decodeOutgoingServerMessage(new Uint8Array(res)).data;
  };

  const close = () => {
    setState({ status: "disconnected" });
    socket.close();
  }

  const login = async () => {
    const { access_token } = getAuthTokens();
    if (!access_token)
      return;
    const res = await sendWithAck({ type: 'client/login', access_token })
    if (res.type === 'server/auth' && res.status.type === 'success') {
      setState({ status: 'connected' })
      return true;
    }
  }

  const pingId = setInterval(() => {
    send({ type: 'client/ping' });
  }, 10000)

  onMount(() => {
    socket.on('connect', () => {
      login();
    })
    socket.on('request', (data: ArrayBuffer, cb) => {
      const res = decodeOutgoingServerMessage(new Uint8Array(data));
      if (
        res.data.type === 'server/auth' 
        && res.data.status.type === 'error' 
        && res.data.status.errorType === 'invalid_credentials'
      ) {
          close();
          logout();
          return;
      }

      const reply = (msg: OutgoingClientMessage['data']) => {
        if (cb) cb(encodeOutgoingClientMessage({ data: msg }))
        else send(msg);
      }

      eventlistener.dispatchEvent(new CustomEvent<MessageEvent>(res.data.type, {
        detail: { res: res.data, reply }
      }));
    })
    socket.on('disconnect', (reason) => {
      console.error(reason);
      setState({ status: "disconnected" })
    })
  })


  onCleanup(() => {
    close();
    clearInterval(pingId);
  })

  return {
    state,
    send,
    sendWithAck,
    login,
    socket,
    onMessage: (type, cb) => {
      const internalCb = (ev: CustomEventInit<MessageEvent>) => {
        if (!ev.detail)
          return;
        const res = cb(ev.detail.res as OutgoingServerMessageTypeMap[typeof type]);
        if (res) ev.detail.reply(res)
      };
      onMount(() => eventlistener.addEventListener(type, internalCb))
      onCleanup(() => eventlistener.removeEventListener(type, internalCb))
    }
  }
}