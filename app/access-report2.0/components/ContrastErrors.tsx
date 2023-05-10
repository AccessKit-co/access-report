import React from 'react';
import { ImContrast } from 'react-icons/im';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const ContrastErrors = () => (
    <div
        className="group rounded-lg border px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className='flex flex-row w-full h-1/5 items-center justify-center'>
            <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                <ImContrast style={{ fill: 'purple' }} />
            </div>
            <div className='flex h-full justify-start ml-1'>
                <h2 className='text-xl font-semibold'> Contrast Errors</h2>
            </div>
        </div>
        <div className='flex flex-row w-full h-3/5 items-center justify-center'>
            <div className='flex relative w-full h-full items-center justify-center text-7xl'>
                <VscCircleLargeFilled style={{ fill: 'purple' }} />
                <span className='absolute text-2xl font-semibold'>85</span>
            </div>
        </div>
        <div className='flex flex-row w-full h-1/5 items-center'>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Contrast Errors are issues in visibility for people with impared vision.
            </p>
        </div>
    </div>
);


export default ContrastErrors;