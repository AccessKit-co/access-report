import { useState, useEffect } from "react";
import IssueCodeSnippet from "./IssueCodeSnippet";
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
        < div className="flex flex-col rounded-lg overflow-hidden items-top justify-start bg-gray-50 w-full">
            <button onClick={handleClick} className='flex flex-row w-full justify-top bg-[#F0F9FF] p-1 '>
                <div className='flex flex-row h-full w-full justify-between '>
                    <div className='flex items-center justify-start w-5/6 overflow-hidden'>
                        <div className='flex flex-col h-full w-full justify-start items-center'>
                            <div className='flex flex-row gap-1 h-full w-full justify-start mx-1 items-center'>
                                <h2 className='text-l font-semibold'>{subtype.id}</h2>
                                <AiFillInfoCircle style={{ color: '#F2994A' }} aria-label="deez nuts" />
                            </div>
                            <div className='flex items-center justify-start w-full overflow-hidden'>
                                <p className='text-xs font-extralight text-left text-gray-500  truncate whitespace-nowrap'>akjfiaushf
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/6 shrink-0 h-full p-1 justify-center items-center '>
                        <div className='flex w-full h-full border-2 bg-[#E5D0FF] rounded items-center justify-center p-1 '>
                            <span className='text-l font-semibold'>{subtype.count} </span>
                        </div>
                    </div>
                </div>
            </button>
            {isClicked ?
                <div className='flex flex-col items-center justify-center overflow-y-auto scrollbar-hide my-1 w-full'>
                    {subtype.selectors ?
                        <div className='flex flex-col w-full max-h-36 gap-1'>
                            {subtype.selectors.map(
                                (selector: string, index: number) =>
                                    <IssueCodeSnippet key={index} selector={selector} />
                            )}

                        </div>
                        : null}
                </div> : null
            }
        </div >
    );
} 