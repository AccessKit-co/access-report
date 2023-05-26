"use client";

import { useRef, KeyboardEvent } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { usePageReportStore } from "../store/PageReportStore";
import { useIssueStateSelectStore } from "../store/IssueStateSelectStore";
import { Page } from "puppeteer";

export const URLSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const PageReport = usePageReportStore();
    const IssueState = useIssueStateSelectStore();


    const handleFocus = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "none";
        }
    };

    const handleBlur = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "block";
        }
    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const url = event.currentTarget.value;
            try {
                const query = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${url}`);
                const response = await query.json();
                console.log(response);
                PageReport.setPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });
                IssueState.setSelected("error");


            } catch (error) {
                console.log("Error:", error);
            }
        }
    };

    return (
        <div className="items-center flex justify-center w-full h-full mb-4">
            <div className="relative flex flex-row w-full h-full rounded-lg border border-gray-200">
                <div className="w-1/12 left-3 items-center" ref={clickPoint}>
                    <AiOutlineSearch className="text-xl text-gray-600" />
                </div>
                <input
                    type="text"
                    className="block p-4 pl-10 w-full h-full text-gray-900 bg-gray-50 focus:pl-3 mx-2"
                    placeholder="Search for your website..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

