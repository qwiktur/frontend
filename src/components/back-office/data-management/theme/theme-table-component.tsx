import React from 'react'
import { ThemeData } from '../../../../util/types/data-types';

interface ThemeTableProps {
    themes: ThemeData[];
    onUpdateTheme: (theme: ThemeData) => void;
}

/**
 * Tableau contenant la liste des themes.
 * @param themes Liste des themes. 
 */
export const ThemeTableComponent: React.FC<ThemeTableProps> = (props) => (
    <div className="bg-white shadow-md rounded my-6">
        <table className="text-left w-full border-collapse">
            {props.themes ?
                <thead>
                    <tr>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">N°</th>
                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nom</th>
                    </tr>
                </thead>
                : null}
            <tbody>
                {props.themes ? props.themes.map((theme, i) => (
                    <tr className="hover:bg-grey-lighter" key={i} onClick={() => props.onUpdateTheme(theme)}>
                        <td className="py-4 px-6 border-b border-grey-light">{i + 1}</td>
                        <td className="py-4 px-6 border-b border-grey-light">{theme.name}</td>
                    </tr>
                ))
                    : <tr className="hover:bg-grey-lighter" >
                        <td className="py-4 px-6 border-b border-grey-light">Vous n'avez pas de thèmes.</td>
                    </tr>}
            </tbody>
        </table>
    </div>
)
