import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';

const JoinLobby: React.FC = () => {

  const node= useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const [showModalJoinGame, setShowModalJoinGame] = useState(false);
  const [codeGame, setCodeGame] = useState('');

  const handleSubmitSignUpForm = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    history.push({
      pathname:'/lobby',
      state: codeGame
    });
  };

  const handleClick = (e: MouseEvent) => {
    if(node.current && node.current.contains(e.target as Node)) {
      return;
    }
    setShowModalJoinGame(false);
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setCodeGame(e.currentTarget.value);
  }

  const handleJoinGameClick = async () => {
    setShowModalJoinGame(true)
  }

  const joinGameModal = (
        <form onSubmit={handleSubmitSignUpForm}>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
              <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-xl border-gray-50 border-solid border-2"  ref={node}>
                <div className="px-12 py-5">
                  <h2 className="text-gray-800 text-3xl font-semibold">Rejoindre une partie</h2>
                </div>
                <div className="px-12 py-5">
                  <h5 className="text-gray-500 text-xl font-semibold text-center">Saisir le code</h5>
                </div>
                <div className="flex-auto flex flex-col items-center h-24">
                  <div className="flex flex-col items-center relative">
                    <div className="w-full">
                      <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        <div className="flex flex-auto flex-wrap"></div>
                          <input id="formThemeInput" value={codeGame} onChange={handleChange} className=" w-full text-gray-800"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/4 mx-auto flex flex-col">
                    <button type="submit" className="py-3 my-8 text-lg bg-gradient-to-r from-green-light to-green-dark rounded-xl text-white">Jouer</button>
                  </div>
                </div>
              </div>
            </div>
        </form>
      )

  return (
    <div>
      <button onClick={() => handleJoinGameClick()} className="font-medium text-gray-500 hover:text-green-light">Rejoindre une partie</button>
      {showModalJoinGame ? joinGameModal : null}
    </div>
  )
}

export default JoinLobby;
