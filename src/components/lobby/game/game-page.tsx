import React from 'react'
import { GameData } from '../../../util/types/data-types'

interface IGamePage {
  game: GameData,
  imgBase64: string
}

const GamePage: React.FC = (props) => {
  return (
    <div>
      <div className="bg-white overflow-hidden border-b-4 border-green-500 w-full">
        <img src="https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd" alt="People" className="w-full object-cover h-32 sm:h-48 md:h-64" />
        <div className="p-4 md:p-6">
          <p className="text-green-500 font-semibold text-xs mb-1 leading-none">News</p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">The Coldest Sunset</h3>
          <div className="text-sm flex items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
