import React from 'react'
import { QuestionData } from '../../../util/types/data-types'

interface QuestionTableProps {
    questions: QuestionData[];
}

/**
 * @param questions Is the list of questions. 
 */
export const QuestionTableComponent: React.FC<QuestionTableProps> = ({ questions }) => (
    <table className="min-w-full">
        {questions ? <thead>
            <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">N°</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Thème</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Titre</th>
            </tr>
        </thead>
            : null}
        <tbody className="bg-white">
            {questions ? questions.map((quesion, i) => (
                <tr key={i}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{i + 1}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{quesion.theme}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{quesion.title}</td>
                </tr>
            ))
                : <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-green-light">Vous n'avez pas de thèmes.</div>
                    </td>
                </tr>}
        </tbody>
    </table>
)
