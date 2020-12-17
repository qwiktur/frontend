import React from 'react';

interface NumberUserProps {
    countUsers: number;
}

/**
 * @param countUsers Is the number of users.
 */
export const NumberUserComponent: React.FC<NumberUserProps> = ({ countUsers }) => (
    <div>
        { countUsers != null ?
            <p className="text-sm leading-5 text-green-light">
                Nombre d'utilisateurs inscrit : <span className="font-medium"> {countUsers} </span> utilisateurs.
            </p>
            : null}
    </div>
)
