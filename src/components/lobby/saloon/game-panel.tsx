import React from 'react'
import { GameData } from '../../../util/types/data-types'

interface IGamePanelProps{
  game: GameData
}

const GamePanel: React.FC<IGamePanelProps> = (props) => {
  return (
    <div className="flex-1 pl-4 flex justify-center items-center">
      <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
        <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4">
          {/* Title */}
          <div>
            <div className="text-xl font-bold text-gray-700">Paramètres</div>
            <div className="text-sm font-base text-gray-500"></div>
          </div>
        </div>
        {/* Image */}
        <div className="rounded-lg m-4">
          <img src={props.game.theme.image} alt="Video Games" />
        </div>
        {/* Information */}
        <div className="flex flex-col items-center space-y-2 py-4">
          <div className="text-xl font-bold text-gray-900">{props.game.theme.name}</div>
          <div className="text-md font-semibold text-gray-500">Nombre de joueurs : {props.game.players.length}</div>
          <div className="flex flex-row items-center space-x-2">
            <div className="text-md font-semibold text-gray-500">Langage : </div>
            <svg className="text-white w-9 h-6 " xmlns="http://www.w3.org/2000/svg">
                <rect className="w-9 h-6 " fill="#ED2939"/>
                <rect className="w-6 h-6 " fill="#fff"/>
                <rect className="w-3 h-6 " fill="#002395"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePanel
