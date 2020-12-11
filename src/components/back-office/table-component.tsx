import React from "react"
import { UserData } from "../../util/types/data-types";

interface TableProps {
    users: UserData[];
}

/**
 * @param users Is the list of registered users. 
 */
export const TableComponent: React.FC<TableProps> = ({ users }) => (
    <table className="min-w-full">
        <thead>
            <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">N°</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">E-mail</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Nom d'utilisateur</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Elo</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Langue</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-green-light tracking-wider">Role</th>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
        </thead>
        <tbody className="bg-white">
            {users ? users.map((user, i) => {
                <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{i + 1}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className="text-sm leading-5 text-green-light">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">{user.username}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5"></td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-green-light text-sm leading-5">{user.lang}</td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-green-light border-gray-500 text-sm leading-5">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span className="relative text-xs">{user.role}</span>
                        </span>
                    </td>
                </tr>
            }) : <p>Vous n'avez pas d'utilisateurs.</p>}

        </tbody>
    </table>
)
