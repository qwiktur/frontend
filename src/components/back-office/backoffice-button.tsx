import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Bouton de déconnection d'un utilisateur.
 */
export const BackOfficeButton: React.FC = () => {
    return (
        <Link to="/backoffice">
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-light hover:bg-green-dark">
                    Back office
            </a>
            </div>
        </Link>
    )
}
