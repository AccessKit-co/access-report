
import { MdError } from 'react-icons/md';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { AiOutlineAim } from 'react-icons/ai';
import { MdShield } from 'react-icons/md';
import { ImContrast } from 'react-icons/im';
import { IoConstructSharp } from 'react-icons/io5';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import Errors from '../../components/Errors';
import ContrastErrors from '../../components/ContrastErrors';
import Alerts from '../../components/Alerts';
import StructuralErrors from '../../components/StructuralErrors';
import Score from '../../components/Score';
import Status from '../../components/Status';
import GeneralReport from '../../components/GeneralReport';

const SiteOverallReport = () => (
    <div className="w-full grid md:grid-cols-4 gap-2 text-center justify-center">
        <div className='md:col-span-3'>
            <div
                className="flex flex-col rounded-lg border px-5 py-4 h-full">
                <div className='flex flex-row w-full h-1/6 items-center justify-between mx-1 gap-2'>
                    <div className='flex h-full justify-start m-2 items-center'>
                        <h2 className='text-xl font-semibold '> Overall Report</h2>
                    </div>
                    <div className='flex flex-row m-2 w-1/3 justify-center items-center'>
                        <div className='flex rounded-lg border border-gray-100 bg-gray-100 w-1/2 justify-center items-center h-full '>
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
                                    <div className='flex h-full items-center justify-start mr-1'>
                                        <p className='text-xl font-bold'>{errorCount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                                <div className='flex h-full m-1 items-center justify-between'>
                                    <div className='flex h-full items-center justify-start mx-1'>
                                        <p className='text-xl font-bold'>{errorCount}</p>
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
                                    <div className='flex h-full items-center justify-start mr-1'>
                                        <p className='text-xl font-bold'>{contrastCount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                                <div className='flex h-full m-1 items-center justify-between'>
                                    <div className='flex h-full items-center justify-start mx-1'>
                                        <p className='text-xl font-bold'>{contrastCount}</p>
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
                                    <div className='flex h-full items-center justify-start mr-1'>
                                        <p className='text-xl font-bold'>{structureCount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex rounded-lg border bg-gray-300 ml-1 h-full w-1/2 justify-center items-center'>
                                <div className='flex h-full m-1 items-center justify-between'>
                                    <div className='flex h-full items-center justify-start mx-1'>
                                        <p className='text-xl font-bold'>{structureCount}</p>
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
            <Score />
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
);

export default SiteOverallReport;