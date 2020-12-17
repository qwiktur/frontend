import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import AuthenticationContext from '../../contexts/authentication-context'
import WebsocketContext from '../../contexts/websocket-context'
import useFetch from '../../hooks/fetch-hook'
import { Config } from '../../util/config'
import { GameData } from '../../util/types/data-types'
import { CreateGameResponse, GetGameResponse } from '../../util/types/response-types'
import { CreateServerToClient, ErrorServerToClient, SocketEvent } from '../../util/types/websocket-types'
import { Navbar } from '../navbar/navbar'
import GamePanel from './saloon/game-panel'
import PlayerList from './saloon/player-list'
import './wrapper.css'

interface CurrentGameId {
  gameId: string
}

function Wrapper(): JSX.Element {

  const authContext = useContext(AuthenticationContext);
  const { socket } = useContext(WebsocketContext);
  const history = useHistory();
  const [getGameQueryState, getGameQuery] = useFetch<GetGameResponse>(null, true);
  const [currentGame, setCurrentGame] = useState<GameData>(null);
  const location = useLocation();

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      history.push('/');
    }

    const stateLocation = location.state.toString();
    socket.on(SocketEvent.CREATE, (data: CreateServerToClient) => {
      getGameQuery.get(`${Config.API_URL}/games/${data.gameId}`);
    });

    socket.on(SocketEvent.ERROR, (data: ErrorServerToClient) => {
      console.log(data.message);
    });

    return () => {
      socket.off(SocketEvent.CREATE);
      socket.off(SocketEvent.ERROR);
    }
  }, []);

  useEffect(() => {
    if (getGameQueryState.fetched) {
      setCurrentGame(getGameQueryState.data.game);
      console.log(getGameQueryState.data);
    }
  }, [getGameQueryState]);


  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex mt-16 items-center">
        <div>
          <h2>Code: {currentGame ? currentGame.code : 'Chargement mon gourmand...'}</h2>
        </div>
        <div className="flex flex-row items-stretch w-full mx-2">
          <div className="w-4/6">
            <PlayerList />
          </div>
          <div className="w-2/6">
            <GamePanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
