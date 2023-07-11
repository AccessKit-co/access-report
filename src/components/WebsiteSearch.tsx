import { useEffect, useRef, KeyboardEvent, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { usePageReportStore } from "../store/PageReportStore";
import { useWebsiteReportStore } from "../store/WebsiteReportStore";
import { useIssueStateSelectStore } from "../store/IssueStateSelectStore";
import axios from 'axios';

export const WebsiteSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const PageReport = usePageReportStore();
    const WebsiteReport = useWebsiteReportStore();
    const [isPage, setIsPage] = useState(false);
    const SelectedIssueStateSelect = useIssueStateSelectStore();

    // Whenever pageReport changes, this effect runs (debugging)
    useEffect(() => {
        console.log('PageReport changed:', PageReport);
        if (PageReport.url) {
            SelectedIssueStateSelect.setSelected("error");
        }
    }, [PageReport]);

    // Whenever websiteReport changes, this effect runs (debugging)
    useEffect(() => {
        console.log('WebsiteReport changed:', WebsiteReport);
    }, [WebsiteReport]);

    // Whenever SelectedIssueStateSelect changes, this effect runs (debugging)
    useEffect(() => {
        console.log('SelectedIssueStateSelect changed:', SelectedIssueStateSelect);
    }, [SelectedIssueStateSelect]);

    // update the pageReport to the homepage when the websiteReport is done loading
    useEffect(() => {
        if (!WebsiteReport.isLoading && Object.keys(WebsiteReport.pageReports).length > 0) {
            const homePageUrl = "https://" + WebsiteReport.rootUrl + "/";
            const homePageReport = WebsiteReport.pageReports[homePageUrl];

            if (homePageReport) {
                PageReport.setPageReport({
                    url: homePageUrl,
                    error: homePageReport.error,
                    structure: homePageReport.structure,
                    alert: homePageReport.alert,
                    feature: homePageReport.feature,
                    contrast: homePageReport.contrast,
                    aria: homePageReport.aria
                });
            }
            //if there is no homepage, set the pageReport to the first page in the pageReports array
            else if (Object.keys(WebsiteReport.pageReports).length > 0) {
                const newPageReport = WebsiteReport.pageReports[Object.keys(WebsiteReport.pageReports)[0]];

                PageReport.setPageReport({
                    url: newPageReport.url,
                    error: newPageReport.error,
                    structure: newPageReport.structure,
                    alert: newPageReport.alert,
                    feature: newPageReport.feature,
                    contrast: newPageReport.contrast,
                    aria: newPageReport.aria
                });
            }
        }
    }, [WebsiteReport.isLoading]);

    // When we click on the search bar
    const handleFocus = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "none";
        }
    };

    // When we exit the search bar
    const handleBlur = () => {
        if (clickPoint.current) {
            clickPoint.current.style.display = "block";
        }
    };

    // standardizing the format of the url
    const transformUrl = (url: string, path: boolean = true) => {
        // Remove the scheme (http://, https://) if present
        let transformed = url.replace(/^https?:\/\//, '');

        // Remove 'www.' if present
        transformed = transformed.replace(/^www\./, '');

        if (path) {
            // Remove any path or query parameters
            transformed = transformed.replace(/\/.*/, '');
        }

        return transformed;
    }

    // sending an WAVE API request on the server side to audit the page 
    const auditPage = async (pageurl: string) => {
        try {
            console.log("Auditing page:", pageurl);
            const response = await axios.get('/api/fetch-audit?url=' + pageurl); // fetch the audit from the server-side API call
            console.log("Response:", response);
            const data = response.data;

            console.log("Data:", data);
            WebsiteReport.addPageReport({ url: pageurl, error: data.error, structure: data.structure, alert: data.alert, feature: data.feature, contrast: data.contrast, aria: data.aria });
            console.log("WebsiteReport:", WebsiteReport);

        } catch (error) {
            console.log("Error:", error);
        }
    }

    // parsing for the sitemap.xml
    const parseSitemap = async (sitemapURL: string) => {
        try {
            const response = await axios.get('/api/fetch-sitemap?url=' + sitemapURL + '/sitemap.xml'); // fetch the sitemap server-side in order to avoid CORS issues

            if (response == null) {
                throw new Error("Sitemap not found");
            }

            // parse the XML test into an XML Document
            const parser = new DOMParser();
            return (parser.parseFromString(response.data, 'text/xml') as Document);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    // scan every website on this xml sitemap 
    const sitemapAudit = async (xml: Document) => {
        try {
            const urlList = xml.getElementsByTagName("url"); // Get the list of urls in this sitemap element

            WebsiteReport.setIsLoading(true);

            // loop over all the urls
            for (let i = 0; i < 2; i++) {

                // get the ith url from the sitemap and transform it to remove the scheme
                const pageurl = transformUrl(urlList[i].getElementsByTagName("loc")[0].textContent!.trim(), false);
                await auditPage(pageurl); //WAVE API audit
            }
            WebsiteReport.setIsLoading(false);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    // Handle the user pressing the enter key in the search bar
    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            WebsiteReport.setIsLoading(true);
            if (!isPage) {
                event.preventDefault(); // url that has been inputted
                const url = transformUrl(event.currentTarget.value);

                WebsiteReport.setRootUrl(url);
                WebsiteReport.setIsLoading(true);

                // fetch the xml sitemap
                const xml = await parseSitemap(url);

                // check if sitemap is a sitemapindex or a list of urls
                const sitemapIndex = (xml as Document).getElementsByTagName("sitemap");

                if (sitemapIndex.length > 0) {
                    console.log("Sitemap index found");

                    // loop through all the sitemaps in the sitemap index   
                    for (let i = 0; i < sitemapIndex.length; i++) {
                        // get the url of the sitemap and encode it to be used in the API call
                        const sitemapURL = encodeURIComponent(sitemapIndex[i].getElementsByTagName("loc")[0].textContent?.replace("https://www.", '') as string);

                        // fetch the xml sitemap
                        const xml = await parseSitemap(url);

                        await sitemapAudit(xml as Document);
                    }
                }

                // if it is not a sitemap index, it is a list of urls
                else {
                    console.log("Sitemap found");
                    await sitemapAudit(xml as Document);
                }

                WebsiteReport.setIsLoading(false);
            }

            // Only audits one page, the exact url entered in the WebsiteSearch bar
            else {
                event.preventDefault();
                const url = event.currentTarget.value;
                WebsiteReport.setIsLoading(true);

                WebsiteReport.setRootUrl(transformUrl(url)); // set the root url to the url without the path
                await auditPage(transformUrl(url, false)); // audit the page at the url with the path

                WebsiteReport.setIsLoading(false);
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
                        className="flex text-gray-900 text-xs items-center h-full w-full justify-center font-sans truncate border-none px-1"
                        placeholder="Search for your webpage..."
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="flex items-center justify-center border-2 bg-blue-500 hover:bg-blue-700 text-xs font-bold rounded m-1 " style={{ background: '#F0F9FF' }} onClick={() => { setIsPage(!isPage) }}>
                        Page
                    </button>
                </div>
            </div>
        </div >
    );
};