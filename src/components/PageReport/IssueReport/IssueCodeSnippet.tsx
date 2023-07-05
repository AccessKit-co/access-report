import { useState } from "react";
import { VscDebugBreakpointLog } from 'react-icons/vsc';

interface IssueProps {
    selector: string;
}

export default function IssueCodeSnippet({ selector }: IssueProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        < div className="flex flex-col">
            <button onClick={handleClick} className='flex flex-row h-8 justify-start items-center overflow-clip mx-1 border rounded bg-gray-200'>
                <div className='flex w-1/8 h-full justify-start p-1'>
                    <VscDebugBreakpointLog size='0.6rem' />
                </div>
                <div className='flex flex-col w-6/8 justify-start truncate h-full'>
                    <p className='text-xs font-light h-full text-left  truncate'>{selector}</p>
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