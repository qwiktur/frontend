import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthenticationContext from '../../contexts/authentication-context';
import JoinLobby from '../lobby/saloon/join-lobby';
import LobbyCreation from '../lobby/saloon/lobby-creation';
import { DropdownBackOffice } from './backoffice-dropdown';
import ConnectionContainer from './connection-container';
import { LogoutButton } from './logout-button';

export const Navbar: React.FC = () => {
    const authContext = useContext(AuthenticationContext);

    return (
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 pb-4 rounded-lg shadow-md bg-white">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to="/">
                            <a href="#">
                                <span className="sr-only">Qwiktur</span>
                                <img className="h-8 w-auto sm:h-10" src="/img/qwiktur.png" />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {authContext.isAuthenticated ? <LobbyCreation /> : null }
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {authContext.isAuthenticated ? <JoinLobby /> : null }
                </div>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    {(authContext.isAuthenticated && authContext.authUser.role == 'admin') ? <DropdownBackOffice /> : null}
                    {authContext.isAuthenticated ? <LogoutButton /> : <ConnectionContainer />}
                </div>
            </nav>
        </div >
    )
}
