import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import AuthenticationContext from '../../../contexts/authentication-context';
import WebsocketContext from '../../../contexts/websocket-context';
import useFetch from '../../../hooks/fetch-hook';
import { Config } from '../../../util/config';
import { ThemeData } from '../../../util/types/data-types';
import { ThemesResponse } from '../../../util/types/response-types';
import { CreateClientToServer, SocketEvent } from '../../../util/types/websocket-types';
import SelectOptionGame from './select-option-game';

const LobbyCreation: React.FC = () => {

  const node= useRef<HTMLDivElement>(null);
  const history = useHistory();
  const authContext = useContext(AuthenticationContext);
  const { socket } = useContext(WebsocketContext);

  useEffect(() => {
    getThemesQuery.get();
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const [getThemesQueryState, getThemesQuery] = useFetch<ThemesResponse>(`${Config.API_URL}/themes`, true);
  const [showModalCreateGame, setShowModalCreateGame] = useState(false);
  const [themes, setThemes] = useState<ThemeData[]>([]);
  const [formTheme, setFormTheme] = useState<ThemeData>({ id:'', name: '', createdAt:'', updatedAt:''});


  const handleSubmitSignUpForm = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    socket.emit(SocketEvent.CREATE, {
      authorId: authContext.authUser.id,
      themeId: formTheme.id
    } as CreateClientToServer);

    history.push({
      pathname:'/lobby'
    });
  };

  const handleClick = (e: MouseEvent) => {
    if(node.current && node.current.contains(e.target as Node)) {
      return;
    }
    setShowModalCreateGame(false);
  }

  const handleThemeClick = (e: MouseEvent, themeName: ThemeData) :void => {
    setFormTheme(themeName);
  }

  const handleNewGameClick = async () => {
    let myThemes: ThemeData[] ;
    if (getThemesQueryState.fetched) {
      myThemes = await getThemesQueryState.data.themes;
      console.log(myThemes);
      setThemes(myThemes);
    }
    setShowModalCreateGame(true)
  }

  const createGameModal = (
        <form onSubmit={handleSubmitSignUpForm}>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="py-3 sm:max-w-xl sm:mx-auto">
              <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-xl border-gray-50 border-solid border-2"  ref={node}>
                <div className="px-12 py-5">
                  <h2 className="text-gray-800 text-3xl font-semibold">Créer une partie</h2>
                </div>
                <div className="px-12 py-5">
                  <h5 className="text-gray-500 text-xl font-semibold text-center">Choisir un thème</h5>
                </div>
                <div className="flex-auto flex flex-col items-center h-64">
                  <div className="flex flex-col items-center relative">
                    <div className="w-full">
                      <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                        <div className="flex flex-auto flex-wrap"></div>
                          <input id="formThemeInput" value={formTheme.name} name={formTheme.id} readOnly className=" w-full text-gray-800"/>
                        </div>
                      </div>
                      <div className="absolute shadow top-100 z-40 w-full left-0 rounded max-h-36 overflow-y-auto sidebar-spotify">
                        <div className="flex flex-col w-full">
                          {themes.map((value,i) => {
                            return <div onClick={() => handleThemeClick(null, value)}><SelectOptionGame theme={value} key={i}/></div>
                          })}
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
      <button onClick={() => handleNewGameClick()} className="font-medium text-gray-500 hover:text-green-light">Nouvelle partie</button>
      {showModalCreateGame ? createGameModal : null}
    </div>
  )
}

export default LobbyCreation;
