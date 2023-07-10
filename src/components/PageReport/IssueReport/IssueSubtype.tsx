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
        < div className="flex flex-col rounded-lg border-1.5 overflow-clip items-top justify-start bg-gray-50 w-full ">
            <button onClick={handleClick} className='flex flex-row w-full bg-[#F0F9FF] p-1'>
                <div className='flex flex-row  h-full w-full justify-between items-center '>
                    <div className='flex items-center justify-start w-5/6 '>
                        <div className='flex flex-col h-full w-full justify-start items-center text-clip'>
                            <div className='flex flex-row gap-1 h-full w-full justify-start mx-1 items-center'>
                                <h2 className='text-l font-semibold'>{subtype.id}</h2>
                                <AiFillInfoCircle style={{ color: '#F2994A' }} aria-label="deez nuts" />
                            </div>
                            <div className='flex items-center justify-start w-full '>
                                <p className='text-xs font-extralight text-left text-gray-500 truncate'>{subtype.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[3rem] h-[3rem] p-2 shrink-0 justify-center items-center'>
                        <div className='flex w-full h-full border rounded items-center justify-center bg-white'><span className='items-center  justify-center text-l text-center font-bold '> {subtype.count} </span>
                        </div>
                    </div>
                </div>
            </button>
            {isClicked ?
                <div className='flex flex-col items-top justify-start overflow-scroll scrollbar-hide my-1 w-full max-h-28'>
                    {subtype.selectors ?
                        <div className='flex flex-col items-top justify-start w-full gap-1 px-1'>
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