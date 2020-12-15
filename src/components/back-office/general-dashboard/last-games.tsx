import React from 'react';
import { GameData } from '../../../util/types/data-types';

interface LastGamesProps {
    games: GameData[];
    detailGame: (game: GameData) => void;
}

/**
 * Composant contenant l'historique des questions.
 */
export const LastGames: React.FC<LastGamesProps> = (props) => (
    <div className="shadow bg-gray-200 p-10 rounded-md">
        <div className="w-full mb-6 pt-3">
            <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex flex-col">
                    <div className="text-xs uppercase font-light text-grey-500">Dashboard</div>
                    <div className="text-xl font-bold">Historique des parties</div>
                </div>
            </div>
        </div>
        <ul className="flex flex-col p-4 bg-white rounded-md">
            {props.games.map((game, i) => (
                <li key={i} className="border-gray-200 flex flex-row mb-2" onClick={() => props.detailGame(game)}>
                    <div className="select-none cursor-pointer bg-gray-300 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">{i + 1}</div>
                        <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium text-green-light">{game.id}</div>
                            <div className="text-gray-600 text-sm">{game.theme}</div>
                        </div>
                        <div className="text-gray-600 text-xs">{game.createdAt}</div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
)
