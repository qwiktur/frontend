import React from 'react'

interface IMessage {
  correct: boolean
}

const PopupMessage: React.FC<IMessage> = (props) => {
  return (
    <div>
      {
      props.correct ?
      <div className="animate-bounce relative bg-green-400 border-solid border-2 border-green-700 py-2 text-white text-center rounded-lg w-64 h-12 text-xl font-bold overflow-visible">
        Bonne réponse
      </div>
      :
      <div className="animate-bounce relative bg-red-400 border-solid border-2 border-red-700 py-2 text-white text-center rounded-lg w-64 h-12 text-xl font-bold overflow-visible">
        Mauvaise réponse
      </div>
      }
    </div>
  )
}

export default PopupMessage
