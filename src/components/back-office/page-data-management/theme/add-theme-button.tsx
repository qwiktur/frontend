import React from 'react';

interface AddThemeButtonProps {
    onClick: (s: string) => void;
}
/**
 * Ce bouton ouvre le modal qui permet d'ajouter un thème. 
 */
export const AddThemeButton: React.FC<AddThemeButtonProps> = ({ onClick }) => (
    <a onClick={() => onClick('theme')} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
        Ajouter un thème
    </a>
) 
