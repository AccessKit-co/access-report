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
        < div className="flex flex-col w-full h-full">
            <button onClick={handleClick} className='flex flex-row w-full min-w-[48rem] shrink-0 h-fit justify-top overflow-clip'>
                <VscDebugBreakpointLog className='flex w-1/8 h-full p-1 justify-center items-center text-3xl' />
                <div className='flex w-7/8 justify-start overflow-x-clip'>
                    <p className='text-xs font-light text-left truncate'>{selector}</p>
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