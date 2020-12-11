import React from 'react'
import { Navbar } from '../navbar/navbar'
import GamePanel from './saloon/game-panel'
import PlayerList from './saloon/player-list'
import './wrapper.css'

function Wrapper(): JSX.Element {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex mt-16 justify-center items-center">
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
