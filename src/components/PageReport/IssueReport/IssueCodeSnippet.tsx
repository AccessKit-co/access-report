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
        <div className="flex flex-col h-8 bg-gray-200 rounded border-1.5 overflow-x-clip text-clip w-full">
            <div className='flex flex-row h-full justify-between overflow-x-clip text-clip truncate'>
                <p className='text-xs font-light h-full text-left truncate'>{selector}</p>
            </div>
        </div>

    );
}