import React from 'react'
import { ThemeData } from '../../../util/types/data-types'

interface GetThemeValue{
  theme: ThemeData
}

const SelectOptionGame: React.FC<GetThemeValue> = (props) =>{
  return (
    <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-green-200 ">
      <div className="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-teal-600 hover:text-teal-100 border-teal-600">
        <div className="w-full items-center flex">
          <div className="mx-2 leading-6">{props.theme.name}</div>
        </div>
      </div>
    </div>
  )
}

export default SelectOptionGame
