import React from 'react'
import GamePanel from './saloon/game-panel'
import PlayerList from './saloon/player-list'
import './wrapper.css'

function Wrapper(): JSX.Element {
  return (
    <div className="flex flex-row items-stretch px-12 w-screen bg-gray-100">
      <div className="w-4/6">
        <PlayerList />
      </div>
      <div className="w-2/6">
        <GamePanel />
      </div>
    </div>
  )
}

export default Wrapper
