"use client";

import { IoConstructSharp } from 'react-icons/io5';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const StructuralErrors = () => (
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
                <span className='absolute text-2xl font-semibold text-white'> 74
                </span>
            </div>
        </div>
        <div className='flex flex-row w-full h-1/5 items-center'>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Issues with how the website is structured.
            </p>
        </div>
    </div>
);

export default StructuralErrors;
