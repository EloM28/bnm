'use client'
import React from 'react'

const DemandeCongeSecretaire = () => {
  return (
      <div className='mx-auto w-[100%] h-full flex items-center bg-blue-100 justify-center'>
        <div className='w-[95%] lg:w-[30%] h-[92%] flex flex-col space-y-4 bg-white rounded-md rounded-tr-2xl'>
            <div className='w-[78%] h-full flex flex-col space-y-4 mx-auto mt-2'>
                <div className='flex flex-col space-y-2 w-full'>
                    <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Sortie</label>
                    <input type="date" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
                </div>
                <div className='flex flex-col space-y-2 w-full'>
                    <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Retour</label>
                    <input type="date" className="border border-slate-700 text-slate-700 text-lg rounded-lg block w-full p-2.5 dark:placeholder-slate-700 focus:outline-none" required />
                </div>
                <div className='flex flex-col space-y-2 w-full'>
                    <label htmlFor="first_name" className="text-xl font-medium text-slate-700">Objet</label>
                    <textarea id="message" class="block p-2.5 w-full h-[12.5rem] text-lg text-slate-700 rounded-lg border border-slate-700 focus:outline-none placeholder:text-slate-700 placeholder:text-sm" placeholder="ecris les commentaires ici..."></textarea>
                </div>
                <div className='flex justify-center'>
                    <button className='w-[8rem] h-10 rounded-md bg-slate-700 hover:bg-slate-800 text-white font-bold'>ENVOYER</button>
                </div>
            </div>
            
        </div>
      </div>
  )
}

export default DemandeCongeSecretaire
