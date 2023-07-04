"use client";

import { AiFillCheckCircle } from 'react-icons/ai';
import { ImContrast, ImTree, } from 'react-icons/im';
import { FiAlertTriangle } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { BsShieldFillX } from 'react-icons/bs';
import CircularProgress from '@mui/material/CircularProgress';
import IssueSubtype from '../components/PageReport/IssueReport/IssueSubtype';
import { SubtypeState, usePageReportStore } from '../store/PageReportStore';
import { useIssueStateSelectStore } from '../store/IssueStateSelectStore';
import Image from 'next/image';
import { WebsiteSearch } from '../components/WebsiteSearch';
import { PageSearch } from '../components/PageSearch';
import { useWebsiteReportStore } from '../store/WebsiteReportStore';
import { PageReport } from '../components/PageReport/PageReport';
import { WebsiteReportDashboard } from '../components/WebsiteReport/WebsiteReport';
import { Page } from 'puppeteer';

export default function Home() {
  const PageStore = usePageReportStore();
  const IssueState = useIssueStateSelectStore();
  const WebsiteReport = useWebsiteReportStore();

  const handleIssueState = (selecting: string) => {
    if (IssueState.selected == selecting) {
      IssueState.setSelected(''); // deselect
    }
    IssueState.setSelected(selecting);
  };


  return (
    <main className="min-h-screen w-screen flex flex-col items-center scrollbar-hide gap-2">

      {/** Header for login and Logo */}

      <div className="flex flex-col items-center justify-center h-36 w-full bg-gradient-to-b from-[#F0F9FF] via-[#F0F9FF] via-[87.5%] to-transparent to-[87.5%]">
        <div className="flex flex-row items-center justify-center h-3/4 w-full">
          <div className='flex flex-row my-2 items-center justify-center w-1/2'>
            <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 m-0.5'>
              <Image src='/AccessKitLogoNoBg.svg' alt="AccessKit Logo" width={32} height={32} />
            </div>
            <div className='flex h-full justify-start items-center m-0.5'>
              <h1 className='text-2xl font-medium '>AccessKit</h1>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center h-1/4 w-full">
          {/** Searchbar Component */}
          <div className="flex w-[24rem] h-[1.5rem] justify-center items-center bg-[#FFFFFF]">
            <WebsiteSearch />
          </div>
        </div>
      </div>

      <WebsiteReportDashboard />
      <PageSearch />
      <div className='container items-center justify-center w-full'>
        <PageReport />
      </div>

    </main >
  )
}
