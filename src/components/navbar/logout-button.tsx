import React, { useContext } from 'react';
import AuthenticationContext from '../../contexts/authentication-context';
import { ButtonComponent } from '../common/button';
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
        <ButtonComponent onClick={handleLogout} value="Déconnexion" />
    )
}
