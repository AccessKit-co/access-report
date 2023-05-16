import { MdError, MdShield } from 'react-icons/md';
import { ImContrast, ImCross } from 'react-icons/im';
import { IoConstructSharp } from 'react-icons/io5';
import { AiFillCheckCircle, AiOutlineAim } from 'react-icons/ai';
import GeneralReport from './GeneralReport';
import PageStatus from './PageStatus';


const OverallSiteReview = () => (
    <div className="w-full grid md:grid-cols-4 gap-2 text-center justify-center mb-4">
        <div className='md:col-span-3'>
            <GeneralReport />
        </div>

        <div className='md:col-span-1 flex flex-col gap-2 '>
            <PageStatus />
        </div>
    </div>
);
export default OverallSiteReview;
