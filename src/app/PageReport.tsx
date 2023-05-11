import React from 'react';
import { MdError } from 'react-icons/md';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import Errors from '../../components/Errors';
import ContrastErrors from '../../components/ContrastErrors';
import Alerts from '../../components/Alerts';
import StructuralErrors from '../../components/StructuralErrors';

const PageReport = () => (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 text-center justify-center">
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
                    <span className='absolute text-2xl font-semibold text-white'>72</span>
                </div>
            </div>
            <div className='flex flex-row w-full h-1/5 items-center'>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Issues in compliance with the code.
                </p>
            </div>
        </div>
        <ContrastErrors />
        <Alerts />
        <StructuralErrors />
    </div>
);

export default PageReport;