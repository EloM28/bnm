'use client'
import React from 'react'

function CreerDossier({closeModal}) {
  return (
    <div className='mx-auto w-[100%] h-screen flex items-center bg-slate-700 bg-opacity-25 justify-center'>
      <div className='w-[30%] h-[100%] relative flex flex-col space-y-2 bg-white rounded-md rounded-tr-2xl'>
        <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <span className='flex justify-center text-3xl font-bold text-slate-700'>Creez un nouveau dossier</span>
        <div className='w-[78%] flex flex-col space-y-3 mx-auto'>
          <div className='flex flex-col space-y-1 w-full'>
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
          <div className='flex flex-col space-y-2 w-full'>
            <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Commentaire</label>
            <textarea id="message" class="block p-2.5 w-full h-[5rem] text-lg text-slate-700 rounded-lg border border-slate-700 focus:outline-none placeholder:text-slate-700 placeholder:text-sm" placeholder="ecris les commentaires ici..."></textarea>
            </div>
        </div>
        <div className='w-[50%] mx-auto flex justify-between place-items-center justify-content-center'>
          <div className=''>
            <span className='text-xl font-medium text-slate-700'>Suivi</span>
          </div>
          <div class="flex ">
              <div class="flex items-center w-[50%]">
                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="Oui">
                  <input name="type" type="radio"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-700 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="react" checked />
                  <span
                    class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label class="mt-px text-xl font-medium text-slate-700 cursor-pointer select-none" htmlFor="Oui">
                  Oui
                </label>
              </div>
              <div class="flex items-center w-[50%]">
                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="Non">
                  <input name="type" type="radio"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-700 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="react" checked />
                  <span
                    class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label class="mt-px text-xl font-medium text-slate-700 cursor-pointer select-none" htmlFor="Non">
                  Non
                </label>
              </div>
          </div> 
        </div>
        <div className='flex justify-center'>
          <button onClick={closeModal} className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bold'>CREER</button>
        </div>
      </div>
    </div>
  )
}

export default CreerDossier
