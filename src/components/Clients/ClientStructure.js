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
        <div className='w-full h-auto rounded-md'>

            <div className="w-[100%] ">
                <div className="w-full">
                    <table className="flex flex-row lg:flex-col">
                        <thead className='bg-slate-200 mb-2'>
                            <tr className='h-full w-[100%] flex flex-col justify-between lg:flex-row'>
                                <th scope="col" className="w-[6.5rem] hidden lg:block lg:w-[3rem] text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"></th>
                                <th scope="col" className="w-[6.5rem] lg:w-[13rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">Numero</th>
                                <th scope="col" className="w-[6.5rem] lg:w-[13rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">Nom</th>
                                <th scope="col" className="w-[6.5rem] lg:w-[18.5rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">Mail</th>
                                <th scope="col" className="w-[6.5rem] lg:w-[18.5rem]  text-sm text-start text-md font-semibold text-slate-700 uppercase">Telephone</th>
                                <th scope="col" className="w-[6.5rem] lg:w-[18.5rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">Nombre de dossiers</th>
                                <th scope="col" className="w-[6.5rem] lg:w-[15rem] text-sm text-start text-md font-semibold text-slate-700 uppercase">Montant mensule</th>
                            </tr>
                        </thead>
                        <tbody className="w-[100%]">
                            {data && data.map((item) => (
                                <tr className='w-[100%] lg:h-[2.2rem] lg:h-auto border-b border-slate-700 flex flex-col lg:flex-row'>
                                    <td className="w-[3rem] text-end text-sm font-medium  absolute right-2 lg:-mt-1 lg:relative">
                                        <Tooltip showArrow={true} content={<DetailsClientSecretaire />} className='bg-slate-700 h-7 rounded-md max-w'>
                                            <button type="button" className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                                </svg>
                                            </button>
                                        </Tooltip>
                                    </td>
                                    <td className="w-[100%] h-[1.5rem] lg:h-full lg:w-[13rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700  overflow-x-hidden">#</td>
                                    <td className="w-[100%] h-[1.5rem] lg:h-full lg:w-[13rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">{item.name}</td>
                                    <td className="w-[100%] h-[1.5rem] lg:h-full lg:w-[18.5rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">{item.email}</td>
                                    <td className="w-[100%] h-[1.5rem] lg:h-full lg:w-[18.5rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">{item.phone}</td>
                                    <td className="w-[100%] h-[1.5rem] lg:h-full lg:w-[18.5rem] p-1 h-auto font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">{item.nombre_dossiers}</td>
                                    <td className="w-[100%] h-[1.5rem] lg:h-full lg:w-[15rem] p-1 h-auto  font-semibold text-sm md:text-md text-slate-700 overflow-x-hidden">{item.montant}</td>
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
