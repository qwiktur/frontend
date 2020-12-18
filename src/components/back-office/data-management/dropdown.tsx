import React from 'react';

interface DropdownDataProps {
    onSetData: (str: string) => void;
}
/**
 * Composant dropdown.
 * Il est utilisé pour afficher les 
 */
export const DropdownData: React.FC<DropdownDataProps> = ({ onSetData }) => (
    <div className="flex pb-5">
        <a className="block px-4 py-2 text-md text-gray-700">Quel données voulez-vous visualisez ?</a>
        <select id="dropdowndata" onChange={(e) => onSetData(e.target.value)} className="block appearance-none bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" >
            <option>Images</option>
            <option>Questions</option>
            <option>Thèmes</option>
        </select>
    </div>
)
