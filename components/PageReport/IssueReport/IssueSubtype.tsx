import { useState } from "react";
import Issue from "./IssueC";

export default function IssueSubtype() {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        < div className="flex flex-col rounded-lg border bg-red-500 w-full h-48">
            <button onClick={handleClick} className='flex flex-row w-full h-14 justify-top'>
                <div className='flex flex-row rounded-lg border bg-gray-200 w-full justify-between transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30 overflow-x-clip'>
                    <div className='flex items-center justify-start w-5/6 overflow-x-clip'>
                        <div className='flex flex-row m-2 justify-start items-center'>
                            <div className='flex h-full justify-start mx-1 items-center'>
                                <h2 className='text-xl font-semibold'>Type</h2>
                            </div>
                            <div className='flex h-full justify-start mx-1 items-center'>
                                <h2 className='text-xl font-light'> | </h2>
                            </div>
                            <div className='flex items-center justify-start overflow-x-clip'>
                                <p className='text-sm font-light text-left truncate'>
                                    This error occurs when there is missing alt-text on the page
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/6 justify-center items-center flex-shrink-0'>
                        <div className='flex rounded-lg border bg-gray-300 m-2 w-full items-center justify-center'>
                            <div className='flex h-full m-1 items-center justify-between'>
                                <div className='flex h-full items-center justify-start mx-1'>
                                    <p className='text-xl font-bold'>2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>

            {/** List of the actual issues of this specific type, shown when clicked */}

            {isClicked ?
                <div className='relative flex flex-auto m-1 items-center justify-center h-48 '>
                    <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip scrollbar-hide w-full'>
                        <Issue text="issue 1" />
                        <Issue text="issue 2" />
                        <Issue text="issue 3" />
                        <Issue text="issue 4" />
                        <Issue text="issue 5" />

                        <Issue text="issue 5" />

                        <Issue text="issue 5" />

                        <Issue text="issue 5" />
                    </div>
                </div> : null}
        </div>
    );
}