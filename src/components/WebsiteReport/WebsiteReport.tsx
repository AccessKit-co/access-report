import { CircularProgress } from '@mui/material';
import { FiAlertCircle } from 'react-icons/fi';
import { BsShieldFillX } from 'react-icons/bs';
import { ImContrast, ImTree } from 'react-icons/im';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useWebsiteReportStore } from '../../store/WebsiteReportStore';

export const WebsiteReportDashboard = () => {
    const WebsiteReport = useWebsiteReportStore();

    return (
        <>

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
                                {(WebsiteReport.totalErrors >= 1) ?
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
        </>
    );
}