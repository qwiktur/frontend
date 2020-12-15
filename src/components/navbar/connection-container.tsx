import { Formik } from 'formik';
import * as yup from 'yup';
import React, { useState, useContext, useEffect, useRef } from 'react';
import AuthenticationContext from '../../contexts/authentication-context';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { SignInResponse, SignUpResponse, UserInfoResponse } from '../../util/types/response-types';
import { LocalStorageKey } from '../../util/local-storage';
import { SignInFormValues } from '../../util/types/form-data-types';

/**
 * Valeur utilisé pour le formulaire d'inscription.
 */
interface SignUpFormValues {
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}

const ConnectionContainer: React.FC = () => {
    const node= useRef<HTMLDivElement>(null);
    const userContext = useContext(AuthenticationContext);
    const [showModalSignIn, setShowModalSignIn] = useState(false);
    const [showModalSignUp, setShowModalSignUp] = useState(false);
    const [signInQueryState, signInQuery] = useFetch<SignInResponse>(`${Config.API_URL}/auth/login`);
    const [signUpQueryState, signUpQuery] = useFetch<SignUpResponse>(`${Config.API_URL}/auth/signup`);
    const [userInfoQueryState, userInfoQuery] = useFetch<UserInfoResponse>(`${Config.API_URL}/users/info`);

    useEffect(() => {
        if (signInQueryState.fetched && signInQueryState.data != null) {
            signInQuery.reset();
            localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, signInQueryState.data.accessToken);
            userInfoQuery.get();
            handleToggleSignInModal();
        }
        document.addEventListener('mousedown', handleClick);
        // return function to be called when unmounted
        return () => {
        document.removeEventListener('mousedown', handleClick);
        };
    });

    useEffect(() => {
        if (signUpQueryState.fetched && signUpQueryState.data != null) {
            signUpQuery.reset();
            localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, signUpQueryState.data.accessToken);
            userInfoQuery.get();
            handleToggleSignUpModal();
        }
    });

    useEffect(() => {
        if (userInfoQueryState.fetched && userInfoQueryState.data != null) {
            userContext.setAuthUser(userInfoQueryState.data.user);
        }
    });

    const handleClick = (e: MouseEvent) => {
    if(node.current && node.current.contains(e.target as Node)) {
        return;
    }
    setShowModalSignUp(false);
    setShowModalSignIn(false);
    }

    /**
     * Ouvre le modal pour l'inscription de l'utilisateur.
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
            email: values.email,
            username: values.username,
            password: values.password
        });
    };
    /**
     * Formulaire Formik pour l'inscription d'un utilisateur.
     */
    const signUpFormValidationSchema = yup.object<SignUpFormValues>({
        email: yup.string().required('Vous devez écrire votre adresse e-mail.').email('Votre adresse e-mail n\'est pas au bon format.'),
        username: yup.string().required('Vous devez écrire votre nom d\'utilisateur.').typeError('Nom invalide'),
        password: yup.string().required('Vous devez écrire votre mot de passe.').min(8, 'Mot de passe trop court').typeError('Mot de passe invalide'),
        passwordConfirmation: yup.string().required('Vous devez confirmer votre mot de passe.').oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas.')
    });

    /**
     * Modal de connection.
     */
    const handleToggleSignInModal = () => {
        setShowModalSignUp(false);
        setShowModalSignIn(true);
    }
    /**
     * Lance la requête API pour connecter l'utilisateur.
     * @param values 
     */
    const handleSubmitSignInForm = async (values: SignInFormValues) => {
        await signInQuery.post(null, {
            email: values.email,
            password: values.password
        });
    };
    /**
     * Formulaire Formik pour la connection d'un utilisateur.
     */
    const signInFormValidationSchema = yup.object<SignInFormValues>({
        email: yup.string().required('Vous devez écrire votre adresse e-mail.').email('Votre adresse e-mail n\'est pas au bon format.'),
        password: yup.string().required('Vous devez écrire votre mot de passe.').min(8, 'Mot de passe trop court').typeError('Mot de passe invalide')
    });

    /**
     * Modal d'inscription.
     */
    const signUpModal = (
        // TODO Créer le modal d'inscription.
        <Formik
            initialValues={{ email: '', username: '', password: '', passwordConfirmation: '' }}
            validationSchema={signUpFormValidationSchema}
            onSubmit={handleSubmitSignUpForm}
        >
            {({ handleSubmit, handleChange, errors, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">Inscription</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModalSignUp(false)}>
                                        <svg className="ml-auto fill-current text-black w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                        </svg>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="bg-white rounded px-8 pt-6 pb-6 flex flex-col">
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">E-mail</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            id="email"
                                            placeholder="E-mail"
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.email}</p> : null}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Nom d'utilisateur</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            id="pseudo"
                                            placeholder="Pseudo"
                                            type="text"
                                            name="username"
                                            onChange={handleChange}
                                            value={values.username} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.username}</p> : null}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Mot de passe</label>
                                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                            id="password"
                                            placeholder="******************"
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={values.password} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.password}</p> : null}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Confirmation du mot de passe</label>
                                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                            id="passwordConfirmation"
                                            placeholder="******************"
                                            type="password"
                                            name="passwordConfirmation"
                                            onChange={handleChange}
                                            value={values.passwordConfirmation} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.passwordConfirmation}</p> : null}
                                    </div>
                                    {/* {signUpQueryState.errors.length >= 1 && <APIErrorAlert errors={signUpQueryState.errors} />} */}
                                </div>
                                {/*footer*/}
                                <div className="w-full text-center mx-auto border-t border-solid border-gray-300">
                                    <button onClick={() => setShowModalSignIn(false)}
                                        className="border border-red-700 bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                        Fermer</button>
                                    <button onClick={handleToggleSignInModal} className="border border-green-dark bg-green-light text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-dark focus:outline-none focus:shadow-outline">
                                        Se connecter
                                        </button>
                                    <button type="submit"
                                        className="border border-green-dark bg-green-light text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-dark focus:outline-none focus:shadow-outline">
                                        S'inscrire</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )

    /**
     * Modal de connection.
     */
    const signInModal = (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={signInFormValidationSchema}
            onSubmit={handleSubmitSignInForm}
        >
            {({ handleSubmit, handleChange, errors, values }) => (
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
                                <div className="bg-white rounded px-8 pt-6 pb-6 flex flex-col">
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Adresse e-mail</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            id="email"
                                            placeholder="Adresse e-mail..."
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.email}</p> : null}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Mot de passe</label>
                                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                            id="password"
                                            placeholder="******************"
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={values.password} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.password}</p> : null}
                                    </div>
                                    {/* {signInQueryState.errors.length >= 1 ? <APIErrorAlert errors={signInQueryState.errors} /> : null} */}
                                </div>

                                {/*footer*/}
                                <div className="w-full text-center mx-auto border-t border-solid border-gray-300">
                                    <button onClick={() => setShowModalSignIn(false)}
                                        className="border border-red-700 bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                        Fermer</button>
                                    <button onClick={handleToggleSignUpModal}
                                        className="border border-green-dark bg-green-light text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-dark focus:outline-none focus:shadow-outline">
                                        S'inscrire</button>
                                    <button type="submit" className="border border-green-dark bg-green-light text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-dark focus:outline-none focus:shadow-outline">
                                        Se connecter
                                        </button>
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
            <div className="cursor-pointer hidden md:flex items-center justify-end md:flex-1 lg:w-0">
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
