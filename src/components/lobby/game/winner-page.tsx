import React from 'react'
import { UserData } from '../../../util/types/data-types'

interface IWinner {
  user: UserData
}

const WinnerPage: React.FC<IWinner> = (props) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col mt-16">
      <img src="https://www.pngarts.com/files/5/PUBG-Winner-Winner-Chicken-Dinner-PNG-Picture.png" className="w-96 animate-spin-slow"/>
      <div className="m-auto px-4 py-8 max-w-xl mt-16">
        <div className="bg-white shadow-2xl" >
          <div className="px-4 py-2 mt-2 bg-white">
            <div className="user flex items-center -ml-3 mt-8 mb-4">
              <h2 className="font-bold text-2xl text-gray-800">{props.user.username} is the winner !</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WinnerPage
