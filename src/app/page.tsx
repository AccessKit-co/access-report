"use client";

import { AiFillCheckCircle } from 'react-icons/ai';
import { ImContrast, ImTree, } from 'react-icons/im';
import { FiAlertTriangle } from 'react-icons/fi';
import { FiAlertCircle } from 'react-icons/fi';
import { BsShieldFillX } from 'react-icons/bs';
import CircularProgress from '@mui/material/CircularProgress';
import IssueSubtype from '../../components/PageReport/IssueReport/IssueSubtype';
import { SubtypeState, usePageReportStore } from '../../store/PageReportStore';
import { useIssueStateSelectStore } from '../../store/IssueStateSelectStore';
import Image from 'next/image';
import { WebsiteSearch } from '../../components/WebsiteSearch';
import { PageSearch } from '../../components/PageSearch';
import { useWebsiteReportStore } from '../../store/WebsiteReportStore';
import { PageReport } from '../../components/PageReport/PageReport';

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
    <main className="min-h-screen min-w-[28rem] w-screen flex-col items-center scrollbar-hide">

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

      <div className="flex flex-col items-center justify-start w-screen h-screen px-16 gap-2">

        {/** Site Overall Review Component */}
        {
          WebsiteReport.rootUrl ? <div className="flex items-center justify-center w-[20rem] h-8 overflow-clip">
            <h2 className='text-xl font-medium font-sans truncate'>{WebsiteReport.rootUrl} </h2>
          </div> : ''
        }

        < div className="w-full flex flex-col text-center items-center justify-center w-full h-32">
          <div className='flex flex-row justify-between rounded-md overflow-clip border-2 w-[24rem] '>
            <div
              className="flex flex-col bg-[#F0F9FF] w-1/2">
              <div className='flex flex-row mx-2 h-1/4 items-center justify-center'>
                <div className='flex justify-center items-center'>
                  <h2 className=' text-l font-semibold '> Report</h2>
                </div>
              </div>
              <div className='flex flex-col m-2 items-center justify-center'>
                <div className='flex flex-row w-full h-1/3 justify-between'>
                  <div className='flex flex-row items-center justify-start w-4/5'>
                    <div className='flex h-full items-center justify-center text-l group-hover:scale-125 m-1'>
                      <FiAlertCircle style={{ color: '#EA0404' }} />
                    </div>
                    <div className='flex h-full justify-start m-1 items-center'>
                      <h2 className='text-sm font-semibold '>Errors</h2>
                    </div>
                  </div>
                  <div className='flex flex-row mx-1 w-1/5 justify-center items-center'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <span className='absolute text-xl font-semibold text-[#EA0404]'> {WebsiteReport.isLoading ? <CircularProgress sx={{ color: '#EA0404' }} style={{ width: 16, height: 16 }} /> : WebsiteReport.totalErrors}</span>
                    </div>
                  </div>
                </div>


                <div className='flex flex-row w-full h-1/3 justify-between'>
                  <div className='flex flex-row items-center justify-start w-4/5'>
                    <div className='flex h-full items-center justify-center text-l group-hover:scale-125 m-1'>
                      <ImContrast style={{ color: "#008AE0" }} />
                    </div>
                    <div className='flex h-full justify-start m-1 items-center'>
                      <h2 className='text-sm font-semibold '>Contrast</h2>
                    </div>
                  </div>
                  <div className='flex flex-row mx-1 w-1/5 justify-center items-center'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <span className='absolute text-xl font-semibold text-[#008AE0]'> {WebsiteReport.isLoading ? <CircularProgress sx={{ color: '#008AE0' }} style={{ width: 16, height: 16 }} /> : WebsiteReport.totalContrasts}</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row w-full h-1/3 justify-between'>
                  <div className='flex flex-row items-center justify-start w-4/5'>
                    <div className='flex h-full items-center justify-center text-l group-hover:scale-125 m-1'>
                      <ImTree style={{ fill: '#2CB56E' }} />
                    </div>
                    <div className='flex h-full justify-start m-1 items-center'>
                      <h2 className='text-sm font-semibold '>Structure</h2>
                    </div>
                  </div>
                  <div className='flex flex-row mx-1 w-1/5 justify-center items-center'>
                    <div className='flex h-full w-full items-center justify-center'>
                      <span className='absolute text-xl font-semibold text-[#2CB56E]'> {WebsiteReport.isLoading ? <CircularProgress sx={{ color: '#2CB56E' }} style={{ width: 16, height: 16 }} /> : WebsiteReport.totalStructures}</span>
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
                  <h2 className=' text-l font-semibold '> Compliance Status</h2>
                </div>
              </div>

              {WebsiteReport.isLoading ?
                <div className='flex flex-col h-3/4 mx-3 items-center justify-center' >
                  <CircularProgress style={{ width: 48, height: 48 }} />
                </div> : <div className='flex flex-col h-3/4 mx-3 items-center justify-center'>
                  {(PageStore.error.count >= 1) ?
                    <div className='flex flex-row rounded-lg border bg-gray-200 w-fit h-1/2 items-center justify-center p-1 gap-1'>
                      <div className='flex h-full w-1/4 items-center justify-center text-3xl group-hover:scale-125'>
                        <BsShieldFillX style={{ fill: '#FF000E' }} />
                      </div>
                      <div className='flex h-full w-3/4 justify-start items-center'>
                        <h2 className='text-l font-semibold'>Non Compliant</h2>
                      </div>
                    </div>
                    :
                    <div className='flex flex-row rounded-lg border bg-gray-200 w-fit h-1/2 items-center justify-center p-1 gap-1'>
                      <div className='flex h-full w-1/4 items-center justify-center text-3xl'>
                        <AiFillCheckCircle style={{ fill: 'green' }} />
                      </div>
                      <div className='flex h-full w-3/4 justify-center items-center'>
                        <h2 className='text-l font-semibold'>Compliant</h2>
                      </div>
                    </div>}
                </div>}
            </div>
          </div>
        </div>

        <div className='w-full min-w-[36rem] h-4 items-center justify-start'>
          <PageSearch />
        </div>

        {/** Page Report Component 2.0 */}

        <div className="w-full flex gap-2 text-center justify-center w-full min-w-[36rem] h-[28rem] overflow-clip">
          <div className='flex flex-row divide-x rounded-md border-2 w-full h-full'>
            <div className='flex w-[10rem] bg-[#F0F9FF] items-center justify-center'>
              <div className='flex flex-col items-center justify-top w-full h-full'>

                <button onClick={() => { handleIssueState("error") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#FEEBEB] px-1'
                  style={{
                    backgroundColor: IssueState.selected == "error" ? 'white' : '',
                    borderRight: IssueState.selected == "error" ? '2px solid blue' : '',
                  }}
                >
                  <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                    <div className='flex h-full items-center justify-center text-l group-hover:scale-125 mr-1'>
                      <FiAlertCircle style={{ color: '#EA0404' }} />
                    </div>
                    <div className='flex h-full justify-start items-center'>
                      <h2 className='text-sm font-semibold '>Errors</h2>
                    </div>
                  </div>
                  <div className='flex shrink-0 w-1/3 h-full p-2 justify-center items-center'>
                    <div className='flex w-full h-full border-2 border-[#FDB0B0] bg-[#FED7D7] rounded items-center justify-center '>
                      {WebsiteReport.isLoading ? <span className='text-l items-center justify-center h-full font-semibold text-[#EA0404]'> <CircularProgress sx={{ color: '#EA0404' }} style={{ width: 16, height: 16 }} />  </span> : <span className='text-l items-center justify-center font-semibold text-[#EA0404]'> {PageStore.error.count} </span>}
                    </div>
                  </div>
                </button>

                <button onClick={() => { handleIssueState("contrast") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#C2E8FF] px-1'
                  style={{
                    backgroundColor: IssueState.selected == "contrast" ? 'white' : '',
                    borderRight: IssueState.selected == "contrast" ? '2px solid blue' : '',
                  }}
                >
                  <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                    <div className='flex h-full items-center justify-center text-l  mr-1'>
                      <ImContrast style={{ color: '#008AE0' }} />
                    </div>
                    <div className='flex h-full justify-start items-center'>
                      <h2 className='text-sm font-semibold '>Contrast</h2>
                    </div>
                  </div>
                  <div className='flex shrink-0 w-1/3 h-full p-2 justify-center items-center'>
                    <div className='flex w-full h-full border-2 border-[#70C8FF] bg-[#C2E8FF] rounded items-center justify-center '>
                      {WebsiteReport.isLoading ? <span className='text-l items-center justify-center h-full font-semibold text-[#008AE0]'> <CircularProgress sx={{ color: '#008AE0' }} style={{ width: 16, height: 16 }} />  </span> : <span className='text-l items-center justify-center font-semibold text-[#008AE0]'> {PageStore.contrast.count} </span>}
                    </div>
                  </div>
                </button>

                <button onClick={() => { handleIssueState("structure") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#CEF3E0] px-1'
                  style={{
                    backgroundColor: IssueState.selected == "structure" ? 'white' : '',
                    borderRight: IssueState.selected == "structure" ? '2px solid blue' : '',
                  }}
                >
                  <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                    <div className='flex h-full items-center justify-center text-l  mr-1'>
                      <ImTree style={{ color: '#2CB56E' }} />
                    </div>
                    <div className='flex h-full justify-start items-center'>
                      <h2 className='text-sm font-semibold '>Structure</h2>
                    </div>
                  </div>
                  <div className='flex w-1/3 shrink-0 h-full p-2 justify-center items-center'>
                    <div className='flex w-full h-full border-2 border-[#5BD797] bg-[#CEF3E0] rounded items-center justify-center '>
                      {WebsiteReport.isLoading ? <span className='text-l items-center justify-center h-full font-semibold text-[#2CB56E]'> <CircularProgress sx={{ color: '#2CB56E' }} style={{ width: 16, height: 16 }} />  </span> : <span className='text-l items-center justify-center font-semibold text-[#2CB56E]'> {PageStore.structure.count} </span>}
                    </div>
                  </div>
                </button>

                <button onClick={() => { handleIssueState("alert") }} className='flex flex-row w-full h-10 items-center justify-start hover:bg-[#FFEFD6] px-1'
                  style={{
                    backgroundColor: IssueState.selected == "alert" ? 'white' : '',
                    borderRight: IssueState.selected == "alert" ? '2px solid blue' : '',
                  }}
                >
                  <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                    <div className='flex h-full items-center justify-center text-l  mr-1'>
                      <FiAlertTriangle style={{ color: '#FF9505' }} />
                    </div>
                    <div className='flex h-full justify-start items-center'>
                      <h2 className='text-sm font-semibold'>Alerts</h2>
                    </div>
                  </div>
                  <div className='flex w-1/3 shrink-0 h-full p-2 justify-center items-center'>
                    <div className='flex w-full h-full border-2 border-[#FFCC85] bg-[#FFE6C2] rounded items-center justify-center '>{WebsiteReport.isLoading ?
                      <span className='items-center  justify-center text-l text-center font-semibold text-[#FF9505] h-full'> <CircularProgress sx={{ color: '#FF9505' }} style={{ width: 16, height: 16 }} /> </span> : <span className='items-center  justify-center text-l text-center font-semibold text-[#FF9505] '> {PageStore.alert.count} </span>}
                    </div>
                  </div>
                </button>


              </div>
            </div>

            {/** Main Issue Report 2.0 */}

            <div className='flex grow h-full items-center justify-center min-w-[24rem]'>
              {WebsiteReport.isLoading ? <CircularProgress style={{ width: 96, height: 96 }} /> :
                <div className='flex flex-col items-center justify-center w-full h-full p-2'>

                  {
                    IssueState.selected == '' ? '' :
                      <div
                        className="flex flex-col w-full h-full justify-start items-center">
                        <div className='flex flex-col w-full h-16 items-center justify-start'>
                          <div className='flex flex-row w-full h-8 items-center justify-start'>
                            <h2 className='font-semibold text-xl'> {(PageStore as any)[IssueState.selected].description} Report </h2>
                          </div>
                          <div className='flex flex-row w-full h-4 items-center justify-start text-sm'>
                            <p className='text-xs font-extralight text-gray-400 justify-start items-center'> {(PageStore as any)[IssueState.selected].description} </p>
                          </div>
                        </div>
                        <div className='flex flex-col items-center overflow-y-auto scroll-smooth overflow-clip justify-start h-[24rem] w-full'>
                          {(PageStore as any)[IssueState.selected].items ?
                            <div className='flex flex-col items-top justify-center gap-2 w-full'>
                              {Object.values((PageStore as any)[IssueState.selected].items as SubtypeState[]).map(
                                (item: SubtypeState, index: number) =>
                                  <IssueSubtype key={index} description={item.description} count={item.count} id={item.id} selectors={item.selectors} />)}
                            </div>
                            : []}
                        </div>
                      </div>
                  }
                </div>}

            </div>
          </div>
        </div >
      </div>
    </main >
  )
}
