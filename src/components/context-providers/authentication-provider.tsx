import React, { useState } from 'react';
import AuthenticationContext from '../../contexts/authentication-context';
import { UserData } from '../../util/types/data-types';

const AuthenticationProvider: React.FC = (props) => {
    const [authUser, setAuthUser] = useState<UserData>(null);

    // TODO: Il manque la récupération de l'utilisateur avec le Hook de Jérémy.
    return (
        <AuthenticationContext.Provider value={{ authUser, isAuthenticated: authUser != null, setAuthUser }}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationProvider;