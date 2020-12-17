import React from 'react'
import { GameData, QuestionData } from '../../../util/types/data-types';
import QuestionsComponent from './questions-component';

interface IGamePage {
  game: GameData,
  imgBase64: string,
  onAnswer: (choice: string, question: QuestionData) => void,
  question: QuestionData
}


const GamePage: React.FC<IGamePage> = (props) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="w-3/4">
        <QuestionsComponent game={props.game} imgBase64={props.imgBase64} onAnswer={props.onAnswer} question={props.question} />
      </div>
      <div className="w-1/4 mt-16 -ml-8">
        <div className="mb-2 bg-white border-solid border-grey-light rounded border shadow-lg">
          <div className="bg-grey-lighter px-2 py-3 text-center">
            Réponse à l'image
          </div>
          <div className="p-3">
            <input className="input text-center text-xl border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-green-600 focus:outline-none active:outline-none active:border-indigo-600"/>
          </div>
          <div className="p-3 flex flex-row justify-center">
          <button className='relative bg-green-500 text-white rounded-lg w-64 h-12 text-xl font-bold overflow-visible'>
            Valider
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;
