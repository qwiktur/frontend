import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ImageData, ThemeData } from '../../../../util/types/data-types';
import { ImageFormData } from '../../../../util/types/form-data-types';

interface ImageModalProps {
    image: ImageData;
    show: boolean;
    themes: ThemeData[];
    onDeleteImage: (image: ImageData) => void;
    onHide: (value: string) => void;
    onImageSubmit: (image: ImageData, values: ImageFormData) => void;
}

/**
 * Modal d'ajout d'une image.
 */
export const ImageModal: React.FC<ImageModalProps> = (props) => {

    const imageFormValidationSchema = yup.object<ImageFormData>({
        theme: yup.string().required('Le thème est obligatoire.').oneOf(props.themes.map(theme => theme.id), 'Thème inexistant').typeError('Thème invalide'),
        title: yup.string().required('Le titre est obligatoire.').typeError('Titre invalide'),
        src: yup.string().required('La source est obligatoire.').typeError('Titre invalide')
    });

    return (
        <Formik
            initialValues={{ theme: props.image?.theme?.name, title: props.image?.title, src: props.image?.src }}
            validationSchema={imageFormValidationSchema}
            onSubmit={values => props.onImageSubmit(props.image, values)}
        >
            {({ handleSubmit, handleChange, errors, values }) => (
                <form noValidate onSubmit={handleSubmit}>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                        <div className="relative w-auto my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold"> {props.image == null ? 'Nouvelle image' : 'Modifier une image'}</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => props.onHide('image')}>
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="bg-white rounded px-8 pt-6 pb-6 flex flex-col">
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2"> Thème </label>
                                        <select id="theme" name="theme" onClick={handleChange} className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" >
                                            {props.themes.map((theme, index) => (
                                                <option
                                                    key={index}
                                                    value={theme.id}>{theme.name}</option>
                                            ))}
                                        </select>
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.theme}</p> : null}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Titre</label>
                                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                                            id="title"
                                            placeholder="Le titre..."
                                            type="text"
                                            name="title"
                                            onChange={handleChange}
                                            value={values.title} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.title}</p> : null}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-grey-darker text-sm font-bold mb-2">Source</label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                                            id="src"
                                            placeholder="Le thème..."
                                            type="text"
                                            name="src"
                                            onChange={handleChange}
                                            value={values.src} />
                                        {errors ? <p className="text-red-600 text-xs italic">{errors.src}</p> : null}
                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="w-full text-center mx-auto border-t border-solid border-gray-300">
                                    {props.image != null ?
                                        <button onClick={() => props.onDeleteQuestion(props.image)}
                                            className="border border-red-700 bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                            Supprimer l'image</button>
                                        : <></>}
                                    <button onClick={() => props.onHide('image')}
                                        className="border border-red-700 bg-red-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-700 focus:outline-none focus:shadow-outline">
                                        Fermer</button>
                                    <button type="submit" className="border border-green-dark bg-green-light text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-dark focus:outline-none focus:shadow-outline">
                                        Valider
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )
            }
        </Formik >
    )
}
