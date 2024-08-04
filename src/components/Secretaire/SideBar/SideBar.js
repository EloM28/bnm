'use client'
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { FaFolder } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaStickyNote } from 'react-icons/fa';;
import { FaFile } from 'react-icons/fa';
import { FaCodeBranch } from 'react-icons/fa';
import { FaStopwatch } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaFileInvoiceDollar } from 'react-icons/fa';


const SideBar = () => {
    
  return (
        <div className='border w-[100%] h-screen'>
            <Sidebar  className='w-full h-full'>
                <div className='flex flex-col w-full mt-3 '>
                    <Link href="" className='w-[6rem] h-[6rem] mx-auto rounded-full'>
                       <Image src="/Logo/LogoBNM.jpg" width={500} height={500} alt='Our Sign' title='Our Sign' className='w-full h-full object-contain rounded-full' />
                    </Link>
                    <span className='w-full flex justify-center items-center h-12 font-bold text-md'>Bureau National Management</span>
                </div>
                <div className='border'>
                    <Menu>
                        <div className='border rounded-md'>
                        <MenuItem icon={<FaHome/>} className='text-slate-700 text-md font-bold'> Home </MenuItem>
                        </div>
                        <div className='border rounded-md'>
                        <SubMenu icon={<FaFolder/>} label="Dossiers">
                            <MenuItem icon={<FaFolder/>} component={<Link href="/Secretaire/Dossier" />}> dossiers standards </MenuItem>
                        </SubMenu>
                        </div>
                        <div className='border rounded-md'>
                        <SubMenu icon={<FaUser/>} label="Clients ">
                            <MenuItem icon={<FaUser/>} component={<Link href="/Secretaire/Clients" />}> clients structures </MenuItem>
                        </SubMenu>
                        </div>
                        <div className='border rounded-md'>
                             <MenuItem icon={<FaStickyNote/>} component={<Link href="/Secretaire/Ecritures"/>} className='text-slate-700 text-md font-bold'> Ecritures </MenuItem>
                        </div>
                        <div className='border rounded-md'>
                             <MenuItem icon={<FaFileInvoiceDollar/>} component={<Link href="/Secretaire/Caisses"/>}  className='text-slate-700 text-md font-bold'> Caisses </MenuItem>
                        </div>
                        <div className='border rounded-md'>
                             <MenuItem icon={<FaFile />} component={<Link href="/Secretaire/RapportSecretaire"/>} className='text-slate-700 text-md font-bold'> Rapport </MenuItem>
                        </div>
                        <div className='border rounded-md'>
                             <MenuItem icon={<FaCodeBranch/>} className='text-slate-700 text-md font-bold'> Condensé </MenuItem>
                        </div>
                        <div className='border rounded-md'>
                             <MenuItem icon={<FaStopwatch/>} component={<Link href="/Secretaire/DemandeCong"/>} className='text-slate-700 text-md font-bold'> Demande De Congé </MenuItem>
                        </div>                                
                    </Menu>
                </div>
            </Sidebar>
        </div>
  )
}

export default SideBar