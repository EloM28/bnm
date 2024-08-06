'use client'
import React from 'react'
import { useState } from 'react';
import SearchAndProfile from '../SearchProfile/SearchAndProfile';
import { FaFolderPlus } from 'react-icons/fa';
import { Tooltip } from '@nextui-org/react';
import CreerDossier from '../ModalDossier/CreerDossier';


const Header = () => {
  const [showModal,setShowModal] = useState(false)

  const closeModal = ()=> {
    setShowModal(false);
  }


  return (
    <div className='relative h-[40%] w-full flex flex-col space-y-[1.6rem]'>
      <div className='absolute w-[100%]'>
        {
          showModal ? <CreerDossier closeModal={closeModal}/> : ""
        }
      </div>
      <SearchAndProfile />
      <div className='flex flex-col space-y-3'>
        <span className='text-slate-700 font-bold text-2xl ml-6'>Historique</span>
        <div className='flex space-x-7 justify-center'>
          <div className='w-[18rem] h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-3 overflow-hidden text-ellipsis'>
            <span className='-full h-[18.5%] flex justify-center text-slate-700 text-lg font-bold'>Clients structures</span>
            <div className='p-1 w-[100%] max-h-[75%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden'>
              <span className='flex justify-center text-slate-700 font-semibold'>800 0000</span>
            </div>
          </div>
          <div className='w-[18rem] h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-3 overflow-hidden text-ellipsis'>
            <span className='-full h-[18.5%] flex justify-center text-slate-700 text-lg font-bold'>Dossiers retournes en arriere</span>
            <div className='p-1 w-[100%] max-h-[75%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden'>
              <span className='flex justify-center text-slate-700 font-semibold'>800 0000</span>
            </div>
          </div>
          <div className='w-[18rem] h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-3 overflow-hidden text-ellipsis'>
            <span className='-full h-[18.5%] flex justify-center text-slate-700 text-lg font-bold'>Caisses</span>
            <div className='p-1 w-[100%] max-h-[75%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden'>
              <span className='flex justify-center text-slate-700 font-semibold'>800 0000</span>
            </div>
          </div>
          <div className='w-[18rem] h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-3 overflow-hidden text-ellipsis'>
            <span className='-full h-[18.5%] flex justify-center text-slate-700 text-lg font-bold'>Consoles</span>
            <div className='p-1 w-[100%] max-h-[75%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden'>
              <span className='flex justify-center text-slate-700 font-semibold'>800 0000</span>
            </div>
          </div>
          <div className='w-[18rem] h-[8.5rem] bg-white shadow-sm shadow-slate-700   rounded-md flex flex-col justify-center gap-y-3 overflow-hidden text-ellipsis'>
            <span className='-full h-[18.5%] flex justify-center text-slate-700 text-lg font-bold'>Dossiers condenses</span>
            <div className='p-1 w-[100%] max-h-[75%] text-justify mx-auto whitespace-normal line-clamp-4 overflow-hidden'>
              <span className='flex justify-center text-slate-700 font-semibold'>800 0000</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[97%] h-10 mx-auto'>
        <div className='w-full h-full flex justify-between'>
          <form className="w-[14.5rem]">
            <select id="categories" className="rounded-md block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white">
              <option selected>Tribunal</option>
              <option value="std">Standard</option>
              <option value="st">Structures</option>
              <option value="pn">Penalite</option>
              <option value="csd">Cas d'urgence</option>
              <option value="da">Date d'audience</option>
              <option value="ni">Niveau</option>
            </select>
          </form>
          <Tooltip showArrow={true} content="nouveau dossier" className='bg-slate-700 text-white text-sm h-7 rounded-md max-w mx-1'>
            <button onClick={()=>setShowModal(true)} className='max-w bg-slate-700 hover:bg-slate-800 rounded-md'>
              <span className='flex  items-center mx-4 text-xl'>
                <FaFolderPlus className='text-white' />
              </span>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
export default Header
