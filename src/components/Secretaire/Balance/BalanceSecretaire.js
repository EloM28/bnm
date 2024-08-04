import React from 'react'

const BalanceSecretaire = ({closeModal}) => {
  return (
        <div className='mx-auto w-[100%] h-screen flex items-center bg-slate-700 bg-opacity-25 justify-center'>
            <div className='relative w-[50%] h-auto bg-white rounded-tl-md rounded-tr-xl'>
                <button onClick={closeModal} className='absolute w-6 h-6 bg-slate-700 hover:bg-slate-800 rounded-full right-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-lg text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex flex-col w-full">
                        <div className="">
                            <table className="w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Balance</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Montant paye</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Montant restant</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Date de payement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className='border-b border-slate-700'>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">12 000 000fbu</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">6 000 000fbu</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">200 000fbu</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">01.10.2024</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                </div>
            </div>
        </div>       
  )
}

export default BalanceSecretaire
