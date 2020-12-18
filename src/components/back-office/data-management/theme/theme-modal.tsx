import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ThemeData } from '../../../../util/types/data-types';
import { ThemeFormData } from '../../../../util/types/form-data-types';
import { ButtonComponent } from '../../../common/button';

interface ThemeModalProps {
    show: boolean;
    theme: ThemeData;
    onDeleteTheme: (theme: ThemeData) => void;
    onHide: (value: string) => void;
    onThemeSubmit: (theme: ThemeData, values: ThemeFormData) => void;
}

/**
 * Modal d'ajout d'un thème.
 */
export const ThemeModal: React.FC<ThemeModalProps> = (props) => {

    const themeFormValidationSchema = yup.object<ThemeFormData>({
        name: yup.string().required('La nom est obligatoire.').typeError('Nom invalide')
    });
    return (
        <Formik
            initialValues={{ name: props.theme?.name }}
            validationSchema={themeFormValidationSchema}
            onSubmit={values => props.onThemeSubmit(props.theme, values)}
        >
            {({ handleSubmit, handleChange, errors, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">{props.theme == null ? 'Nouveau thème' : 'Modifier le thème'}</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => props.onHide('theme')}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="bg-white rounded px-8 pt-6 pb-6 flex flex-col">
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Nom</label>
                                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                            id="name"
                                            placeholder="Le nom..."
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            value={values.name} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.name}</p> : null}
                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="w-full text-center mx-auto border-t border-solid border-gray-300">
                                    {props.theme != null ?
                                        <ButtonComponent value="Supprimer le thème" onClick={() => props.onDeleteTheme(props.theme)} />
                                        : <></>}
                                    <ButtonComponent value="Fermer" onClick={props.onHide} />
                                    <ButtonComponent isSubmit={true} value="Valider" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik >
    )
}
