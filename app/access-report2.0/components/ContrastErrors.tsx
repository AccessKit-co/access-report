import React from 'react';
import { ImContrast } from 'react-icons/im';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const ContrastErrors = () => (
    <div className="h-full group rounded-lg border px-5 py-4 transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30 overflow-hidden">
        <div className='flex flex-row w-full h-1/5 items-center justify-center'>
            <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1'>
                <ImContrast style={{ fill: 'fuchsia' }} />
            </div>
            <div className='flex h-full justify-start ml-1'>
                <h2 className='text-xl font-semibold'> Contrast Errors</h2>
            </div>
        </div>
        <div className='flex flex-row w-full h-3/5 items-center justify-center'>
            <div className='flex relative w-full h-full items-center justify-center'>
                <VscCircleLargeFilled className='text-7xl' style={{ fill: 'fuchsia' }} />
                <span className='absolute text-2xl font-semibold text-white'>85</span>
            </div>
        </div>
        <div className='flex flex-row w-full h-1/5 items-center'>
            <div className='max-w-[10ch]'>
                <p className={`m-0 text-sm opacity-50 text-clip`}>
                    Issues in visibility for people with impared vision.
                </p>
            </div>
        </div>
    </div>
);


export default ContrastErrors;