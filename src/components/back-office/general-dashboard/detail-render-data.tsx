import React from 'react';
import { GameData } from '../../../util/types/data-types';

interface DetailGameProps {
    game: GameData;
}
export const DetailGame: React.FC<DetailGameProps> = ({ game }) => (
    <div className="shadow bg-white px-5 pt-10 rounded-md">
        <h1 className="flex mx-auto w-full items-center justify-center mb-5">Détail de la partie</h1>
        <div>
            {game.questions.map((question, indexQuest) => (
                <>
                    <p key={indexQuest}>{question.target.title}</p>
                    <ul>
                        {question.target.choices.map((choice, indexChoice) => (
                            <div key={indexChoice} className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                                <div className="w-8 h-10 text-center py-1">
                                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                                </div>
                                <div className="w-4/5 h-10 py-3 px-1">
                                    <p className="hover:text-blue-dark">{choice.label}</p>
                                </div>
                                <div className="w-1/5 h-10 text-right p-3">
                                    <p className="text-sm text-grey-dark">{choice.correct ? 'Vrai' : 'Faux'}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </>
            ))}
        </div>

        {game.theme ? <p>Thème: {game.theme?.name}</p> : <></>}

        <div className="mt-5">
            <p>Liste des joueurs</p>
            <ul>
                {game.players.map((player, indexPlayer) => (
                    <div key={indexPlayer} className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                        <div className="w-8 h-10 text-center py-1">
                            <p className="text-3xl p-0 text-green-dark">&bull;</p>
                        </div>
                        <div className="w-4/5 h-10 py-3 px-1">
                            <p className="hover:text-blue-dark">{player.username}</p>
                        </div>
                        <div className="w-1/5 h-10 text-right p-3">
                            <p className="text-sm text-grey-dark">{player.elo ? player.elo : <></>}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    </div>
)
