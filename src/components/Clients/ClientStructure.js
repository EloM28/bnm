'use client'
import { React, useState, useEffect } from 'react'
import { Tooltip } from '@nextui-org/react';
import DetailsClientSecretaire from '../DetailClient/DetailsClientSecretaire';

const ClientStructure = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/clients/structure/');
            console.log('lol', res)
            const data = await res.json()
            console.log(data)
            if (data.message == 'Success') {
                setData(data.data)
            }
            else {
                setData([])
            }

        };

        fetchData();

    }, []);
    return (
        <div className='w-full h-auto bg-white rounded-md'>
            <div className="flex flex-col">
                <div className="">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                        <thead>
                            <tr>
                                <th scope="col" className="px-6 py-3 w-2 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"></th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">No</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Nom</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Mail</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Telephone</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Nombre dossiers</th>
                                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Montant mensuel</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                            {data && data.map((item) => (
                                <tr className='border-b border-slate-700'>
                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                        <Tooltip showArrow={true} content={<DetailsClientSecretaire />} className='bg-slate-700 h-7 rounded-md max-w'>
                                            <button type="button" className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                                </svg>
                                            </button>
                                        </Tooltip>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">1</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">{item.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">{item.nombre_dossiers}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">{item.montant}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ClientStructure
