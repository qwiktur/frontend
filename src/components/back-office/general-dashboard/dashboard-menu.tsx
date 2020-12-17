import React from 'react';

interface DashboardMenuProps {
    onShow: (value: string) => void;
}
export const DashboardMenu: React.FC<DashboardMenuProps> = ({ onShow }) => (
    <div className="shadow bg-white px-5 pt-10 rounded-md">
        <h1 className="flex mx-auto w-full items-center justify-center mb-5">Menu</h1>
        <div className="bg-white top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
            <div className="flex flex-col w-full">
                <div className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                        <div className="w-6 flex flex-col items-center">
                            <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                                <img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg" />
                            </div>
                        </div>
                        <div className="w-full items-center flex">
                            <div onClick={() => onShow('games')}>
                                Historique des parties
                        </div>
                        </div>
                    </div>
                    <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                        <div className="w-6 flex flex-col items-center">
                            <div className="flex relative w-5 h-5 bg-orange-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full ">
                                <img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg" />
                            </div>
                        </div>
                        <div className="w-full items-center flex">
                            <div onClick={() => onShow('users')}>
                                Liste des utiliateurs
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
