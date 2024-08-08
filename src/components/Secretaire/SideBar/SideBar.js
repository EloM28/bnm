'use client'
import React from 'react'
import { useState } from 'react';
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
import { FaBars } from 'react-icons/fa';


const SideBar = () => {

    const [toggled, setToggled] = React.useState(false);
    const { useRouter } = require('next/navigation');
    const router = useRouter()

    const handleLogout = async () => {
        // localStorage.removeItem('token');
        // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // router.push('/authentication/login');
        const data = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({})
        };
        const response = await fetch('/api/auth/logout', data)
        if (response) {
            const data = await response.json();
            if (data.message === "Success") {
                // Supprimer le token du localStorage
                localStorage.removeItem('token');

                router.push('/authentication/login');
            }
        }
        else {
            console.log('Error')
            setError('Erreur de se déconnecter')
        }

        // Supprimer le cookie (ajuster le nom du cookie en fonction de votre configuration
        // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Cookies.remove('token');

        // Rediriger vers la page de connexion
    };

    return (
        <div style={{ display: 'flex', height: '100vh', minHeight: '400px', width: '100vh' }}>
            <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="md">
                {/*
                    <div className='flex flex-col h-[12rem] w-full mt-3 mx-auto bg-green-600'>
                    <Link href="" className='w-full h-full mx-auto rounded-full'>
                       <Image src="/Logo/Logo.png" width={500} height={500} alt='Our Sign' title='Our Sign' className='w-full h-full object-contain rounded-full' />
                    </Link>
                </div>
                */}
                {/*<div className='border'>
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
                </div>*/}
                <Menu>
                    <div className='border rounded-md'>
                        <MenuItem icon={<FaHome />} className='text-slate-700 text-md font-bold'> Home </MenuItem>
                    </div>
                    <div className='border rounded-md'>
                        <SubMenu icon={<FaFolder />} label="Dossiers">
                            <MenuItem icon={<FaFolder />} component={<Link href="/Secretaire/Dossier/Standard" />}> dossiers standards </MenuItem>
                            <MenuItem icon={<FaFolder />} component={<Link href="/Secretaire/Dossier/Structure" />}> dossiers structurés </MenuItem>
                        </SubMenu>
                    </div>
                    <div className='border rounded-md'>
                        <SubMenu icon={<FaUser />} label="Clients ">
                            <MenuItem icon={<FaUser />} component={<Link href="/Secretaire/Clients/Structures" />}> clients structurés </MenuItem>
                            <MenuItem icon={<FaUser />} component={<Link href="/Secretaire/Clients/Standards" />}> clients standard </MenuItem>
                        </SubMenu>
                    </div>
                    <div className='border rounded-md'>
                        <MenuItem icon={<FaStickyNote />} component={<Link href="/Secretaire/Ecritures" />} className='text-slate-700 text-md font-bold'> Ecritures </MenuItem>
                    </div>
                    <div className='border rounded-md'>
                        <MenuItem icon={<FaFileInvoiceDollar />} component={<Link href="/Secretaire/Caisses" />} className='text-slate-700 text-md font-bold'> Caisses </MenuItem>
                    </div>
                    <div className='border rounded-md'>
                        <MenuItem icon={<FaFile />} component={<Link href="/Secretaire/RapportSecretaire" />} className='text-slate-700 text-md font-bold'> Rapport </MenuItem>
                    </div>
                    <div className='border rounded-md'>
                        <MenuItem icon={<FaCodeBranch />} className='text-slate-700 text-md font-bold'> Condensé </MenuItem>
                    </div>
                    <div className='border rounded-md'>
                        <MenuItem icon={<FaStopwatch />} component={<Link href="/Secretaire/DemandeCong" />} className='text-slate-700 text-md font-bold'> Demande De Congé </MenuItem>
                    </div>
                    <div className='border rounded-md'>
                        <SubMenu icon={<FaUser />} label="Settings ">
                            <MenuItem icon={<FaUser />} component={<Link href="/authentication/forgetpassword" />}> Changer le mot de passe </MenuItem>
                            <MenuItem icon={<FaUser />} onClick={handleLogout}> Se déconnecter </MenuItem>
                        </SubMenu>
                    </div>
                </Menu>
            </Sidebar>
            <main style={{ display: 'flex', padding: 10 }}>
                <div>
                    <div className='block md:hidden'>
                        <button className="sb-button" onClick={() => setToggled(!toggled)}>
                            <FaBars />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SideBar