import React from 'react'
import Image from 'next/image'

const SearchAndProfile = () => {
  return (
          <div className='h-[4.5rem] w-full'>
            <div className='w-[95%]  flex justify-between items-center mx-auto mt-3'>      
              <div class="relative h-full w-[24.5rem] mt-3">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-4 ps-10 text-md text-slate-700 text-md border  rounded-lg focus:outline-none  dark:border-slate-700 dark:placeholder-gray-400" placeholder="Search here..." required />
                  <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 ring-blue-100 font-medium rounded-lg text-sm px-4 py-2">Search</button>
              </div>
              <div className='h-[4.2rem] w-[4.2rem] rounded-full border'>
                <Image src="/Images/marteau.jpg" width={500} height={500} alt='profile picture' className='w-full h-full rounded-full object-cover'/>
              </div>
            </div>
          </div>        
  )
}

export default SearchAndProfile
