import { useState, useEffect } from "react";
import Issue from "./IssueC";
import { SubtypeState, usePageReportStore } from '../../../store/PageReportStore';
import { AiFillInfoCircle } from "react-icons/ai";

export default function IssueSubtype(subtype: SubtypeState) {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        setIsClicked(false);
    }, [subtype]);


    return (
        < div className="flex flex-col rounded-lg border w-full h-48 divide-y overflow-clip items-top justify-start">
            <button onClick={handleClick} className='flex flex-row w-full h-12 justify-top p-1 bg-[#F0F9FF]'>
                <div className='flex flex-row  h-full w-full justify-between overflow-x-clip '>
                    <div className='flex items-center justify-start w-5/6 overflow-x-clip'>
                        <div className='flex flex-col h-full w-full justify-start items-center'>
                            <div className='flex flex-row gap-1 h-full w-full justify-start mx-1 items-center'>
                                <h2 className='text-l font-semibold'>{subtype.id}</h2>
                                <AiFillInfoCircle style={{ color: '#F2994A' }} aria-label="deez nuts" />
                            </div>
                            <div className='flex items-center justify-start overflow-x-clip'>
                                <p className='text-xs font-extralight text-left text-gray-500 truncate'>{subtype.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/8 shrink-0 h-full p-1 justify-center items-center'>
                        <div className='flex w-full h-full border-2 bg-[#E5D0FF] rounded items-center justify-center p-1 '>
                            <span className='text-l font-semibold'>{subtype.count} </span>
                        </div>
                    </div>
                </div>
            </button>
            {isClicked ?
                <div className='relative flex flex-col mb-1 items-center justify-center overflow-clip overflow-y-auto'>
                    {subtype.selectors ?
                        <div className='flex flex-col overflow-y-clip overflow-x-clip scrollbar-hide w-full h-36'>
                            {subtype.selectors.map(
                                (selector: string, index: number) =>
                                    <Issue key={index} selector={selector} />
                            )}

                        </div>
                        : null}
                </div> : null
            }
        </div >
    );
} 