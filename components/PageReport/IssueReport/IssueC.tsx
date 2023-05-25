import { useState } from "react";

interface IssueProps {
    selector: string;
}

export default function Issue({ selector }: IssueProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        < div className="flex flex-col rounded-lg border bg-gray-100 w-full h-20">
            <button onClick={handleClick} className='flex flex-row w-full h-8 justify-top'>
                <div className='flex flex-row rounded-lg border bg-gray-200 w-full justify-start transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30 overflow-x-clip'>
                    <p className='text-xs font-light text-left truncate'>{selector}</p>
                </div>
            </button>
            {isClicked ?
                <div className='relative flex flex-auto m-1 items-center justify-center h-50 '>
                    <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip scrollbar-hide w-full'>
                        {/**  Image  */}

                    </div>
                </div> : null
            }
        </div >
    );
}