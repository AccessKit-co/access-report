import { AiOutlineAim } from 'react-icons/ai';
import { MdShield } from 'react-icons/md';

const Score = () => (
    <div
        className="group rounded-lg border px-5 py-4 transition-colors hover:dark:bg-neutral-800/30 h-3/4" >
        <div className='flex flex-row w-full h-1/5 items-center justify-center' >
            <div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 mr-1' >
                <AiOutlineAim style={{ fill: 'green' }} />
            </div>
            < div className='flex h-full justify-start mx-1 items-center' >
                <h2 className='text-xl font-semibold ' > Overall Score </h2>
            </div>
            < div className='flex h-full items-center justify-center text-2xl group-hover:scale-125 ml-1' >
                <AiOutlineAim style={{ fill: 'green' }} />
            </div>
        </div>
        <div className='flex flex-row w-full h-3/5 items-center justify-center' >
            <div className='flex relative w-full h-full items-center justify-center text-7xl' >
                <MdShield style={{ fill: 'green' }} />
                < span className='absolute text-2xl font-semibold text-white' > 72 </span>
            </div>
        </div>
        < div className='flex flex-row w-full h-1/5 items-center justify-center' >
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                A score of less than 85 is at risk of legal action.
            </p>
        </div>
    </div>
);

export default Score;