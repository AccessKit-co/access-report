
import { MdError } from 'react-icons/md';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { AiOutlineAim } from 'react-icons/ai';
import { MdShield } from 'react-icons/md';
import Errors from '../../components/Errors';
import ContrastErrors from '../../components/ContrastErrors';
import Alerts from '../../components/Alerts';
import StructuralErrors from '../../components/StructuralErrors';
import Score from '../../components/Score';
import Status from '../../components/Status';

const SiteOverallReport = () => (
    <div className="w-full grid md:grid-cols-4 gap-2 text-center justify-center">
        <div className='md:col-span-3'>
            <ContrastErrors />
        </div>


        <div className='md:col-span-1 flex flex-col gap-2'>
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