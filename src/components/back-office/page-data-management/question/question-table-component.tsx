import React from 'react'
import { QuestionData } from '../../../../util/types/data-types'

interface QuestionTableProps {
    questions: QuestionData[];
}

/**
 * Tableau contenant la liste des questions.
 * @param questions Liste des questions. 
 */
export const QuestionTableComponent: React.FC<QuestionTableProps> = ({ questions }) => (
    <div className="bg-white shadow-md rounded my-6">
        <table className="text-left w-full border-collapse">
            {questions ?
                <thead>
                    <tr>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">N°</th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Titre</th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Thème</th>
                    </tr>
                </thead>
                : null}
            <tbody>
                {questions ? questions.map((question, i) => (
                    <tr className="hover:bg-grey-lighter" key={i}>
                        <td className="py-4 px-6 border-b border-grey-light">{i + 1}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{question.title}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{question.theme}</td>
                    </tr>
                ))
                    : <tr className="hover:bg-grey-lighter" >
                        <td className="py-4 px-6 border-b border-grey-light">Vous n'avez pas de questions.</td>
                    </tr>}
            </tbody>
        </table>
    </div>
)
