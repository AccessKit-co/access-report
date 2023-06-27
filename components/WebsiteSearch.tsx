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

    const transformUrl = (url: string) => {
        // Remove the scheme (http://, https://) if present
        let transformed = url.replace(/^https?:\/\//, '');

        // Remove 'www.' if present
        transformed = transformed.replace(/^www\./, '');

        // Remove any path or query parameters
        transformed = transformed.replace(/\/.*/, '');

        return transformed;
    }

    // Handle the user pressing the enter key in the search bar
    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
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
                    console.log(sitemapIndex);
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

                            // loop over all the urls in the sitemap and run the accessibility API on them. Limited to 1 for now to text and not overuse credits
                            for (let j = 0; j < 1; j++) {
                                const urlElement = urlList[j];
                                const locElement = urlElement.getElementsByTagName("loc")[0];
                                console.log(locElement.textContent!.trim());
                                try {
                                    //const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${locElement.textContent!.trim()}`);
                                    const response = await APIcall.json();

                                    WebsiteReport.addPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

                                } catch (error) {
                                    console.log("Error:", error);
                                }
                            }
                        }

                        WebsiteReport.setIsLoading(false);
                    }
                    else { // if it is not a sitemap index, it is a list of urls

                        // Get the list of urls
                        const urlList = xml.getElementsByTagName("url");

                        // This is a hacky way to get the first 3 urls, still have to work out the async issues
                        for (let i = 0; i < 0; i++) {
                            const urlElement = urlList[i];
                            const locElement = urlElement.getElementsByTagName("loc")[0];
                            try {
                                //const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${locElement.textContent!.trim()}`);
                                const response = await APIcall.json();

                                WebsiteReport.addPageReport({ url: response.statistics.pageurl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

                            } catch (error) {
                                console.log("Error:", error);
                            }
                        }
                        WebsiteReport.setIsLoading(false); //stop loading animation
                    }
                } catch (error) {
                    console.log("Error:", error);
                }
            }
            else {
                event.preventDefault();
                const untransformedUrl = event.currentTarget.value;
                const url = transformUrl(untransformedUrl);
                console.log(untransformedUrl)
                WebsiteReport.setIsLoading(true); //start loading animation

                try {
                    const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${url}`);
                    const response = await APIcall.json();

                    WebsiteReport.setRootUrl(url);
                    WebsiteReport.addPageReport({ url: untransformedUrl, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

                } catch (error) {
                    console.log("Error:", error);
                }

                WebsiteReport.setIsLoading(false); //stop loading animationin

                console.log(PageReport.url.replace("https://" + WebsiteReport.rootUrl + "/", ""));
            }
        }

    };

    //function to scan a specific page and add it to the pageReports dictionary
    void async function waveScan(url: string) {
        try {
            const APIcall = await fetch(`https://wave.webaim.org/api/request?key=pdRy5s8x3220&reporttype=4&url=${url}`);
            const response = await APIcall.json();

            WebsiteReport.addPageReport({ url: url, error: response.categories.error, structure: response.categories.structure, alert: response.categories.alert, feature: response.categories.feature, contrast: response.categories.contrast, aria: response.categories.aria });

        } catch (error) {
            console.log("Error:", error);
        }
    }

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