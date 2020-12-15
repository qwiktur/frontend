import React from 'react';

interface DropdownDataProps {
    onSetData: (str: string) => void;
}
/**
 * Composant dropdown.
 * Il est utilisé pour afficher les 
 */
export const DropdownData: React.FC<DropdownDataProps> = ({ onSetData }) => (
    <select id="dropdowndata" onChange={(e) => onSetData(e.target.value)} className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" >
        <option>Images</option>
        <option>Questions</option>
        <option>Thèmes</option>
    </select>
)
