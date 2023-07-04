import { useEffect, useRef, KeyboardEvent, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { usePageReportStore } from "../store/PageReportStore";
import { useWebsiteReportStore } from "../store/WebsiteReportStore";
import { useIssueStateSelectStore } from "../store/IssueStateSelectStore";
import axios from 'axios'
import { encode } from "punycode";

export const WebsiteSearch = () => {
    const clickPoint = useRef<HTMLDivElement>(null);
    const PageReport = usePageReportStore();
    const WebsiteReport = useWebsiteReportStore();
    const [isPage, setIsPage] = useState(false);
    const IssueStateSelect = useIssueStateSelectStore();

    // Whenever pageReport changes, this effect runs (debugging)
    useEffect(() => {
        console.log('PageReport changed:', PageReport);
        if (PageReport.url) {
            IssueStateSelect.setSelected("error");
        }
    }, [PageReport]);

    // Whenever websiteReport changes, this effect runs (debugging)
    useEffect(() => {
        console.log('WebsiteReport changed:', WebsiteReport);
    }, [WebsiteReport]);

    // Whenever issueStateSelect changes, this effect runs (debugging)
    useEffect(() => {
        console.log('IssueStateSelect changed:', IssueStateSelect);
    }, [IssueStateSelect]);

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
                const newPageReport = WebsiteReport.pageReports[Object.keys(WebsiteReport.pageReports)[0]] //hackiest hack ever

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

    // print the status of isPage when it changes (debugging)
    useEffect(() => {
        console.log('isPage changed:', isPage);
    }, [isPage]);



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
            const response = await axios.get('/api/fetch-audit?url=' + pageurl); // fetch the audit from the server-side API call
            const data = response.data;

            WebsiteReport.addPageReport({ url: pageurl, error: data.error, structure: data.structure, alert: data.alert, feature: data.feature, contrast: data.contrast, aria: data.aria });

        } catch (error) {
            console.log("Error:", error);
        }
    }


    // Handle the user pressing the enter key in the search bar
    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            WebsiteReport.setIsLoading(true);
            if (!isPage) {
                event.preventDefault();
                const url = transformUrl(event.currentTarget.value);
                try {
                    const response = await axios.get('/api/fetch-sitemap?url=' + url + '/sitemap.xml');
                    console.log(response);
                    if (response == null) {
                        throw new Error("Sitemap not found");
                    }

                    // parse the XML test into an XML Document
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(response.data, 'text/xml');
                    console.log(xml);

                    WebsiteReport.setRootUrl(url);

                    //start loading animation
                    WebsiteReport.setIsLoading(true);

                    // check if this sitemap is a sitemapindex or a list of urls
                    const sitemapIndex = xml.getElementsByTagName("sitemap");
                    if (sitemapIndex.length > 0) {
                        console.log("Sitemap index found");

                        // loop through all the sitemaps in the sitemap index   
                        for (let i = 0; i < sitemapIndex.length; i++) {
                            //the API call already does this
                            const sitemapURL = sitemapIndex[i].getElementsByTagName("loc")[0].textContent?.replace("https://www.", '')
                            const encodedSitemapURL = encodeURIComponent(sitemapURL as string); // encode the url to be used in the API call, to not have issues with special characters

                            const response = await axios.get('/api/fetch-sitemap?url=' + encodedSitemapURL); // fetch the sitemap

                            if (response == null) {
                                throw new Error("Sitemap not found");
                            }

                            // parse the XML test into an XML Document
                            const parser = new DOMParser();
                            const xml = parser.parseFromString(response.data, 'text/xml');
                            console.log(xml);

                            // Get the list of urls in this sitemap element
                            const urlList = xml.getElementsByTagName("url");
                            console.log(urlList);

                            // loop over all the urls in the sitemap and run the accessibility API on them
                            for (let j = 0; j < 1; j++) {
                                // get the jth url from the sitemap and transform it to remove the scheme
                                const pageurl = transformUrl(urlList[j].getElementsByTagName("loc")[0].textContent!.trim(), false);

                                await auditPage(pageurl);
                            }
                        }

                        WebsiteReport.setIsLoading(false);
                    }
                    else { // if it is not a sitemap index, it is a list of urls

                        console.log("Sitemap found");
                        const urlList = xml.getElementsByTagName("url"); // Get the list of urls in this sitemap element

                        WebsiteReport.setIsLoading(true);

                        // loop over all the urls in the sitemap and run the accessibility API on them
                        for (let i = 0; i < 2; i++) {

                            // get the ith url from the sitemap and transform it to remove the scheme
                            const pageurl = transformUrl(urlList[i].getElementsByTagName("loc")[0].textContent!.trim(), false);


                            await auditPage(pageurl);
                        }
                        WebsiteReport.setIsLoading(false);
                    }
                } catch (error) {
                    console.log("Error:", error);
                }
            }
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
                        className="flex text-gray-900 text-xs items-center h-full w-full justify-center font-sans truncate border-none"
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