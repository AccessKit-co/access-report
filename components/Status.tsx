import { AiOutlineAim } from 'react-icons/ai';
import { MdShield } from 'react-icons/md';

const Status = () => (
    <div
        className="flex flex-col rounded-lg border px-5 py-4">
        <div className='flex flex-row w-full h-1/4 items-center justify-center'>
            <div className='flex h-full justify-start mx-1 items-center'>
                <h2 className='text-xl font-semibold '>Status</h2>
            </div>
        </div>
        <div className='flex w-full h-3/4 m-1 items-center justify-center rounded-lg border bg-slate-400'>
            <div className='bg-sky-500'>
                Compliant
            </div>
        </div>
    </div>
);

export default Status;