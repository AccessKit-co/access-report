
"use client";

import Image from 'next/image';
import PageReport from './PageReport';
import SiteOverallReport from './SiteOverallReport';
import PageSelector from './PageSelector';
import IssueReport from '/components/PageReport/IssueReport/IssueReport';
import { useRef, useState, KeyboardEvent } from "react";
import { AiOutlineSearch, AiFillCheckCircle } from 'react-icons/ai';
import { MdError } from 'react-icons/md';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { ImContrast, ImCross } from 'react-icons/im';
import { FaExclamationTriangle } from 'react-icons/fa';
import { IoConstructSharp } from 'react-icons/io5';
import { FiAlertTriangle } from 'react-icons/fi';
import { AiOutlineAim } from 'react-icons/ai';
import { MdShield } from 'react-icons/md';
import IssueSubtype from '/components/PageReport/IssueReport/IssueSubtype';
import Issue from '../../components/PageReport/IssueReport/IssueC';
import { useIssueStore, usePageReportStore } from '../../store/PageReportStore';
import { URLSearch } from '../../components/URLSearch';

interface Category {
  id: string;
  description: string;
  priority: number;
}

interface ApiResponse {
  categories: Category[];
  // other properties from the API response if needed
}

export default function Home() {
  const PageReport = usePageReportStore();
  const IssueReport = useIssueStore();

  return (


    <main className="min-h-screen flex-col items-center gap-4 p-12">

      {/** Searchbar Component */}
      <URLSearch />

      {/** Site Overall Review Component */}

      <div className="w-full grid md:grid-cols-4 gap-2 text-center justify-center mb-4">
        <div className='md:col-span-3'>
          <div
            className="flex flex-col rounded-lg border px-5 py-4 h-full">
            <div className='flex flex-row w-full h-1/6 items-center justify-between'>
              <div className='flex m-2 justify-center items-center'>
                <h2 className='text-xl font-semibold '> Overall Report</h2>
              </div>
              <div className='flex flex-row m-2 w-1/3  justify-center items-end h-full gap-1'>
                <div className='flex h-2/3 rounded-lg border border-gray-100 bg-gray-100 w-1/2 justify-center items-center mb-1 '>
                  <div className='flex h-full items-center justify-start mx-1'>
                    <p className='text-xs font-light '>Average / page </p>
                  </div>
                </div>
                <div className='flex rounded-lg border border-gray-100 bg-gray-100 h-2/3 w-1/2 justify-center items-center mb-1'>
                  <div className='flex h-full items-center justify-start mx-1'>
                    <p className='text-xs font-light '>Total</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full h-5/6 items-center justify-center gap-2'>
              <div className='flex flex-row rounded-lg border bg-gray-200 w-full h-1/4 justify-between'>
                <div className='flex flex-row m-2 items-center justify-center'>
                  <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                    <MdError style={{ fill: 'red' }} />
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    <h2 className='text-xl font-semibold '>Errors</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  <div className='flex rounded-lg border bg-gray-300 w-1/2 justify-center items-center h-full '>
                    <div className='flex h-full items-center justify-center'>
                      <span className='absolute text-2xl font-semibold'> {PageReport.error.count}
                      </span>
                    </div>
                  </div>
                  <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full items-center justify-center'>
                      <span className='absolute text-2xl font-semibold'> {PageReport.error.count}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row rounded-lg border bg-gray-200 w-full h-1/4 justify-between'>
                <div className='flex flex-row m-2 items-center justify-center'>
                  <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                    <ImContrast style={{ fill: 'fuchsia' }} />
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    <h2 className='text-xl font-semibold '>Contrast</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  <div className='flex rounded-lg border bg-gray-300 w-1/2 justify-center items-center h-full '>
                    <div className='flex h-full items-center justify-center'>
                      <span className='absolute text-2xl font-semibold'> {PageReport.contrast.count}
                      </span>
                    </div>
                  </div>
                  <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full items-center justify-center'>
                      <span className='absolute text-2xl font-semibold'> {PageReport.contrast.count}</span>
                    </div>
                  </div>
                </div>
              </div><div className='flex flex-row rounded-lg border bg-gray-200 w-full h-1/4 justify-between'>
                <div className='flex flex-row m-2 items-center justify-center'>
                  <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                    <IoConstructSharp style={{ fill: 'purple' }} />
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    <h2 className='text-xl font-semibold '>Structure</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  <div className='flex rounded-lg border bg-gray-300 w-1/2 justify-center items-center h-full '>
                    <div className='flex h-full items-center justify-center'>
                      <span className='absolute text-2xl font-semibold'> {PageReport.structure.count}
                      </span>
                    </div>
                  </div>
                  <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full items-center justify-center'>
                      <span className='absolute text-2xl font-semibold'> {PageReport.structure.count}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row h-1/4 w-full justify-left items-center gap-2'>
                <div className='flex rounded-lg border bg-gray-200 h-full w-1/2 justify-between'>
                  <div className='flex flex-row m-2 items-center justify-center'>
                    <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                      <AiFillCheckCircle style={{ fill: 'green' }} />
                    </div>
                    <div className='flex h-full justify-start ml-1 items-center'>
                      <h2 className='text-xl font-semibold text-green-500'>Compliant</h2>
                    </div>

                  </div>
                  <div className='flex rounded-lg border bg-gray-300 m-2 w-1/4 justify-center items-center'>
                    <p className='text-xl font-bold'>0</p>
                  </div>
                </div>
                <div className='flex flex-row h-full w-1/2 rounded-lg border bg-gray-200  justify-between '>
                  <div className='flex flex-row m-2 items-center justify-center'>
                    <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                      <ImCross style={{ fill: 'red' }} />
                    </div>
                    <div className='flex h-full justify-start ml-1 items-center'>
                      <h2 className='text-xl font-semibold text-red-500'>Non Compliant</h2>
                    </div>
                  </div>
                  <div className='flex rounded-lg border bg-gray-300 m-2 w-1/4 justify-center items-center'>
                    <p className='text-xl font-bold'>1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:col-span-1 flex flex-col gap-2 '>
          <div
            className="group rounded-lg border px-5 py-4 transition-colors hover:dark:bg-neutral-800/30 h-3/4" >
            <div className='flex flex-row w-full h-1/5 items-center justify-center' >
              <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1' >
                <AiOutlineAim style={{ fill: 'green' }} />
              </div>
              < div className='flex h-full justify-start mx-1 items-center' >
                <h2 className='text-xl font-semibold ' > Overall Score </h2>
              </div>
              < div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 ml-1' >
                <AiOutlineAim style={{ fill: 'green' }} />
              </div>
            </div>
            <div className='flex flex-row w-full h-3/5 items-center justify-center' >
              <div className='flex relative w-full h-full items-center justify-center text-7xl' >
                <MdShield style={{ fill: 'green' }} />
                < span className='absolute text-2xl font-semibold text-white' > 8 </span>
              </div>
            </div>
            < div className='flex flex-row w-full h-1/5 items-center justify-center' >
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                A score of less than 85 is at risk of legal action.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col rounded-lg border px-5 py-4 gap-1">
            <div className='flex flex-row w-full h-1/4 items-center justify-center'>
              <div className='flex h-full justify-start mx-1 items-center'>
                <h2 className='text-xl font-semibold '>Status</h2>
              </div>
            </div>
            <div className='flex w-full h-3/4 m-1 items-center justify-center rounded-lg border bg-gray-200'>
              <p className='text-red-500 text-l font-black'>
                Non Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/** Page Report Component */}

      <div className='flex flex-col gap-4 w-full'>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 text-center justify-center w-full">
          <button onClick={() => {
            (IssueReport.description == "Errors") ? IssueReport.setIssueDescription('') :
              IssueReport.setIssue(PageReport.error)
          }}
            className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30">
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                <MdError style={{ fill: 'red' }} />
              </div>
              <div className='flex h-full justify-start ml-1 items-center'>
                <h2 className='text-xl font-semibold '>Errors</h2>
              </div>
            </div>
            <div className='flex flex-row w-full h-3/5 items-center justify-center'>
              <div className='flex relative w-full h-full items-center justify-center text-7xl'>
                <VscCircleLargeFilled style={{ fill: 'red' }} />
                <span className='absolute text-2xl font-semibold text-white'>{PageReport.error.count}</span>
              </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Issues in compliance with the code.
              </p>
            </div>
          </button>

          {/** Contrast Issues Button */}

          <button onClick={() => {
            (IssueReport.description == "Contrast") ? IssueReport.setIssueDescription('') :
              IssueReport.setIssue(PageReport.contrast)
          }}
            className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30">
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                <ImContrast style={{ fill: 'fuchsia' }} />
              </div>
              <div className='flex h-full justify-start ml-1 items-center'>
                <h2 className='text-xl font-semibold '>Contrast</h2>
              </div>
            </div>
            <div className='flex flex-row w-full h-3/5 items-center justify-center'>
              <div className='flex relative w-full h-full items-center justify-center text-7xl'>
                <VscCircleLargeFilled style={{ fill: 'fuchsia' }} />
                <span className='absolute text-2xl font-semibold text-white'>{PageReport.contrast.count}</span>
              </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Problems regarding color contrast
              </p>
            </div>
          </button>
          <button onClick={() => {
            (IssueReport.description == "Alerts") ? IssueReport.setIssueDescription('') : IssueReport.setIssue(PageReport.alert)
          }}
            className="group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30">
            <div className='flex flex-row w-full h-1/5 items-center justify-center space-x-2'>
              <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                <FiAlertTriangle style={{ color: 'olive' }} />
              </div>
              <div className='flex h-full justify-start ml-1 items-center'>
                <h2 className='text-xl font-semibold'>Alerts</h2>
              </div>
            </div>
            <div className='flex flex-row w-full h-3/5 items-center justify-center'>
              <div className='flex relative w-full h-full items-center justify-center text-7xl'>
                <VscCircleLargeFilled style={{ fill: 'olive' }} />
                <span className='absolute text-2xl font-semibold text-white'>{PageReport.alert.count}</span>
              </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <p className={`m-0 text-sm opacity-50`}>
                Possible problems in the code.
              </p>
            </div>
          </button>
          <button onClick={() => {
            (IssueReport.description == "Structure") ? IssueReport.setIssueDescription('') :
              IssueReport.setIssue(PageReport.structure)
          }}
            className="h-full group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30">
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                <IoConstructSharp style={{ fill: 'purple' }} />
              </div>
              <div className='flex h-full justify-start ml-1 items-center'>
                <h2 className='text-xl font-semibold '>Structure</h2>
              </div>
            </div>
            <div className='flex flex-row w-full h-3/5 items-center justify-center'>
              <div className='flex relative w-full h-full items-center justify-center text-7xl'>
                <VscCircleLargeFilled style={{ fill: 'purple' }} />
                <span className='absolute text-2xl font-semibold text-white'> {PageReport.structure.count}
                </span>
              </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Issues with how the website is structured.
              </p>
            </div>
          </button>
        </div>

        {/** Page Issue Report */

          /** Only show if description is '', which means none are selected */
          IssueReport.description == '' ? null :
            <div
              className="flex flex-col rounded-lg border bg-gray-100 px-5 py-4 w-full h-80">
              <div className='flex flex-row w-full h-16 items-center justify-start mx-3 mb-3'>
                <h2 className='text-xl font-semibold '> {IssueReport.description} Report </h2>
              </div>
              <div className='relative flex mx-1 items-center justify-center h-64'>
                {IssueReport.subtypes ?
                  <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip scrollbar-hide w-full h-64'>
                    {Object.values(IssueReport.subtypes).map(
                      (subtype) => <IssueSubtype description={subtype.description} count={subtype.count} id={subtype.id} selectors={subtype.selectors} />)}
                  </div>
                  : []}
              </div>
            </div>}
      </div >
    </main >
  )
}
