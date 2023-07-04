"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { usePageReportStore } from "../store/PageReportStore";
import { useIssueStateSelectStore } from "../store/IssueStateSelectStore";
import { useWebsiteReportStore } from "../store/WebsiteReportStore";

export const URLSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const PageReport = usePageReportStore();
    const IssueState = useIssueStateSelectStore();
    const WebsiteReportStore = useWebsiteReportStore();


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

    const query = async (url: string, n: number) => {
        try {
            console.log("query" + n)
            console.log(`${url}`)

            const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${url}`);
            const response = await APIcall.json();
            console.log(response);
            console.log(url);
            PageReport.setPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });
            console.log(PageReport);

        } catch (error) {
            console.log("Error:", error);
        }

    };

    const query2 = async (url: string, n: number) => {
        try {
            const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${url}`);
            const response = await APIcall.json();
            console.log(response);
            console.log(url);
            PageReport.setPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });
            IssueState.setSelected("error");

            {/*
            WebsiteReportStore.addPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

            console.log(WebsiteReportStore.pageReports)
        **/}
            console.log(PageReport);
            console.log(PageReport.url);




        } catch (error) {
            console.log("Error:", error);
        }
    }

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const url = event.currentTarget.value;
            try {
                const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${url}`);
                const response = await APIcall.json();
                console.log(response);
                console.log(url);
                PageReport.setPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });
                IssueState.setSelected("error");
                console.log(PageReport)

                WebsiteReportStore.addPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

                console.log(WebsiteReportStore.pageReports)

                console.log(PageReport);
                console.log(PageReport.url);




            } catch (error) {
                console.log("Error:", error);
            }
        }
    };

    return (
        <div className="items-center flex flex-col justify-center w-full h-full ">
            <div className="flex w-full h-full rounded border-2 justify-center items-center ">
                <div className="flex flex-row items-center justify-start w-full h-full ">
                    <div className="flex h-full items-center justify-center" ref={clickPoint}>
                        <AiOutlineSearch className=" h-full text-xl " />
                    </div>
                    <input
                        type="text"
                        className="flex text-gray-900 text-xs items-center h-full w-full justify-center font-sans truncate border-none"
                        placeholder="Search for your webpage..."
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </div >

    );
};

