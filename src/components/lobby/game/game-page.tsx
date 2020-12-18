import React, { FormEvent, useEffect, useState } from 'react'
import { GameData, QuestionData } from '../../../util/types/data-types';
import AnswerImage from './answer-image';
import PopupMessage from './popup-message';
import QuestionsComponent from './questions-component';

interface IGamePage {
  game: GameData,
  imgBase64: string,
  onAnswer: (choice: string, question: QuestionData) => void,
  question: QuestionData,
  onAnswerImage: (title: string) => void;
  answerValid: boolean;
}

const GamePage: React.FC<IGamePage> = (props) => {

  const [visible, setVisible] = useState(false);

  const timerVisible = () => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
    setVisible(true);
  }

  useEffect(() => {
    timerVisible();
  }, [props.answerValid])

  return (
    <div className="flex flex-row justify-center">
      <div className="w-3/4">
        <QuestionsComponent game={props.game} imgBase64={props.imgBase64} onAnswer={props.onAnswer} question={props.question} />
      </div>
      <div className="w-1/4 mt-16 -ml-8">
        <AnswerImage onAnswerImage={props.onAnswerImage} />
        <div className="mt-16 flex flex-row justify-center w-full">
          {visible && (props.answerValid != null) ? <PopupMessage correct={props.answerValid} /> : null}
        </div>
      </div>
    </div>
  );
}

export default GamePage;
