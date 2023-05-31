
"use client";

import { AiFillCheckCircle } from 'react-icons/ai';
import { MdError, MdShield } from 'react-icons/md';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { ImContrast, ImTree, } from 'react-icons/im';
import { IoConstructSharp } from 'react-icons/io5';
import { FiAlertTriangle } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { CgEditContrast } from 'react-icons/cg';
import IssueSubtype from '../../components/PageReport/IssueReport/IssueSubtype';
import { SubtypeState, usePageReportStore } from '../../store/PageReportStore';
import { useIssueStateSelectStore } from '../../store/IssueStateSelectStore';
import { URLSearch } from '../../components/URLSearch';
import Image from 'next/image';

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
  const PageStore = usePageReportStore();
  const IssueState = useIssueStateSelectStore();

  const handleIssueState = (selecting: string) => {
    if (IssueState.selected == selecting) {
      IssueState.setSelected(''); // deselect
    }
    IssueState.setSelected(selecting);
  };


  return (
    <main className="min-h-screen w-screen flex-col items-center gap-4 px-8 py-4 scrollbar-hide">

      {/** Header for login and Logo */}

      <div className="flex flex-row items-start justify-start h-16 w-full">
        <div className="flex flex-row items-center justify-start my-2 h-12 w-full">
          <div className='flex flex-row my-2 items-center justify-start w-1/2'>
            <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
              <Image src='/AccessKitLogo.svg' alt="Logo" width={44} height={40} />
            </div>
            <div className='flex h-full justify-start ml-1 items-center'>
              <h2 className='text-2xl font-medium font-sans '>AccessKit</h2>
            </div>
          </div>
        </div>
      </div>

      {/** Searchbar Component */}
      <URLSearch />

      {/** Site Overall Review Component */}
      <div className="w-full flex gap-2 text-center justify-center w-full h-32">
        <div className='flex flex-row justify-between rounded-md border-2 my-2 w-72'>
          <div
            className="flex flex-col bg-gray-200 w-1/2">
            <div className='flex flex-row mx-1 h-1/4 items-center justify-center'>
              <div className='flex justify-center items-center'>
                <h2 className='text-sm font-semibold '> Webpage Report</h2>
              </div>
            </div>
            <div className='flex flex-col  m-1 items-center justify-center'>
              <div className='flex flex-row rounded border bg-gray-300 w-full h-1/3 justify-between'>
                <div className='flex flex-row items-center justify-start w-3/4'>
                  <div className='flex h-full items-center justify-center text-l group-hover:scale-125 m-1'>
                    <FiAlertCircle style={{ color: '#FF000E' }} />
                  </div>
                  <div className='flex h-full justify-start m-1 items-center'>
                    <h2 className='text-xs font-semi '>Errors</h2>
                  </div>
                </div>
                <div className='flex flex-row mx-1 w-1/4 justify-center items-center'>
                  <div className='flex h-full w-full items-center justify-center'>
                    <span className='absolute text-l font-semibold text-[#FF000E]'> {PageStore.error.count}</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-row rounded border bg-gray-300 w-full h-1/3 justify-between'>
                <div className='flex flex-row items-center justify-start w-3/4'>
                  <div className='flex h-full items-center justify-center text-l group-hover:scale-125 m-1'>
                    <ImContrast style={{ color: '#0073E6' }} />
                  </div>
                  <div className='flex h-full justify-start m-1 items-center'>
                    <h2 className='text-xs font-semi '>Contrast</h2>
                  </div>
                </div>
                <div className='flex flex-row mx-1 w-1/4 justify-center items-center'>
                  <div className='flex h-full w-full items-center justify-center'>
                    <span className='absolute text-l font-semibold text-[#0073E6]'> {PageStore.contrast.count}</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-row rounded border bg-gray-300 w-full h-1/3 justify-between'>
                <div className='flex flex-row items-center justify-start w-3/4'>
                  <div className='flex h-full items-center justify-center text-l group-hover:scale-125 m-1'>
                    <ImTree style={{ fill: '#27CE56' }} />
                  </div>
                  <div className='flex h-full justify-start m-1 items-center'>
                    <h2 className='text-xs font-semi '>Structure</h2>
                  </div>
                </div>
                <div className='flex flex-row mx-1 w-1/4 justify-center items-center'>
                  <div className='flex h-full w-full items-center justify-center'>
                    <span className='absolute text-l font-semibold text-[#27CE56]'> {PageStore.structure.count}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** Compliance Status Component*/}
          <div
            className="flex flex-col w-1/2">
            <div className='flex flex-row mx-1 h-1/4 items-center justify-center'>
              <div className='flex justify-center items-center'>
                <h2 className='text-sm font-semibold '> Status</h2>
              </div>
            </div>

            <div className='flex flex-col h-3/4 m-1 items-center justify-center'>
              {(PageStore.error.count >= 10) ?
                <div className='flex flex-row rounded-lg border bg-gray-300 w-full h-1/2 items-center justify-center'>
                  <div className='flex h-full w-1/6 items-center justify-center text-xl group-hover:scale-125'>
                    <MdShield style={{ fill: '#FF000E' }} />
                  </div>
                  <div className='flex h-full w-5/6 justify-center items-center'>
                    <h2 className='text-sm font-semibold'>Non Compliant</h2>
                  </div>
                </div>
                :
                <div className='flex flex-row rounded-lg border bg-gray-300 w-full h-1/2 items-center justify-center'>
                  <div className='flex h-full w-1/6 items-center justify-center text-xl group-hover:scale-125'>
                    <AiFillCheckCircle style={{ fill: 'green' }} />
                  </div>
                  <div className='flex h-full w-5/6 justify-center items-center'>
                    <h2 className='text-sm font-semibold'>Compliant</h2>
                  </div>
                </div>}
            </div>
          </div>
          {/** 
          <div className="flex flex-col w-1/2 items-center justify-center">
            <div className='flex w-full mx-1 h-1/4 items-center justify-center' >
              < div className='flex h-full justify-center mx-1 items-center' >
                <h2 className='text-l font-semibold ' > Status</h2>
              </div>
            </div>
            <div className='flex flex-row m-2 h-3/4 items-center justify-center' >
              <div className='flex w rounded-lg border bg-gray-200 '>
                <div className='flex flex-row items-center justify-start m-1'>
                  <div className='flex h-full items-center justify-center text-xl group-hover:scale-125'>
                    {/** <AiFillCheckCircle style={{ fill: 'green' }} /> 
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    {/**  <h2 className='text-xs font-semi '>Non Compliant</h2> 
                  </div>
                </div>
              </div>
            </div>
            {/** 
            {(PageStore.error.count >= 10) ?
              <div className='flex flex-row w-full h-2/3 items-center justify-center' >
                <div className='flex relative w-full h-full items-center justify-center text-8xl' >
                  <MdShield style={{ fill: 'red' }} />
                </div>
              </div>
              :

              <div className='flex flex-row w-full h-2/3 items-center justify-center' >
                <div className='flex m-1 rounded-lg border bg-gray-200 '>
                  <div className='flex flex-row items-center justify-start m-2'>
                    <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125'>
                      <AiFillCheckCircle style={{ fill: 'green' }} />
                    </div>
                    <div className='flex h-full justify-start ml-1 items-center'>
                      <h2 className='text-sm font-semibold '>Compliant</h2>
                    </div>
                  </div>
                </div>
              </div>
            }
            */}
        </div>
      </div>

      {/** Page Report Component 2.0 */}

      <div className="w-full flex gap-2 text-center justify-center w-full h-80">
        <div className='flex flex-row divide-x rounded-md border-2 w-full'>
          <div className='flex w-1/5 bg-[#F4F8FB] items-center justify-center'>
            <div className='flex flex-col items-center justify-top w-full h-full'>

              <button onClick={() => { handleIssueState("error") }} className='flex flex-row w-full h-8 bg-gray-200 items-center justify-start'>
                <div className='flex flex-row m-2 items-center justify-start w-1/2'>
                  <div className='flex h-full items-center justify-center text-l group-hover:scale-125 mr-1'>
                    <MdError style={{ color: 'red' }} />
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    <h2 className='text-sm font-semi '>Errors</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  {/** Add rounded-lg border border-gray-300 bg-gray-100 to className, when you want to add the average per page */}
                  <div className='flex w-1/2 justify-center items-center h-full '>
                    <div className='flex w-full h-full items-center justify-center'>
                      {/**
                      <span className='absolute text-2xl font-semibold'> {PageStore.structure.count}
                      </span>
                       */}
                    </div>
                  </div>
                  <div className='flex ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <span className='absolute text-xl font-semibold text-[#cc0087]'> {PageStore.error.count}</span>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={() => { handleIssueState("contrast") }} className='flex flex-row w-full h-8 bg-gray-200 items-center justify-between'>
                <div className='flex flex-row m-2 items-center justify-start w-2/3'>
                  <div className='flex h-full items-center justify-center text-l group-hover:scale-125 mr-1'>
                    <ImContrast style={{ fill: '#60A5FA' }} />
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    <h2 className='text-sm font-semi '>Contrast</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  <div className='flex ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <span className='absolute text-xl font-semibold text-[#cc0087]'> {PageStore.contrast.count}</span>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={() => { handleIssueState("alert") }} className='flex flex-row w-full h-8 bg-gray-200 items-center justify-start'>
                <div className='flex flex-row m-2 items-center justify-start w-1/2'>
                  <div className='flex h-full items-center justify-center text-l group-hover:scale-125 mr-1'>
                    <FiAlertTriangle style={{ color: 'olive' }} />
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    <h2 className='text-sm font-semi '>Alerts</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  {/** Add rounded-lg border border-gray-300 bg-gray-100 to className, when you want to add the average per page */}
                  <div className='flex w-1/2 justify-center items-center h-full '>
                    <div className='flex w-full h-full items-center justify-center'>
                      {/**
                      <span className='absolute text-2xl font-semibold'> {PageStore.structure.count}
                      </span>
                       */}
                    </div>
                  </div>
                  <div className='flex ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <span className='absolute text-xl font-semibold text-[#cc0087]'> {PageStore.alert.count}</span>
                    </div>
                  </div>
                </div>
              </button>

              <button onClick={() => { handleIssueState("structure") }} className='flex flex-row w-full h-8 bg-gray-200 items-center justify-start'>
                <div className='flex flex-row m-2 items-center justify-start w-1/2'>
                  <div className='flex h-full items-center justify-center text-l group-hover:scale-125 mr-1'>
                    <ImTree style={{ fill: '#cc0087' }} />
                  </div>
                  <div className='flex h-full justify-start ml-1 items-center'>
                    <h2 className='text-sm font-semi '>Structure</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  {/** Add rounded-lg border border-gray-300 bg-gray-100 to className, when you want to add the average per page */}
                  <div className='flex w-1/2 justify-center items-center h-full '>
                    <div className='flex w-full h-full items-center justify-center'>
                      {/**
                      <span className='absolute text-2xl font-semibold'> {PageStore.structure.count}
                      </span>
                       */}
                    </div>
                  </div>
                  <div className='flex ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <span className='absolute text-xl font-semibold text-[#cc0087]'> {PageStore.structure.count}</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/** Main Issue Report 2.0 */}

          <div className='flex w-4/5 items-center justify-center'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
              {
                IssueState.selected == '' ? null :
                  <div
                    className="flex flex-col px-5 py-4 w-full h-full">
                    <div className='flex flex-row w-full h-16 items-center justify-start mx-3 mb-3'>
                      <h2 className='text-xl font-semibold '> {(PageStore as any)[IssueState.selected].description} Report </h2>
                    </div>
                    <div className='relative flex mx-1 items-center justify-center h-64'>
                      {(PageStore as any)[IssueState.selected].items ?
                        <div className='flex flex-col gap-2 overflow-y-scroll overflow-x-clip scrollbar-hide w-full h-64'>
                          {Object.values((PageStore as any)[IssueState.selected].items as SubtypeState[]).map(
                            (item: SubtypeState, index: number) =>
                              <IssueSubtype key={index} description={item.description} count={item.count} id={item.id} selectors={item.selectors} />)}
                        </div>
                        : []}
                    </div>
                  </div>
              }
            </div>

          </div>
        </div>
      </div >

      {/** Page Report Component */}

      < div className='flex flex-col gap-4 w-full' >
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 text-center justify-center w-full">
          <button onClick={() => {
            (IssueState.selected == "error") ? IssueState.setSelected('') :
              IssueState.setSelected("error")
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
                <span className='absolute text-2xl font-semibold text-white'>{PageStore.error.count}</span>
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
            (IssueState.selected == "contrast") ? IssueState.setSelected('') :
              IssueState.setSelected("contrast")
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
                <span className='absolute text-2xl font-semibold text-white'>{PageStore.contrast.count}</span>
              </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Problems regarding color contrast
              </p>
            </div>
          </button>
          <button onClick={() => {
            (IssueState.selected == "alert") ? IssueState.setSelected('') :
              IssueState.setSelected("alert")
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
                <span className='absolute text-2xl font-semibold text-white'>{PageStore.alert.count}</span>
              </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <p className={`m-0 text-sm opacity-50`}>
                Possible problems in the code.
              </p>
            </div>
          </button>
          <button onClick={() => {
            (IssueState.selected == "structure") ? IssueState.setSelected('') :
              IssueState.setSelected("structure")
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
                <span className='absolute text-2xl font-semibold text-white'> {PageStore.structure.count}
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

        {/** Page Issue Report */}

        {/** Only show if description is '', which means none are selected */}
        {
          IssueState.selected == '' ? null :
            <div
              className="flex flex-col rounded-lg border bg-gray-100 px-5 py-4 w-full h-80">
              <div className='flex flex-row w-full h-16 items-center justify-start mx-3 mb-3'>
                <h2 className='text-xl font-semibold '> {(PageStore as any)[IssueState.selected].description} Report </h2>
              </div>
              <div className='relative flex mx-1 items-center justify-center h-64'>
                {(PageStore as any)[IssueState.selected].items ?
                  <div className='flex flex-col gap-2 overflow-y-scroll overflow-x-clip scrollbar-hide w-full h-64'>
                    {Object.values((PageStore as any)[IssueState.selected].items as SubtypeState[]).map(
                      (item: SubtypeState, index: number) =>
                        <IssueSubtype key={index} description={item.description} count={item.count} id={item.id} selectors={item.selectors} />)}
                  </div>
                  : []}
              </div>
            </div>
        }
      </div >
    </main >
  )
}
