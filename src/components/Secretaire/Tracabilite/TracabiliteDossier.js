'use client'
import React from 'react'

const TracabiliteDossier = ({closeModal}) => {
  return (
        <div className='mx-auto w-[100%] h-screen flex items-center bg-slate-700 bg-opacity-25 justify-center'>
            <div className='relative w-[70%] h-auto bg-white rounded-tl-md rounded-tr-xl border border-slate-700'>
                <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col w-full">
                    <span className='text-slate-700 text-xl font-bold mx-auto underline mt-2 mb-2'>Tracabilite Du Dossier</span>
                    <div className="">
                        <table className="w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead>
                            <tr>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Numero du dossier</th>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Demandeur</th>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Defendeur</th>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Tribunal</th>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Date d'audience</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className='border-b border-slate-700'>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">26</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">BIZINDAVYI Leonce</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">GASHIMWE Emelyne</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">GIHOSHA</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">18.2.2021</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>  
  )
}

export default TracabiliteDossier
