import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useState, useContext } from 'react';
import AuthenticationContext from "../../contexts/authentication-context";
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { SignInResponse, SignUpResponse, UserInfoResponse } from '../../util/types/response-types';

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

    /**
     * Méthode d'inscription.
     */
    const handleToggleSignInModal = () => {
        setShowModalSignUp(false);
        setShowModalSignIn(true);
    }

    /**
     * Méthode connection.
     */
    const handleToggleSignUpModal = () => {
        setShowModalSignUp(true);
    }

    /**
     * Connecte l'utilisateur.
     * @param values 
     */
    const handleSubmitSignUpForm = async (values: SignUpFormValues) => {
        await signUpQuery.post(null, {
            name: values.name,
            password: values.password
        });
    };

    /**
     * Formulaire Formik pour la connection d'un utilisateur.
     */
    const signUpFormValidationSchema = yup.object<SignUpFormValues>({
        name: yup.string().required('Vous devez écrire votre pseudo').typeError('Nom invalide'),
        password: yup.string().required('Vous devez écrire votre mot de passe').min(8, 'Mot de passe trop court').typeError('Mot de passe invalide'),
        passwordConfirmation: yup.string().required('Vous devez confirmer votre mot de passe').oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas')
    });

    /**
     * Modal d'inscription.
     */
    const signInModal = (
        // TODO Créer le modal d'inscription.
        <></>
    )

    /**
     * Modal de connection.
     */
    const signUpModal = (
        <Formik
            initialValues={{ name: '', password: '', passwordConfirmation: '' }}
            validationSchema={signUpFormValidationSchema}
            onSubmit={handleSubmitSignUpForm}
        >
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >

                <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold">Connection</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModalSignUp(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-gray-600 text-lg leading-relaxed">
                                I always felt like I could do anything. That’s the main
                                thing people are controlled by! Thoughts- their perception
                                of themselves! They're slowed down by their perception of
                                themselves. If you're taught you can’t do anything, you
                                won’t do anything. I was taught I could do everything.
                                    </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a onClick={() => setShowModalSignUp(false)} className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                                    Fermer
                            </a>
                            </div>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a onClick={handleToggleSignInModal} className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                                    S'inscrire
                            </a>
                            </div>

                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                                    Se connecter
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    )
    return (
        <>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a onClick={handleToggleSignUpModal} className=" ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                    Se connecter
                </a>
            </div>
            {showModalSignIn ? signInModal : null}
            {showModalSignUp ? signUpModal : null}
        </>
    )
}

export default ConnectionContainer;
