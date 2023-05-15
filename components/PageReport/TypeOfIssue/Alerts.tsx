import { FiAlertTriangle } from 'react-icons/fi';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const Alerts = () => (
    <div
        className="group rounded-lg border px-5 py-4 transition-colors hover:scale-110 hover:border-gray-300 hover:dark:bg-neutral-800/30">
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
                <span className='absolute text-2xl font-semibold text-white'>43</span>
            </div>
        </div>
        <div className='flex flex-row w-full h-1/5 items-center justify-center'>
            <p className={`m-0 text-sm opacity-50`}>
                Possible problems in the code.
            </p>
        </div>
    </div>
);

export default Alerts;