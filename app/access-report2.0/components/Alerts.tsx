import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const Alerts = () => (
    <div
        className="overflow-hidden group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <div className='flex flex-row w-full h-1/5 items-center justify-center space-x-2'>
            <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-2'>
                <FiAlertTriangle style={{ color: 'olive' }} />
            </div>
            <div className='flex h-full justify-start ml-1 items-center'>
                <h2 className='text-xl font-semibold'> Alerts </h2>
            </div>
        </div>
        <div className='flex flex-row w-full h-3/5 items-center justify-center'>
            <div className='flex relative w-full h-full items-center justify-center text-7xl'>
                <VscCircleLargeFilled style={{ fill: 'olive' }} />
                <span className='absolute text-2xl font-semibold'>43</span>
            </div>
        </div>
        <div className='flex flex-row w-full h-1/5 items-center'>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Possible problems in the code.
            </p>
        </div>
    </div>
);

export default Alerts;