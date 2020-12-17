import React from 'react';
import { UserData } from '../../../util/types/data-types';

interface TableProps {
    users: UserData[];
}

/**
 * @param users Is the list of registered users. 
 */
export const TableComponent: React.FC<TableProps> = ({ users }) => (
    <div className="w-2/3 mx-auto">
        <div className="bg-white shadow-md rounded my-6">
            <table className="text-left w-full border-collapse">
                {users ?
                    <thead>
                        <tr>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">N°</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">E-mail</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Nom d'utilisateur</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Elo</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Langue</th>
                            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Role</th>
                        </tr>
                    </thead>
                    : null}
                <tbody>
                    {users ? users.map((user, i) => (
                        <tr className="hover:bg-grey-lighter" key={i}>
                            <td className="py-4 px-6 border-b border-grey-light">{i + 1}</td>
                            <td className="py-4 px-6 border-b border-grey-light">{user.email}</td>
                            <td className="py-4 px-6 border-b border-grey-light">{user.username}</td>
                            <td className="py-4 px-6 border-b border-grey-light">{user.elo}</td>
                            <td className="py-4 px-6 border-b border-grey-light">{user.language}</td>
                            <td className="py-4 px-6 border-b border-grey-light">
                                <a href="#" className="text-white font-bold py-1 px-3 rounded text-xs bg-green-light hover:bg-green-dark">{user.role}</a>
                            </td>
                        </tr>
                    ))
                        : <tr className="hover:bg-grey-lighter" >
                            <td className="py-4 px-6 border-b border-grey-light">Vous n'avez pas d'utilisateurs.</td>
                        </tr>}
                </tbody>
            </table>
        </div>
    </div>
)
