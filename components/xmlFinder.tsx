"use client";

import { useRef, KeyboardEvent } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useWebsiteReportStore, WebsiteReport } from "../store/WebsiteReportStore";

export const XMLFinder = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
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
            console.log(url)
            const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${url}`);
            const query = await APIcall.json();
            console.log(query);
            WebsiteReportStore.addSiteReport({ url: url, error: query.categories.error, structure: query.categories.structure, alert: query.categories.alert, feature: query.categories.feature, contrast: query.categories.contrast, aria: query.categories.aria });
            console.log(WebsiteReportStore.siteReports)

        } catch (error) {
            console.log("Error:", error);
        }

    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const url = event.currentTarget.value;
            try {
                console.log(url)
                const response = await fetch(`${url}/sitemap.xml`);
                const data = await response.text();

                // parse the XML test into an XML Document
                const parser = new DOMParser();
                const xml = parser.parseFromString(data, 'text/xml');
                console.log(xml);

                // Get the first <url> element
                const urlList = xml.getElementsByTagName("url");
                for (let i = 0; i < 10; i++) {
                    const urlElement = urlList[i];
                    const locElement = urlElement.getElementsByTagName("loc")[0];
                    console.log(locElement.textContent);
                    await query(locElement.textContent!.trim(), i);
                }
                console.log(WebsiteReportStore.siteReports)
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