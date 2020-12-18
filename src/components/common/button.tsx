import React from 'react';

interface ButtonProps {
    isSubmit?: boolean;
    value: string;
    onClick?: (value?: any) => void;
}

/**
 * Composant bouton.
 */
export const ButtonComponent: React.FC<ButtonProps> = (props) => (
    <>
        {props.isSubmit ?
            <button onClick={props.onClick}
                type="submit"
                className='relative bg-green-500 text-white rounded-lg w-40 h-8 text-lg font-bold overflow-visible'>
                {props.value}
            </button>
            :
            <button onClick={props.onClick}
                className='relative bg-green-500 text-white rounded-lg w-40 h-8 text-lg font-bold overflow-visible'>
                {props.value}
            </button>}
    </>
)
