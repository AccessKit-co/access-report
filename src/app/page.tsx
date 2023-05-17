
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
  const clickPoint = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const PageReport = usePageReportStore();
  const IssueReport = useIssueStore();

  const handleFocus = () => {
    if (clickPoint.current) {
      clickPoint.current.style.display = "none";
    }
  };

  const handleBlur = () => {
    if (clickPoint.current) {
      clickPoint.current.style.display = "block";
    }
  };


  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const url = event.currentTarget.value;
      try {
        const response = await fetch(`https://wave.webaim.org/api/request?key=Hx9brA2T3220&reporttype=3&url=${url}`);
        const json: ApiResponse = await response.json();
        console.log(json);
        const { categories } = json;
        setCategories(categories);
        const { error } = categories;

        console.log(categories);
        var { error: { count } } = categories;
        setErrorCount(count);
        var { contrast: { count } } = categories;
        setContrastCount(count);
        var { structure: { count } } = categories;
        setStructureCount(count);
        var { alert: { count } } = categories;
        setAlertsCount(count);
        console.log(count)
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  return (


    <main className="min-h-screen flex-col items-center gap-4 p-12">

      {/** Searchbar Component */}
      <URLSearch />

      {/** Site Overall Review Component */}

      <div className="w-full grid md:grid-cols-4 gap-2 text-center justify-center mb-4">
        <div className='md:col-span-3'>
          <div
            className="flex flex-col rounded-lg border px-5 py-4 h-full">
            <div className='flex flex-row w-full h-1/6 items-center justify-between mx-1 gap-2'>
              <div className='flex h-full justify-start m-2 items-center'>
                <h2 className='text-xl font-semibold '> Overall Report</h2>
              </div>
              <div className='flex flex-row m-2 w-1/3 justify-center items-center h-full'>
                <div className='flex h-full justify-center items-center mb-2'>
                  <div className='flex h-full rounded-lg border border-gray-100 bg-gray-100 w-1/2 justify-center items-center '>
                    <div className='flex h-full justify-start m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start mx-1'>
                        <h2 className='text-xs font-light '>Avg per page </h2>
                      </div>
                    </div>
                  </div>
                  <div className='flex rounded-lg border border-gray-100 bg-gray-100 ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start mx-1'>
                        <h2 className='text-xs font-light '>Total per page</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-full h-full mx-1 items-center justify-center gap-2'>
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
                    <div className='flex h-full justify-start m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start'>
                        <span className='absolute text-2xl font-semibold'> {PageReport.error.count}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start'>
                        <span className='absolute text-2xl font-semibold'> {PageReport.error.count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex rounded-lg border bg-gray-200 w-full h-1/4 justify-between'>
                <div className='flex flex-row m-2 items-center justify-center'>
                  <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                    <ImContrast style={{ fill: 'fuchsia' }} />
                  </div>
                  <div className='flex h-full justify-center ml-1 items-center'>
                    <h2 className='text-xl font-semibold'>Contrast</h2>
                  </div>
                </div>
                <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                  <div className='flex rounded-lg border bg-gray-300 w-1/2 justify-center items-center h-full '>
                    <div className='flex h-full justify-start m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start'>
                        <span className='absolute text-2xl font-semibold'> {PageReport.contrast.count}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start'>
                        <span className='absolute text-2xl font-semibold'> {PageReport.contrast.count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex rounded-lg border bg-gray-200 w-full h-1/4 justify-between'>
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
                    <div className='flex h-full justify-start m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start'>
                        <span className='absolute text-2xl font-semibold'> {PageReport.structure.count}</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                    <div className='flex h-full m-1 items-center justify-between'>
                      <div className='flex h-full items-center justify-start'>
                        <span className='absolute text-2xl font-semibold'> {PageReport.structure.count}</span>
                      </div>
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
          <div
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
          </div>
          <div className="h-full group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30 overflow-hidden">
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <div className='flex h-full items-center justify-center text-xl group-hover:scale-125 mr-1'>
                <ImContrast style={{ fill: 'fuchsia' }} />
              </div>
              <div className='flex h-full justify-start ml-1 items-center justify-center'>
                <h2 className='text-xl font-semibold'>Contrast</h2>
              </div>
            </div>
            <div className='flex flex-row w-full h-3/5 items-center justify-center'>
              <div className='flex relative w-full h-full items-center justify-center text-7xl'>
                <VscCircleLargeFilled style={{ fill: 'fuchsia' }} />
                <span className='absolute text-2xl font-semibold text-white'>{PageReport.contrast.count}</span>
              </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center justify-center'>
              <div className=''>
                <p className={`m-0 text-sm opacity-50 `}>
                  Issues in visibility for people with impared vision.
                </p>
              </div>
            </div>
          </div>
          <div
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
          </div>
          <div
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
          </div>
        </div>

        {/** Page Report Issue */}

        <div
          className="flex flex-col rounded-lg border bg-gray-100 px-5 py-4 w-full h-80">
          <div className='flex flex-row w-full h-16 items-center justify-start mx-3 mb-3'>
            <h2 className='text-xl font-semibold '> {IssueReport.description} Report </h2>
          </div>
          <div className='relative flex mx-1 items-center justify-center h-64'>
            <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip scrollbar-hide w-full h-64'>
              <IssueSubtype />
              <IssueSubtype />
              <IssueSubtype />
              <IssueSubtype />
              <IssueSubtype />
              <IssueSubtype />
              <IssueSubtype />
              <IssueSubtype />
            </div>
          </div>
        </div>
      </div >
    </main >
  )
}
