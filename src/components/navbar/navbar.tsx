import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthenticationContext from '../../contexts/authentication-context';
import ConnectionContainer from './connection-container';
import { LogoutButton } from './logout-button';

export const Navbar: React.FC = () => {
    const authContext = useContext(AuthenticationContext);

    return (
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                            <span className="sr-only">Qwiktur</span>
                            <img className="h-8 w-auto sm:h-10" src="/img/qwiktur.png" />
                        </a>
                    </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a href="#" className="font-medium text-gray-500 hover:text-green-light">Nouvelle partie</a>

                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"></a>
                </div>

                {(authContext.isAuthenticated && authContext.authUser.role === 'Administrateur') && (
                    <div className=" md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link to="/backoffice">
                            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                                Déconnxeion
                            </a>
                        </Link>
                    </div>
                )}
                {authContext.isAuthenticated ? <LogoutButton /> : <ConnectionContainer />}

            </nav>
        </div >
    )
}
