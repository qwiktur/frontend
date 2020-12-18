import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Socket } from 'socket.io-client'
import AuthenticationContext from '../../contexts/authentication-context'
import WebsocketContext from '../../contexts/websocket-context'
import useFetch from '../../hooks/fetch-hook'
import { Config } from '../../util/config'
import { GameData, QuestionData } from '../../util/types/data-types'
import { CreateGameResponse, GetGameResponse, GetQuestionResponse } from '../../util/types/response-types'
import { AnswerClientToServer, AnswerServerToClient, CreateServerToClient, ErrorServerToClient, JoinServerToClient, SocketEvent, StartClientToServer, StartServerToClient, AnswerImageClientToServer, AnswerImageServerToClient } from '../../util/types/websocket-types'
import { Navbar } from '../navbar/navbar'
import GamePage from './game/game-page'
import WinnerPage from './game/winner-page'
import GamePanel from './saloon/game-panel'
import PlayerList from './saloon/player-list'
import './wrapper.css'

interface CurrentGameId {
  gameId: string
}


function Wrapper(): JSX.Element {

  const authContext = useContext(AuthenticationContext);
  const { socket } = useContext(WebsocketContext);
  const history = useHistory();
  const [getGameQueryState, getGameQuery] = useFetch<GetGameResponse>(null, true);
  const [currentGame, setCurrentGame] = useState<GameData>(null);
  const location = useLocation();
  const [imgBase64, setImgBase64] = useState('');
  const [screen, setScreen] = useState(1);
  const [getNextQuestionQueryState, getNextQuestionQuery] = useFetch<GetQuestionResponse>(null);
  const [nextQuestion, setNextQuestion] = useState<QuestionData>(null);
  const [winner, setWinner] = useState<boolean>(false);
  const [answerValid, setAnswerValid] = useState<boolean>(null);

  useEffect(() => {
    if (!authContext.isAuthenticated) {
      history.push('/');
    }

    socket.on(SocketEvent.CREATE, (data: CreateServerToClient) => {
      getGameQuery.get(`${Config.API_URL}/games/${data.gameId}`);
    });

    socket.on(SocketEvent.ERROR, (data: ErrorServerToClient) => {
      console.log(data.message);
    });

    socket.on(SocketEvent.JOIN, (data: JoinServerToClient) => {
      getGameQuery.reset();
      getGameQuery.get(`${Config.API_URL}/games/${data.gameId}`);
    });

    socket.on(SocketEvent.START, (data: StartServerToClient) => {
      setScreen(2);
      setImgBase64(data.imgBase64);
      getNextQuestionQuery.get(`${Config.API_URL}/questions/${data.questionId}`);
    });

    socket.on(SocketEvent.ANSWER, (data: AnswerServerToClient) => {
      setImgBase64(data.imgBase64);
      setAnswerValid(data.correct);
      getNextQuestionQuery.get(`${Config.API_URL}/questions/${data.nextQuestionId}`);
    })

    socket.on(SocketEvent.ANSWER_IMAGE, (data: AnswerImageServerToClient) => {
      if (data.correct == true){
        setScreen(3);
        setWinner(true)
      }
    })

    return () => {
      socket.off(SocketEvent.CREATE);
      socket.off(SocketEvent.ERROR);
      socket.off(SocketEvent.JOIN);
      socket.off(SocketEvent.START);
      socket.off(SocketEvent.ANSWER);
      socket.off(SocketEvent.ANSWER_IMAGE);
    }
  }, []);

  useEffect(() => {
    if (getGameQueryState.fetched) {
      setCurrentGame(getGameQueryState.data.game);
      localStorage.setItem('gameId', getGameQueryState.data.game.id);
    }
  }, [getGameQueryState]);

  useEffect(() => {
    if(getNextQuestionQueryState.fetched) {
      getNextQuestionQuery.reset();
      setNextQuestion(getNextQuestionQueryState.data.question);
    }
  }, [getNextQuestionQueryState])

  const handleStart = () => {
    socket.emit(SocketEvent.START, {
      code: currentGame.code,
      userId: authContext.authUser.id
    } as StartClientToServer);
  }

  const handleClickButtonAnswer = (choice: string, question: QuestionData) => {
    console.log(choice);
    socket.emit(SocketEvent.ANSWER, {
      code: currentGame.code,
      userId: authContext.authUser.id,
      choice: choice,
      questionId: question.id
    } as AnswerClientToServer)
  }

  const handleAnswerImage = (title: string) => {
    console.log(title)
    socket.emit(SocketEvent.ANSWER_IMAGE, {
      code: currentGame.code,
      userId: authContext.authUser.id,
      title: title
    } as AnswerImageClientToServer)
  }

  const GameWrap = () => {

    let elements;
    switch (screen) {
      case 1: elements = (
        <>
          <div className="text-center mt-4">
            <h2 className="text-green-dark text-xl">Code: {currentGame ? currentGame.code : 'Chargement...'}</h2>
          </div>
          <div className="flex mt-16 items-center">
            <div className="flex flex-row items-stretch w-full mx-2">
              <div className="w-4/6">
                {currentGame ? <PlayerList onStart={handleStart} listPlayers={currentGame.players} /> : null}
              </div>
              <div className="w-2/6">
                {currentGame ? <GamePanel game={currentGame} /> : null}
              </div>
            </div>
          </div>
        </>
      );
      break;

      case 2: elements = (
        <>
         {currentGame && nextQuestion? <GamePage game={currentGame} imgBase64={imgBase64} onAnswer={handleClickButtonAnswer} answerValid={answerValid} onAnswerImage={handleAnswerImage} question={nextQuestion} /> : null}
        </>
      );
      break;

      case 3: elements = (
        <>
          {winner ? <WinnerPage user={authContext.authUser} /> : null}
        </>
      );
      break;
    }
    return elements;
  }


  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Navbar />
      <GameWrap />
    </div>
  )
}

export default Wrapper
