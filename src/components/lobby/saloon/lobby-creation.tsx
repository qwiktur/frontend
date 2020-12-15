import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../../hooks/fetch-hook';
import { Config } from '../../../util/config';
import { ThemeData } from '../../../util/types/data-types';
import { CreateGameResponse, GetThemesResponse } from '../../../util/types/response-types';
import SelectOptionGame from './select-option-game';

const LobbyCreation: React.FC = () => {

  const node= useRef<HTMLDivElement>(null);

  useEffect(() => {
    getThemesQuery.get();
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const [createGameQueryState, createGameQuery] = useFetch<CreateGameResponse>(`${Config.API_URL}/games`, true);
  const [getThemesQueryState, getThemesQuery] = useFetch<GetThemesResponse>(`${Config.API_URL}/themes`, true);
  const [showModalCreateGame, setShowModalCreateGame] = useState(false);
  const [themes, setThemes] = useState<ThemeData[]>([]);
  const [formTheme, setFormTheme] = useState<ThemeData>({ id:'', name: '', createdAt:'', updatedAt:''});

  /**
     * Inscrit l'utilisateur.
     * @param values 
     */
  const handleSubmitSignUpForm = async () => {

    // //console.log(values)
    // await createGameQuery.post(null, {
    //   theme: formTheme.id
    // }).then((value) => {
    //   console.log(value)
    // }).catch((err) => {
    //   console.error(err)
    // });
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
                          <input id="formThemeInput" value={formTheme.name} name={formTheme.id} className=" w-full text-gray-800"/>
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
