import { Formik } from 'formik';
import React, { useState } from 'react';
import { ChoiceData } from '../../../../util/types/data-types';
import { ChoiceFormData } from '../../../../util/types/form-data-types';
import * as yup from 'yup';


interface ChoiceFormProps {
    onChoices: (choices: ChoiceData[]) => void;
}

export const ChoiceForm: React.FC<ChoiceFormProps> = ({ onChoices }) => {
    const [choiceList, setChoiceList] = useState<ChoiceData[]>([]);
    /**
     * 
     * @param choice choix à ajoutée à la liste
     */
    const handleAddChoice = (choice: ChoiceData) => {
        setChoiceList(prevState => [...prevState, choice]);
    }

    const choiceFormValidationSchema = yup.object<ChoiceFormData>({
        label: yup.string().notOneOf(choiceList, 'Ce choix existe déjà').required('Votre choix est obligatoire').typeError('Le choix est invalide'),
        correct: yup.boolean().required('Ce champ est obligatoire')
    });

    return (
        <div>
            <Formik
                initialValues={{ label: '', correct: false }}
                validationSchema={choiceFormValidationSchema}
                onSubmit={values => handleAddChoice(values)}
            >
                {({ handleSubmit, handleChange, errors, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <label className="block text-grey-darker text-sm font-bold mb-2">Ajoutez vos choix</label>
                        <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                            id="label"
                            placeholder="Vos choix..."
                            type="text"
                            name='label'
                            onChange={handleChange}
                            value={values.label}
                        />
                        {errors ? <p className="text-red-600 text-xs italic">{errors.label}</p> : null}

                        <label className="block text-grey-darker text-sm font-bold mb-2">Vrai / Faux</label>
                        <select id="correct" name="correct" onClick={handleChange} className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" >
                            <option value={`${values.correct}`}>Vrai</option>
                            <option value={`${values.correct}`}>Faux</option>
                        </select>
                        <button type="submit">+</button>
                    </form>
                )}
            </Formik>
            <ul>
                {choiceList ?
                    choiceList.map((choice, i) => (
                        <li key={i}>
                            {choice.label}
                            {choice.correct}
                        </li>
                    ))
                    : <></>}
            </ul>
        </div>

    )
}
