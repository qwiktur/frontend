import React from 'react';
import { ThemeData } from '../../util/types/data-types';

interface FilterThemeProps {
    themes: ThemeData[];
    filter: (theme: string) => void;
}

/**
 * Composant utilisé pour filter sur un thème.
 */
export const FilterThemeComponent: React.FC<FilterThemeProps> = (props) => (
    <select onChange={(e) => props.filter(e.target.value)} className="block appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
        {props.themes.map((theme, i) => (
            <option key={i} value={theme.name}>{theme.name}</option>
        ))}
    </select>
)
