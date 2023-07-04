import { useState } from "react";
import { VscDebugBreakpointLog } from 'react-icons/vsc';

interface IssueProps {
    selector: string;
}

export default function Issue({ selector }: IssueProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        < div className="flex flex-col w-full border-t-1 border">
            <button onClick={handleClick} className='flex flex-row w-full h-10 min-w-[48rem] justify-start items-center overflow-clip p-1'>
                <div className='flex w-1/8 h-full justify-start p-1'>
                    <VscDebugBreakpointLog size='0.6rem' />
                </div>
                <div className='flex flex-col w-6/8 justify-start truncate h-full'>
                    <p className='text-xs font-light h-full text-left truncate'>{selector}</p>
                </div>
                <div className='flex w-1/8 shrink-0 h-full justify-center items-center p-1'>
                    <div className='flex w-[4rem] shrink-0 border-2 bg-gray-200 rounded items-center justify-center px-1'>
                        <p className='text-xs font-light'>Show</p>
                    </div>
                </div>

            </button>
            {/**  Image  
            {isClicked ?
                <div className='relative flex flex-auto m-1 items-center justify-center h-50 '>
                    <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip scrollbar-hide w-full'>

                    </div>
                </div> : null
        }
        */}
        </div >
    );
}