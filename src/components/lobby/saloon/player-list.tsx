import React from 'react'
import PlayerCard from './player-card'

function PlayerList(): JSX.Element {
  return (
    <div className="min-h-screen flex-1 flex justify-center items-center">
      <div className="bg-white w-full rounded-lg shadow">
        <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4">
          {/* Title of lobby */}
          <div>
            <div className="text-xl font-bold text-gray-700">Miki Lobby</div>
            <div className="text-sm font-base text-gray-500">Waiting for more players...</div>
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
          <PlayerCard img="https://avatars0.githubusercontent.com/u/22825938?s=460&u=9ae7b54aeb4b029e3d7a7dc1b8d533d64fdf654f&v=4" username="Miki" />
          <PlayerCard img="https://avatars2.githubusercontent.com/u/56311353?s=460&u=a55442552cb1dda88346b1101d3a8e42140c7ded&v=4" username="Michel" />
          <PlayerCard img="https://avatars1.githubusercontent.com/u/44392462?s=460&u=e67b11dd298cfa80d5a2c45c72d9b9002e2dd27b&v=4" username="Théo" />
          <PlayerCard img="https://cdn.discordapp.com/avatars/147421804632211456/898744aeac115d06b139fad907656c20.webp?size=128" username="Jeremy" />
        </div>
        <div className="p-6 ">
          <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">Start the game</button>
        </div>
      </div>
    </div>
  )
}

export default PlayerList
