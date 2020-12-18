import React, { useContext } from 'react'
import AuthenticationContext from '../../contexts/authentication-context';

export const HomePage: React.FC = () => {

    const authContext = useContext(AuthenticationContext);

    return (
        <>
            <div className="flex flex-row w-full">
                <div className ="w-1/4 mt-56 ml-16">
                    <div className="flex flex-col items-center ">
                        {/* Title */}
                        <div className="text-left w-80">
                            <div className="text-black font-bold text-4xl font-montserrat">
                                Testez votre
                            </div>
                            <div className="text-black font-bold text-4xl font-montserrat">
                                culture générale
                            </div>
                            <div className="text-black font-bold text-4xl font-montserrat">
                                avec Qwiktur !
                            </div>
                        </div>
                        <div className="border-solid border-b border-2 border-gray-400 w-8 mt-6 mr-16"></div>
                        {/* Text */}
                        <div className="text-left mt-6 w-80">
                            <div className="text-black font-regular text-xl font-montserrat">
                                Le test de culture générale
                            </div>
                            <div className="text-black font-regular text-xl font-montserrat">
                                en ligne qui te permet de
                            </div>
                            <div className="text-black font-regular text-xl font-montserrat">
                                défier tes amis.
                            </div>
                            <div className="text-black font-bold text-xl font-montserrat">
                                Jouez dès maintenant !
                            </div>
                        </div>
                        {/* Buttons */}
                        <div>
                            <button className="bg-green-500 hover:bg-green-700 text-white rounded-sm w-36 h-12 text-lg font-bold overflow-visible mt-6 -ml-2">
                                Jouer
                            </button>
                            <button className="bg-white border-green-500 hover:border-green-700 hover:text-green-900 border-solid border-2 text-green-700 rounded-sm w-36 h-12 text-lg overflow-visible ml-4 mt-6">
                                Règles du jeu
                            </button>
                        </div>
                    </div>
                </div>
                <div className ="w-3/4 mt-36 ml-6">
                    <img src="/img/qwiktur-livre.jpg" />
                </div>
            </div>
        </>
    )
}
