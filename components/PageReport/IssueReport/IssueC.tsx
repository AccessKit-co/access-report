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
        < div className="flex flex-col w-full h-full border">
            <button onClick={handleClick} h-12 className='flex flex-row w-full min-w-[48rem] justify-start overflow-clip'>
                <div className='flex w-1/8 h-full p-1 justify-center items-center text-l'>
                    <VscDebugBreakpointLog className='flex w-1/6 h-full p-1 justify-center' />
                </div>
                <div className='flex w-3/4 h-full justify-start overflow-clip'>
                    <p className='text-xs font-light text-left truncate'>{selector}</p>
                </div>
                <div className='flex w-1/8 shrink-0 h-full p-1 justify-center items-center'>
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