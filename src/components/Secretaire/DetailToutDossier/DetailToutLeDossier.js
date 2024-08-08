'use client'
import React from 'react'
import { useState } from 'react';
import { FaRoad } from 'react-icons/fa'
import { Tooltip } from '@nextui-org/react';
import TracabiliteDossier from '../Tracabilite/TracabiliteDossier';

const DetailToutLeDossier = ({closeModal,closeModalDetail}) => {
    
    const [showTracabiliteDossier,setShowTracabliteDossier] = useState(false)

    const handleTracabiliteDossier = ()=>  {
        setShowTracabliteDossier(true);
    }

    closeModal = ()=> {
        setShowTracabliteDossier(false);
    }

  return (
            <div className='relative w-[90%] h-[60rem]  bg-slate-700 bg-opacity-50 z-100'>
                <div className='absolute z-100 w-full'>
                    {
                        showTracabiliteDossier ? <TracabiliteDossier closeModal={closeModal}/> : ""
                    }
                </div>
                <div className='relative w-[70%] mx-auto h-auto bg-white rounded-tl-md rounded-tr-xl'>
                    <Tooltip showArrow={true} content="tracabilite du dossier" className='bg-slate-700 text-white text-sm h-7 rounded-md max-w mx-1'>
                        <button onClick={handleTracabiliteDossier} className='absolute w-[2.5rem] h-[2rem] bg-slate-200 rounded-sm hover:bg-slate-300 mt-3 right-[8rem]'>
                          <FaRoad className='w-full h-full'/>
                        </button>
                    </Tooltip>
                    <button onClick={closeModalDetail} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col w-full">
                        <div className="">
                            <table className="w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Numero dossier</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Demandeur</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Defendeur</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Tribunal</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Date d'audience</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Commentaire</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className='border-b border-slate-700'>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">26</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">BIZINDAVYI Leonce</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">GASHIMWE Emelyne</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">GIHOSHA</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">18.2.2021</td>
                                    <td className="font-semibold text-md text-slate-700">
                                        <div className='w-full h-auto text-justify p-2'>
                                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <span className='texte-slate-700 font-bold text-xl mx-auto mt-3 underline'>Rapport d'audience</span>
                        <div className="">
                            <table className="w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Date d'audience</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Decision</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Commentaire</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className='border-b border-slate-700'>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">18.05.2021</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">Retour en arriere</td>
                                    <td className="font-semibold text-md text-slate-700">
                                        <div className='w-full h-auto text-justify p-2'>
                                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
  )
}

export default DetailToutLeDossier
