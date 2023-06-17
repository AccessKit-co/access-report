"use client";

import { useEffect, useRef, KeyboardEvent } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { usePageReportStore } from "../store/PageReportStore";
import { useWebsiteReportStore } from "../store/WebsiteReportStore";

export const WebsiteSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const PageReport = usePageReportStore();
    const WebsiteReport = useWebsiteReportStore();

    useEffect(() => {
        console.log('PageReport changed:', PageReport);
    }, [PageReport]); // Whenever pageReport changes, this effect runs

    useEffect(() => {
        console.log('WebsiteReport changed:', WebsiteReport);
    }, [WebsiteReport]); // Whenever websiteReport changes, this effect runs

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

    const transformUrl = (url: string) => {
        // Remove the scheme (http://, https://) if present
        let transformed = url.replace(/^https?:\/\//, '');

        // Remove 'www.' if present
        transformed = transformed.replace(/^www\./, '');

        // Remove any path or query parameters
        transformed = transformed.replace(/\/.*/, '');

        return transformed;
    }


    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const url = transformUrl(event.currentTarget.value);
            console.log(url)

            try {
                console.log(url)
                const response = await fetch(`http://${url}/sitemap.xml`);
                const data = await response.text();

                // parse the XML test into an XML Document
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, 'text/xml');
                console.log(xml);

                // Get the first <url> element
                const urlList = xml.getElementsByTagName("url");

                WebsiteReport.setRootUrl(url);

                // This is a hacky way to get the first 3 urls, still have to work out the async issues
                for (let i = 0; i < 3; i++) {
                    const urlElement = urlList[i];
                    const locElement = urlElement.getElementsByTagName("loc")[0];
                    try {
                        const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${locElement.textContent!.trim()}`);
                        const response = await APIcall.json();
                        PageReport.setPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

                        WebsiteReport.addPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

                    } catch (error) {
                        console.log("Error:", error);
                    }
                }

                //Absolutely disgusting, but it works, please fix this before I puke
                PageReport.setPageReport({ url: WebsiteReport.pageReports[("https://" + WebsiteReport.rootUrl + "/")].url, error: WebsiteReport.pageReports[("https://" + WebsiteReport.rootUrl + "/")].error, structure: WebsiteReport.pageReports[("https://" + WebsiteReport.rootUrl + "/")].structure, alert: WebsiteReport.pageReports[("https://" + WebsiteReport.rootUrl + "/")].alert, feature: WebsiteReport.pageReports[("https://" + WebsiteReport.rootUrl + "/")].feature, contrast: WebsiteReport.pageReports[("https://" + WebsiteReport.rootUrl + "/")].contrast, aria: WebsiteReport.pageReports[("https://" + WebsiteReport.rootUrl + "/")].aria });

            } catch (error) {
                console.log("Error:", error);
            }
        }
    };

    return (
        <div className="items-center flex flex-col justify-center w-full h-8 ">
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