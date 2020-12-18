import React, { FormEvent, useState } from 'react'

interface IAnswerImage{
  onAnswerImage: (title: string) => void
}

const AnswerImage: React.FC<IAnswerImage> = (props) => {

  const [answerTitle, setAnswerTitle] = useState('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setAnswerTitle(e.currentTarget.value)
  }

  return (
    <div className="mb-2 bg-white border-solid border-grey-light rounded-lg border shadow-lg">
      <div className="bg-grey-lighter px-2 py-3 text-center">
        Réponse à l'image
          </div>
      <div className="p-3">
        <input value={answerTitle} onChange={handleChange} className="input text-center text-xl border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-green-600 focus:outline-none active:outline-none active:border-indigo-600" />
      </div>
      <div className="p-3 flex flex-row justify-center">
        <button onClick={() => props.onAnswerImage(answerTitle)} type="submit" className='relative bg-green-500 text-white rounded-lg w-64 h-12 text-xl font-bold overflow-visible'>
          Valider
          </button>
      </div>
    </div>
  )
}

export default AnswerImage
