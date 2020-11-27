import { Field, Formik } from 'formik';
import * as yup from 'yup';
import React, { useState, useContext, useEffect } from 'react';
import AuthenticationContext from "../../contexts/authentication-context";
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { SignInResponse, SignUpResponse, UserInfoResponse } from '../../util/types/response-types';
import { LocalStorageKey } from '../../util/local-storage';

/**
 * Valeur utilisé pour le formulaire d'inscription.
 */
interface SignInFormValues {
    name: string;
    password: string;
}

/**
 * Valeur utilisé pour le formulaire de connection.
 */
interface SignUpFormValues {
    name: string;
    password: string;
    passwordConfirmation: string;
}

const ConnectionContainer: React.FC = () => {
    const userContext = useContext(AuthenticationContext);
    const [showModalSignIn, setShowModalSignIn] = useState(false);
    const [showModalSignUp, setShowModalSignUp] = useState(false);
    const [signInQueryState, signInQuery] = useFetch<SignInResponse>(`${Config.API_URL}/auth/signin`);
    const [signUpQueryState, signUpQuery] = useFetch<SignUpResponse>(`${Config.API_URL}/auth/signup`);
    const [userInfoQueryState, userInfoQuery] = useFetch<UserInfoResponse>(`${Config.API_URL}/users/userinfo`);

    useEffect(() => {
        if (signInQueryState.fetched && signInQueryState.data != null) {
            signInQuery.reset();
            const accessToken = signInQueryState.data.access_token;
            localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, accessToken);
            userInfoQuery.get();
            handleToggleSignInModal();
        }
    });

    useEffect(() => {
        if (signUpQueryState.fetched && signUpQueryState.data != null) {
            signUpQuery.reset();
            localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, signUpQueryState.data.access_token);
            userInfoQuery.get();
            handleToggleSignUpModal();
        }
    });

    useEffect(() => {
        if (userInfoQueryState.fetched && userInfoQueryState.data != null) {
            userContext.setAuthUser(userInfoQueryState.data.user);
        }
    });

    /**
     * Méthode d'inscription.
     */
    const handleToggleSignUpModal = () => {
        setShowModalSignIn(false);
        setShowModalSignUp(true);
    }
    /**
     * Inscrit l'utilisateur.
     * @param values 
     */
    const handleSubmitSignUpForm = async (values: SignUpFormValues) => {
        await signUpQuery.post(null, {
            name: values.name,
            password: values.password
        });
    };
    /**
     * Formulaire Formik pour l'inscription d'un utilisateur.
     */
    const signUpFormValidationSchema = yup.object<SignUpFormValues>({
        name: yup.string().required('Vous devez écrire votre pseudo').typeError('Nom invalide'),
        password: yup.string().required('Vous devez écrire votre mot de passe').typeError('Mot de passe invalide'),
        passwordConfirmation: yup.string().required('Vous devez confirmer votre mot de passe').oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas')
    });

    /**
     * Méthode connection.
     */
    const handleToggleSignInModal = () => {
        setShowModalSignIn(true);
    }
    /**
     * Connecte l'utilisateur.
     * @param values 
     */
    const handleSubmitSignInForm = async (values: SignInFormValues) => {
        console.log('values');
        await signInQuery.post(null, {
            name: values.name,
            password: values.password
        });
    };
    /**
     * Formulaire Formik pour la connection d'un utilisateur.
     */
    const signInFormValidationSchema = yup.object<SignInFormValues>({
        name: yup.string().required('Vous devez écrire votre pseudo').typeError('Nom invalide'),
        password: yup.string().required('Vous devez écrire votre mot de passe').min(8, 'Mot de passe trop court').typeError('Mot de passe invalide')
    });

    /**
     * Modal d'inscription.
     */
    const signUpModal = (
        // TODO Créer le modal d'inscription.
        <></>
    )

    /**
     * Modal de connection.
     */
    const signInModal = (
        <Formik
            initialValues={{ name: '', password: '' }}
            validationSchema={signInFormValidationSchema}
            onSubmit={handleSubmitSignInForm}
        >
            {({ handleSubmit, handleChange, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">Connection</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalSignIn(false)}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <label className="text-green-light">Pseudo</label>
                                    <input
                                        className="form-input mt-1 block w-full"
                                        placeholder="Jane Doe"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        value={values.name} />
                                    <label className="text-green-light">Mot de passe</label>
                                    <input
                                        className="form-input mt-1 block w-full"
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={values.password} />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                        <button onClick={() => setShowModalSignIn(false)}
                                            className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                                            Fermer</button>
                                    </div>
                                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                        <button onClick={handleToggleSignUpModal}
                                            className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                                            S'inscrire</button>
                                    </div>
                                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                        <button type="submit" className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                                            Se connecter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
    return (
        <>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a onClick={handleToggleSignInModal} className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                    Se connecter
                </a>
            </div>
            {showModalSignIn ? signInModal : null}
            {showModalSignUp ? signUpModal : null}
        </>
    )
}

export default ConnectionContainer;
