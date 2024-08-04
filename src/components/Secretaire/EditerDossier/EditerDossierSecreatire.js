'use client'
import React from 'react'

const EditerDossierSecreatire = ({closeModal}) => {
  return (
    <div className='mx-auto w-[100%] h-screen flex items-center bg-slate-700 bg-opacity-25 justify-center'>
      <div className='w-[30%] h-[87%] relative flex flex-col space-y-4 bg-white rounded-md rounded-tr-2xl'>
        <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <span className='flex justify-center text-3xl font-bold text-slate-700 mt-5'>Modifier un dossier</span>
        <div className='w-[78%] flex flex-col space-y-3 mx-auto'>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Numero Du Dossier</label>
            <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none placeholder:text-sm" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Demandeur</label>
            <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Defendeur</label>
            <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Tribunal</label>
            <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Date d'audience</label>
            <input type="date" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Montant a payer</label>
            <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Montant paye</label>
            <input type="text" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
          </div>
        </div>
        <div className='flex justify-center'>
          <button onClick={closeModal} className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bold'>MODIFIER</button>
        </div>
      </div>
    </div>
  )
}

export default EditerDossierSecreatire
