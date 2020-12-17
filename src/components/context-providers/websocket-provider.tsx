import React, { useState, useEffect } from 'react';
import WebsocketContext from '../../contexts/websocket-context';
import { Config } from '../../util/config';
import io from 'socket.io-client';

/**
 * Websocket provider component.
 * 
 * This component will connect a socket to the API and sets it on the websocket context state.
 * 
 * @param props Properties
 */
const WebsocketProvider: React.FC = (props) => {
    const [socket, setSocket] = useState<SocketIOClient.Socket>(null);

    useEffect(() => {
        setSocket(io(Config.WEBSOCKET_URL));
        return () => {
            if (socket != null && socket.connected) {
                socket.disconnect();
            }
        }
    }, []);

    return (
        <WebsocketContext.Provider value={{ socket }}>{props.children}</WebsocketContext.Provider>
    )
}

export default WebsocketProvider;
