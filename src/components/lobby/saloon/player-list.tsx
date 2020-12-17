import React, { useContext } from 'react'
import AuthenticationContext from '../../../contexts/authentication-context'
import { UserData } from '../../../util/types/data-types'
import PlayerCard from './player-card'

interface IPlayerListProps{
  listPlayers: UserData[]
}

const PlayerList: React.FC<IPlayerListProps> = (props) => {

  const authUser = useContext(AuthenticationContext);

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="bg-white w-full rounded-lg shadow">
        <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4">
          {/* Title of lobby */}
          <div>
            <div className="text-xl font-bold text-gray-700">Lobby de {props.listPlayers[0].username}</div>
            <div className="text-sm font-base text-gray-500">En attente de joueurs...</div>
          </div>
          {/*Toggle private / public */}
          <div>
            <div className="flex items-center justify-center w-full  shadow-md rounded-full">
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="flex items-center">
                  <input id="toogleA" type="checkbox" className="hidden" />
                  <div
                    className="toggle__line w-20 h-10 bg-gray-300 rounded-full shadow-inner"
                  >
                  </div>
                  <div
                    className="toggle__dot bg-red-400 absolute w-10 h-10 rounded-full shadow flex items-center justify-center"
                  >
                    <svg className="text-white w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* List of players */}
        <div className="px-6">
          {
            props.listPlayers.map((player) => (<PlayerCard username={player.username} key={player.id} />))
          }
        </div>
        <div className="p-6 ">
          {props.listPlayers[0].id == authUser.authUser.id ?
          <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">Jouer</button>
          : <button className="p-4 bg-gray-400 w-full rounded-lg shadow text-xl font-medium uppercase text-white cursor-default" disabled>Jouer</button> }
        </div>
      </div>
    </div>
  )
}

export default PlayerList
