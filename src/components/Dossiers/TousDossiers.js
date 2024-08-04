"use client"
import React from 'react'
import { Tooltip } from '@nextui-org/react';
import { useState } from 'react';
import DetailsDossiersSecretaire from '../Secretaire/DetailsDossiers/DetailsDossiersSecretaire';
import EditerDossierSecreatire from '../Secretaire/EditerDossier/EditerDossierSecreatire';
import CreerConsoleSecretaire from '../Secretaire/CreerConsole/CreerConsoleSecretaire';
import CreerFusionSecretaire from '../Secretaire/CreerFusion/CreerFusionSecretaire';
// import PayementSecretaire from '../Secretaire/Payement/PayementSecretaire';
// import CreerUrgenceSecretaire from '../Secretaire/CreerUrgence/CreerUrgenceSecretaire';
// import CreerPenaliteSecretaire from '../Secretaire/CreerPenalite/CreerPenaliteSecretaire';
// import PourDossierAvancer from '../AvancerDossier/PourDossierAvancer';
// import RetourEnArriere from '../Secretaire/RetourArriere/RetourEnArriere';
// import BalanceSecretaire from '../Secretaire/Balance/BalanceSecretaire';
// import DetailToutLeDossier from '../Secretaire/DetailToutDossier/DetailToutLeDossier';

const TousDossiers = () => {

  const [showEditSecreatire, setShowEditSecreatire] = useState(false)
  const [showCreateConsole, setShowCreateConsole] = useState(false)
  const [showCreateMerge, setShowCreateMerge] = useState(false)
  const [showCreatePayement, setShowCreatePayement] = useState(false)
  const [showCreateEmergence, setShowCreateEmergence] = useState(false)
  const [showCreatePenality, setShowCreatePenality] = useState(false)
  const [showCreateAdvanced, setShowCreateAdvanced] = useState(false)
  const [showCreateReturnBack, setShowCreateReturnBack] = useState(false)
  const [showBalance, setShowBalance] = useState(false)
  const [showDetailToutLeDossier, setShowDetailToutLeDossier] = useState(false)

  const handleEditClick = () => {
    setShowEditSecreatire(true)
  }

  const handleCreateConsole = () => {
    setShowCreateConsole(true)
  }

  const handleCreateMerge = () => {
    setShowCreateMerge(true)
  }

  const handleCreatePayement = () => {
    setShowCreatePayement(true)
  }

  const handleCreateEmergence = () => {
    setShowCreateEmergence(true)
  }

  const handleCreatePenality = () => {
    setShowCreatePenality(true)
  }

  const handleCreateAdvanced = () => {
    setShowCreateAdvanced(true)
  }

  const handleCreateReturnBack = () => {
    setShowCreateReturnBack(true)
  }

  const handleShowBalance = () => {
    setShowBalance(true)
  }

  const handleDetailToutLeDossier = () => {
    setShowDetailToutLeDossier(true)
  }

  const closeModal = () => {
    setShowEditSecreatire(false)
    setShowCreateConsole(false)
    setShowCreateMerge(false)
    setShowCreatePayement(false)
    setShowCreateEmergence(false)
    setShowCreatePenality(false)
    setShowCreateAdvanced(false)
    setShowCreateReturnBack(false)
    setShowBalance(false)
  }

  const closeModalDetail = () => {
    setShowDetailToutLeDossier(false)
  }

  return (
    <div className='w-full h-auto bg-white rounded-md'>
      <div className='absolute w-full top-0'>
        {
          showEditSecreatire ? <EditerDossierSecreatire closeModal={closeModal} /> : ""
        }
        {
          showCreateConsole ? <CreerConsoleSecretaire closeModal={closeModal} /> : ""
        }
        {
          showCreateMerge ? <CreerFusionSecretaire closeModal={closeModal} /> : ""
        }
        {
          showCreatePayement ? <PayementSecretaire closeModal={closeModal} /> : ""
        }
        {
          showCreateEmergence ? <CreerUrgenceSecretaire closeModal={closeModal} /> : ""
        }
        {
          showCreatePenality ? <CreerPenaliteSecretaire closeModal={closeModal} /> : ""
        }
        {
          showCreateAdvanced ? <PourDossierAvancer closeModal={closeModal} /> : ""
        }
        {
          showCreateReturnBack ? <RetourEnArriere closeModal={closeModal} /> : ""
        }
        {
          showBalance ? <BalanceSecretaire closeModal={closeModal} /> : ""
        }
        {
          showDetailToutLeDossier ? <DetailToutLeDossier closeModalDetail={closeModalDetail} /> : ""
        }
      </div>
      <div className="flex flex-col">
        <div className="">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3 w-2 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"></th>
                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">No</th>
                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">No dossier</th>
                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Demandeur</th>
                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Defendeur</th>
                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Tribunal</th>
                <th scope="col" className="px-6 py-3 text-start text-md font-semibold text-slate-700 uppercase">Audience</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              <tr className='border-b border-slate-700'>
                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                  <Tooltip showArrow={true} content={<DetailsDossiersSecretaire
                    handleEditClick={handleEditClick}
                    handleCreateConsole={handleCreateConsole}
                    handleCreateMerge={handleCreateMerge}
                    handleCreatePayement={handleCreatePayement}
                    handleCreateEmergence={handleCreateEmergence}
                    handleCreatePenality={handleCreatePenality}
                    handleCreateAdvanced={handleCreateAdvanced}
                    handleCreateReturnBack={handleCreateReturnBack}
                    handleShowBalance={handleShowBalance}
                    handleDetailToutLeDossier={handleDetailToutLeDossier}
                  />} className='bg-slate-700 h-7 rounded-md max-w'>
                    <button type="button" className="inline-flex items-center text-slate-700 bg-slate-200 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                      </svg>
                    </button>
                  </Tooltip>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">1</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">45</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">NZISABIRA</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">BUYENGERO</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">GIKUNGU</td>
                <td className="px-6 py-4 whitespace-nowrap font-semibold text-md text-slate-700">21 septembre 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TousDossiers
