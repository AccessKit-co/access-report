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
        // Button expands to show full selector on click
        <button onClick={handleClick} className={isClicked ? "flex flex-col bg-gray-100 rounded border w-full  hover:bg-gray-300" : "flex flex-col h-6 bg-gray-200 rounded border w-full hover:bg-gray-300"}>

            <div className="flex flex-row h-full w-full p-1">
                <p className={isClicked ? "text-xs font-extralight font-mono h-full w-full text-left" : "text-xs font-light font-mono h-full w-full text-left truncate"}>{selector}</p>
            </div>

        </button>

    );
}