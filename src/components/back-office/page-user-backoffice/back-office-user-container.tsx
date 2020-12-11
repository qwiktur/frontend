import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/fetch-hook';
import { Config } from '../../../util/config';
import { SearchBarComponent } from './searchbar-component';
import { TableComponent } from './user-table-component';
import { UsersResponse } from '../../../util/types/response-types';
import { NumberUserComponent } from './number-user-component';

export const BackOfficeUserContainer: React.FC = () => {
    const [usersQueryState, usersQuery] = useFetch<UsersResponse>(`${Config.API_URL}/users`, true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        usersQuery.get();
        // console.log('Est-ce que l'on récupère les utilisateurs ? ' + usersQueryState.fetched);
    }, []);

    /**
     * 
     * @param value Filtre for search for a user.
     */
    const handleChangeSearchUser = (value: string) => {
        setSearch(value);
        console.log(search);
    }

    return (
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
            <SearchBarComponent onSearchUser={handleChangeSearchUser} />  {/* Barre de recherche */}

            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <TableComponent users={usersQueryState.fetched ? usersQueryState.data.users : []} />

                <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                    <NumberUserComponent countUsers={usersQueryState.fetched ? usersQueryState.data.users.length : null} />
                </div>
            </div>
        </div>
    )
}
