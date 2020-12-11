import React from 'react'
import { ThemeData } from '../../../util/types/data-types';

interface ThemeTableProps {
    themes: ThemeData[];
}

/**
 * @param themes Is the list of themes. 
 */
export const ThemeTableComponent: React.FC<ThemeTableProps> = ({ themes }) => (
    <table className="min-w-full">
        {themes ? <thead>
            <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">N°</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Nom</th>
            </tr>
        </thead>
            : null}
        <tbody className="bg-white">
            {themes ? themes.map((theme, i) => (
                <tr key={i}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{i + 1}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{theme.name}</td>
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
