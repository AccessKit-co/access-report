"use client";

import { useState, useRef, KeyboardEvent } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { usePageReportStore, PageReportState } from "../store/PageReportStore";
import { useIssueStateSelectStore } from "../store/IssueStateSelectStore";
import { useWebsiteReportStore } from "../store/WebsiteReportStore";

export const PageSearch = () => {
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

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const url = event.currentTarget.value //WebsiteReportStore.rootUrl + event.currentTarget.value;
            console.log("3")
            console.log(url);
            console.log("4")
            try {
                // I have to add an error message when the url is not foun within pageReports
                console.log("1")
                console.log(WebsiteReportStore.pageReports[url])
                //const SelectedPage: PageReportState = (WebsiteReportStore.findPageReportByUrl(url) as PageReportState);
                console.log("2")
                console.log(WebsiteReportStore.pageReports)
                console.log("5")

                //PageReport.setPageReport(WebsiteReportStore.findPageReportByUrl(url) as PageReportState);
                console.log("6")
                console.log(PageReport)
                console.log("7")
                PageReport.setPageReport({ url: url, error: WebsiteReportStore.pageReports[url].error, structure: WebsiteReportStore.pageReports[url].structure, alert: WebsiteReportStore.pageReports[url].alert, feature: WebsiteReportStore.pageReports[url].feature, contrast: WebsiteReportStore.pageReports[url].contrast, aria: WebsiteReportStore.pageReports[url].aria });
                console.log("8")




            } catch (error) {
                console.log("Error:", error);
            }
        }
    };

    return (
        <div className="items-center flex flex-col justify-center w-[20rem] h-full ">
            <div className="flex w-full h-full rounded border-2 justify-center items-center px-2">
                <div className="flex flex-row items-center justify-start w-full h-full  ">
                    <div className="flex h-full items-center justify-center" ref={clickPoint}>
                        <AiOutlineSearch className=" h-full text-xl " />
                    </div>
                    <input
                        type="text"
                        className="flex text-xs items-center h-full w-full justify-center font-sans truncate border-none"
                        placeholder={PageReport.url}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
        </div >

    );
};

