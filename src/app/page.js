'use client'
import { SessionContext } from "@/components/context/Auth";
import { useEffect, useContext, useState } from "react";
import TousDossiers from '@/components/Dossiers/TousDossiers'
import EditerDossierSecreatire from '@/components/Secretaire/EditerDossier/EditerDossierSecreatire'

export default function Home() {
  const [showModalEditer, setShowEditer] = useState(false);
  const [user, setUser] = useState([])
  const { session } = useContext(SessionContext);
  console.log('obj', session)
  const closeModal = () => {
    setShowEditer(false);
  }
  useEffect(() => {
    if (session) {
      setUser(session)
    }
  }, [session]);
  const name = user.email
  const { useRouter } = require('next/navigation')
  const router = useRouter()
  return (
    <>
      {
        user.role == 1 &&
        <>
          <div className=''>
            {
              showModalEditer ? <EditerDossierSecreatire closeModal={closeModal} /> : ""
            }
          </div>
          <TousDossiers />
          {name}
        </>
      }
      {
        user.role == 2 && <>
          <div className=''>
            {
              showModalEditer ? <EditerDossierSecreatire closeModal={closeModal} /> : ""
            }
          </div>
          <TousDossiers />
          {name}
        </>
      }
      {
        user.role == 3 &&
        <>
          <div className=''>
            {
              showModalEditer ? <EditerDossierSecreatire closeModal={closeModal} /> : ""
            }
          </div>
          <TousDossiers />
          {name}
        </>
      }
    </>
  );
}
