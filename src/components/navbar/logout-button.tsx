import React, { useContext } from 'react';
import AuthenticationContext from '../../contexts/authentication-context';
import { LocalStorageKey } from '../../util/local-storage';

/**
 * Bouton de déconnection d'un utilisateur.
 */
export const LogoutButton: React.FC = () => {
    const userContext = useContext(AuthenticationContext);
    
    const handleLogout = () => {
        userContext.setAuthUser(null);
        localStorage.removeItem(LocalStorageKey.ACCESS_TOKEN);
    }

    return (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a onClick={handleLogout} href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                Déconnexion
            </a>
        </div>
    )
}
