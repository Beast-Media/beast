import typia from 'typia';

export interface MessageBase {
    type: string;
}

export type MessageTypeToDataMap<Data extends MessageBase> = {
    [K in Data['type']]: Extract<Data, { type: K }>
};


// ------------------------------------------

export interface ClientPlayerStart extends MessageBase {
    type: 'client/player/start';
    mediaId: string;
}

export interface ClientPlayerAction extends MessageBase {
    type: 'client/player/action';
    action: {
        type: 'play'
    } | {
        type: 'pause'
    } | {
        type: 'seek'
        to: number;
    }
}

export interface ClientPlayerEnd extends MessageBase {
    type: 'client/player/end';
}

export interface ClientPing extends MessageBase {
    type: 'client/ping';
}

export interface ClientLogin extends MessageBase {
    type: 'client/login';
    access_token: string;
}

export interface OutgoingClientMessage {
    data: ClientPlayerStart | ClientPlayerEnd | ClientPlayerAction | ClientPing | ClientLogin;
};

export type OutgoingClientMessageTypes = OutgoingClientMessage['data']['type'];
export type OutgoingClientMessageTypeMap = MessageTypeToDataMap<OutgoingClientMessage['data']>
export const encodeOutgoingClientMessage = typia.protobuf.createEncode<OutgoingClientMessage>();
export const decodeOutgoingClientMessage = typia.protobuf.createDecode<OutgoingClientMessage>();


//===========================================================

export interface ServerPlayerPosition extends MessageBase {
    type: 'server/player/position';
    mediaId: string;
    seek: number;
}

export interface ServerPlayerData extends MessageBase {
    type: 'server/player/data';
    data: Uint8Array;
}

export interface ServerPing extends MessageBase {
    type: 'server/ping';
}

export interface ServerAuthStatus extends MessageBase {
    type: 'server/auth';
    status: {
        type: 'error',
        errorType: 'invalid_credentials' | 'expired'
    } | {
        type: 'success'
    }
}

export interface OutgoingServerMessage {
    data: ServerPlayerPosition | ServerPing | ServerAuthStatus | ServerPlayerData
}

export type OutgoingServerMessageTypes = OutgoingServerMessage['data']['type'];
export type OutgoingServerMessageTypeMap = MessageTypeToDataMap<OutgoingServerMessage['data']>
export const encodeOutgoingServerMessage = typia.protobuf.createEncode<OutgoingServerMessage>();
export const decodeOutgoingServerMessage = typia.protobuf.createDecode<OutgoingServerMessage>();
