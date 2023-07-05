"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { usePageReportStore } from "../store/PageReportStore";
import { useWebsiteReportStore } from "../store/WebsiteReportStore";

export const PageSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const PageReport = usePageReportStore();
    const WebsiteReportStore = useWebsiteReportStore();
    const [path, setPath] = useState<string>("");

    // Whenever pageReport changes, this effect runs
    useEffect(() => {
        if (PageReport.url) {
            setPath(PageReport.url.replace(WebsiteReportStore.rootUrl + "/", ""));
        }
    }, [PageReport, WebsiteReportStore]);

    // When we click on the search bar
    const handleFocus = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "none";
        }
    };

    // When we click off the search bar
    const handleBlur = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "block";
        }
    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const url = WebsiteReportStore.rootUrl + "/" + event.currentTarget.value //WebsiteReportStore.rootUrl + event.currentTarget.value;
            console.log("URL:", url);
            try {
                // I have to add an error message when the url is not found within pageReports
                PageReport.setPageReport({ url: url, error: WebsiteReportStore.pageReports[url].error, structure: WebsiteReportStore.pageReports[url].structure, alert: WebsiteReportStore.pageReports[url].alert, feature: WebsiteReportStore.pageReports[url].feature, contrast: WebsiteReportStore.pageReports[url].contrast, aria: WebsiteReportStore.pageReports[url].aria });
            } catch (error) {
                console.log("Error:", error);
            }
        }
    };

    return (
        <div className="items-center justify-start w-[40rem] h-full ">
            <div className="flex w-full h-full rounded   justify-center items-center px-2">
                <div className="flex flex-row items-center justify-start w-full h-full mx-1">
                    <div className="flex h-full items-center justify-start text-sm font-semibold flex-nowrap" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                        {WebsiteReportStore.rootUrl ? WebsiteReportStore.rootUrl + "/" : "No URL Selected"}
                    </div>
                    {WebsiteReportStore.rootUrl ? <input
                        type="text"
                        className="flex text-xs items-center h-full justify-center font-sans truncate border-2  rounded"
                        style={{ backgroundColor: "gray-100", color: "#616161" }}
                        placeholder={path}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                    /> : ''}
                </div>
            </div>
        </div >

    );
};

