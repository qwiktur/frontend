import React from 'react'
import './wrapper.css'

function Wrapper() {
  return (
    <div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
      <div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
        <div className="h-12 flex justify-between items-center border-b border-gray-200 m-4">
          <div >
            <div className="text-xl font-bold text-gray-700">Josef256 Lobby</div>
            <div className="text-sm font-base text-gray-500">Waiting for more players...</div>
          </div>
          <div>
            <div className="flex items-center justify-center w-full  shadow-md rounded-full">
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="flex items-center">
                  <input id="toogleA" type="checkbox" className="hidden" />
                  <div
                    className="toggle__line w-20 h-10 bg-gray-300 rounded-full shadow-inner"
                  >
                  </div>
                  <div
                    className="toggle__dot bg-red-400 absolute w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
                  >
                    <svg className="text-white w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div className="flex items-center">
              <img className="rounded-full h-12 w-12" src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png" alt="Logo" />
              <div className="ml-2">
                <div className="text-sm font-semibold text-gray-600">Lirik</div>
                <div className="text-sm font-light text-gray-500">Level 6 - Warlock</div>
              </div>
            </div>
            <div>
              <button className="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow-md flex justify-center items-center">
                <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div className="flex items-center">
              <img className="rounded-full h-12 w-12" src="https://static-cdn.jtvnw.net/jtv_user_pictures/cb661e9a-68e5-4e37-89ce-231960ff7f8e-profile_image-70x70.png" alt="Logo" />
              <div className="ml-2">
                <div className="text-sm font-semibold text-gray-600">MembTV</div>
                <div className="text-sm font-light text-gray-500">Level 4 - Monk</div>
              </div>
            </div>
            <div>
              <button className="bg-red-400 hover:bg-red-500  p-2 rounded-full shadow-md flex justify-center items-center">
                <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div className="flex items-center">
              <img className="rounded-full h-12 w-12" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e82b2c90-efe6-41c7-bd50-7caba86fd3b5-profile_image-70x70.png" alt="Logo" />
              <div className="ml-2">
                <div className="text-sm font-semibold text-gray-600">DansGaming</div>
                <div className="text-sm font-light text-gray-500">Level 12 - Paladan</div>
              </div>
            </div>
            <div>
              <button className="bg-red-400 hover:bg-red-500  p-2 rounded-full shadow-md flex justify-center items-center">
                <svg className="text-white toggle__lock w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex bg-gray-200 justify-center items-center h-16 p-4 my-6  rounded-lg  shadow-inner">
            <div className="flex items-center border border-gray-400 p-2 border-dashed rounded cursor-pointer">
              <div>
                <svg className="text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="ml-1 text-gray-500 font-medium"> Invite a friend</div>
            </div>
          </div>
        </div>
        <div className="p-6 ">
          <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">Start the game</button>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
