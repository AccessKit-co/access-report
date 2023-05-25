import { useState } from "react";
import Issue from "./IssueC";
import { SubtypeState, usePageReportStore } from '../../../store/PageReportStore';

export default function IssueSubtype(subtype: SubtypeState) {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const PageReport = usePageReportStore();

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        < div className="flex flex-col rounded-lg border bg-gray-100 w-full h-48">
            <button onClick={handleClick} className='flex flex-row w-full h-12 justify-top'>
                <div className='flex flex-row rounded-lg border bg-gray-200 w-full justify-between transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30 overflow-x-clip'>
                    <div className='flex items-center justify-start w-5/6 overflow-x-clip'>
                        <div className='flex flex-row m-2 gitjustify-start items-center'>
                            <div className='flex h-full justify-start mx-1 items-center'>
                                <h2 className='text-xl font-semibold'>{subtype.id}</h2>
                            </div>
                            <div className='flex h-full justify-start mx-1 items-center'>
                                <h2 className='text-xl font-light'> | </h2>
                            </div>
                            <div className='flex items-center justify-start overflow-x-clip'>
                                <p className='text-sm font-light text-left truncate'>{subtype.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/6 justify-center items-center flex-shrink-0'>
                        <div className='flex rounded-lg border bg-gray-300 m-2 w-full items-center justify-center'>
                            <div className='flex h-full m-1 items-center justify-between'>
                                <div className='flex h-full items-center justify-start mx-1'>
                                    <p className='text-xl font-bold'>{subtype.count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
            {isClicked ?
                <div className='relative flex flex-auto m-1 items-center justify-center h-36 '>
                    {subtype.selectors ?
                        <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip scrollbar-hide w-full'>
                            {subtype.selectors.map(
                                (selector: string, index: number) =>
                                    <Issue key={index} selector={selector} />
                            )}

                        </div>
                        : []}
                </div> : null
            }
        </div >
    );
} 