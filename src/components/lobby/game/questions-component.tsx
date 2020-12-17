import React, { useEffect } from 'react'
import { GameData, QuestionData } from '../../../util/types/data-types'

interface IGamePage {
  game: GameData,
  imgBase64: string,
  onAnswer: (choice: string, question: QuestionData) => void,
  question: QuestionData
}

const QuestionsComponent: React.FC<IGamePage> = (props) => {

  const val = [0,1,2,3];

  return (
    <div className="flex flex-row justify-center mt-16">
      <div className="bg-white border-b-4 border-green-500 w-4/5 shadow-lg rounded-lg">
        <img src={props.imgBase64} alt="People" className="w-full object-cover h-32 sm:h-72 md:h-96 rounded-lg" />
        <div className="p-4 md:p-6">
          <p className="text-green-500 font-semibold text-xs mb-1 leading-none">{props.game.theme.name}</p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">{props.question.title}</h3>
          <div className="flex-col text-sm flex items-center mt-8">
            <div className="flex flex-row justify-center">
              <button onClick={() => props.onAnswer(props.question.choices[val[0]].label, props.question)} className='relative bg-blue-500 text-white rounded-lg w-64 h-12 text-xl font-bold overflow-visible'>
                {props.game ? props.question.choices[val[0]].label : null}
              </button>
              <button onClick={() => props.onAnswer(props.question.choices[val[1]].label, props.question)} className='relative bg-green-500 text-white ml-6 rounded-lg w-64 h-12 text-xl font-bold overflow-visible'>
              {props.game ? props.question.choices[val[1]].label : null}
              </button>
            </div>
            <div className="flex flex-row justify-center">
              <button onClick={() => props.onAnswer(props.question.choices[val[2]].label, props.question)} className='relative bg-red-500 text-white mt-4 rounded-lg w-64 h-12 text-xl font-bold overflow-visible'>
              {props.game ? props.question.choices[val[2]].label : null}
              </button>
              <button onClick={() => props.onAnswer(props.question.choices[val[3]].label, props.question)} className='relative bg-purple-500 text-white ml-6 mt-4 rounded-lg w-64 h-12 text-xl font-bold overflow-visible'>
              {props.game ? props.question.choices[val[3]].label : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsComponent
