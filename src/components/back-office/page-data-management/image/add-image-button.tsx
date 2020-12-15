import React from 'react';

interface AddImageButtonProps {
    onClick: (s: string) => void;
}
/**
 * Ce bouton ouvre le modal qui permet d'ajouter une image. 
 */
export const AddImageButton: React.FC<AddImageButtonProps> = ({ onClick }) => (
    <a onClick={() => onClick('image')} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
        Ajouter une image
    </a>
) 
