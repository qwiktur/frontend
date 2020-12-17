import React from 'react';

/**
 * Websocket context state interface.
 */
interface WebsocketContextState {
    socket: SocketIOClient.Socket;
}

/**
 * Websocket context.
 * 
 * This context is used to gets an unique socket connected with the API from any component.
 */
const WebsocketContext = React.createContext<WebsocketContextState>({ socket: null });

export default WebsocketContext;
