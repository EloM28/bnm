'use client'
import React from 'react'
import { useState } from 'react'
import AjouterCaisseSecretaire from '../AjouterCaisse/AjouterCaisseSecretaire'

const CaisseSecretaire = () => {

    const [showAjouterCaisse,setShowAjouterCaisse]=useState(false);

    const handleAjouterCaisse = ()=> {
        setShowAjouterCaisse(true);
    }

    const closeModal = ()=> {
        setShowAjouterCaisse(false);
    }    

  return (
        <div className='w-[97%] mx-auto h-[97%] bg-white rounded-md'>  
            <div className="w-full h-full flex flex-col">
                    <div className="relative">
                        <div className='absolute right-6 mt-1'>
                            <button onClick={handleAjouterCaisse} className='w-[3.8rem] rounded-md h-[2rem] bg-slate-700 hover:bg-slate-800 text-white'>ajouter</button>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead>
                            <tr>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Date</th>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Motif</th>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Montant</th>
                            <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Caisse</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                            <tr className='border-b border-slate-700'>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">10.06.2024</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">Vol des voitures</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">10 000 000fbu</td>
                                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">300 000fbu</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
            </div>
        </div>
  )
}

export default CaisseSecretaire
