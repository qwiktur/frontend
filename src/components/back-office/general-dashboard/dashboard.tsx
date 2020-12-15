import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/fetch-hook';
import { Config } from '../../../util/config';
import { DashboardMenu } from './dashboard-menu';
import { GameResponse, UsersResponse } from '../../../util/types/response-types';
import { LastGames } from './last-games';
import { GameData } from '../../../util/types/data-types';
import { DetailGame } from './detail-render-data';

export const DashboardBackOffice: React.FC = () => {
    const [gamesQueryState, gamesQuery] = useFetch<GameResponse>(`${Config.API_URL}/games`);
    const [usersQueryState, usersQuery] = useFetch<UsersResponse>(`${Config.API_URL}/users`);
    const [gameDetail, setGameDetail] = useState<GameData>(null);
    const [showGameDetail, setShowGameDetail] = useState<boolean>(false);
    const [showLastGames, setShowLastGames] = useState<boolean>(false);
    const [showUsers, setShowUsers] = useState<boolean>(false);

    useEffect(() => {
        if (!gamesQueryState.fetched) {
            gamesQuery.get();
        }
        if (!usersQueryState.fetched) {
            usersQuery.get();
        }
    }, []);

    /**
     * Méthode qui affiche les données dans le compartiement principale en fonction du menu.
     * @param data Menu à afficher.
     */
    const handleShowData = (data: string) => {
        switch (data) {
            case 'games':
                setShowGameDetail(false);
                setShowUsers(false);
                setShowLastGames(true);
                break;
            case 'users':
                setShowGameDetail(false);
                setShowLastGames(false);
                setShowUsers(true);
                break;
        }
    }

    const handleShowDetail = (game: GameData) => {
        setGameDetail(game);
        setShowGameDetail(true);
    }

    return (
        <div className="grid grid-cols-7 gap-4">
            <div className="col-start-1 col-end-2"><DashboardMenu onShow={handleShowData} /></div>
            <div className="col-start-2 col-end-6">
                {showLastGames ?
                    <LastGames games={gamesQueryState.fetched ? gamesQueryState.data.games : []} detailGame={handleShowDetail} />
                    : <></>}
                {showUsers ?
                    <p>BITE</p>
                    : <></>}
            </div>
            <div className="col-start-6 col-end-8">
                {showGameDetail ?
                    <DetailGame game={gameDetail} />
                    : <></>
                }</div>
        </div>
    )
}
