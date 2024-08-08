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
                            <button className='w-[3.8rem] rounded-md h-[2rem] bg-slate-700 hover:bg-slate-800 text-white'>ajouter</button>
                        </div>
                        <table className="flex flex-row lg:flex-col">
                        <thead className='bg-slate-200 mb-2'>
                            <tr className='h-full w-[100%] flex flex-col justify-between lg:flex-row'>
                            <th scope="col" className="border w-[6.5rem] lg:w-[24rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">date</th>
                            <th scope="col" className="border w-[6.5rem] lg:w-[24rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">motif</th>
                            <th scope="col" className="border w-[6.5rem] lg:w-[24rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">montant</th>
                            <th scope="col" className="border w-[6.5rem] lg:w-[24rem]  text-sm text-start text-md font-semibold text-slate-700 uppercase">caisse</th>
                            </tr>
                        </thead>
                        <tbody className="w-[100%]">
                            <tr className='w-[100%] lg:h-[2.2rem] lg:h-auto border-b border-slate-700 flex flex-col lg:flex-row'>
                                <td className="border w-[100%] h-[1.5rem] lg:h-full lg:w-[24rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700  overflow-x-hidden">10.06.2024</td>
                                <td className="border w-[100%] h-[1.5rem] lg:h-full lg:w-[24rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">Vol des voitures</td>
                                <td className="border w-[100%] h-[1.5rem] lg:h-full lg:w-[24rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">10 000 000fbu</td>
                                <td className="border w-[100%] h-[1.5rem] lg:h-full lg:w-[24rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">300 000fbu</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
            </div>
        </div>
  )
}

export default CaisseSecretaire
