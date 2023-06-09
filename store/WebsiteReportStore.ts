import { create } from 'zustand';
import { PageReportState } from './PageReportStore';

{/** Type for structuring the data gotten from a website scan */ }
export type WebsiteReport = {
    rootUrl: string;
    xmlSiteMap: string[];
    status: boolean;
    pageReports: PageReportState[];
    totalErrors: number;
    totalContrasts: number;
    totalAlerts: number;
    totalFeatures: number;
    totalStructures: number;
    totalArias: number;
    averageErrors: number;
    averageContrasts: number;
    averageAlerts: number;
    averageFeatures: number;
    averageStructures: number;
    averageArias: number;
};

{/** Type with setter functions */ }
export type WebsiteReportStore = WebsiteReport & {
    setRootUrl: (text: string) => void;
    setXmlSiteMap: (text: string[]) => void;
    setStatus: (status: boolean) => void;
    setPageReports: (pageReports: PageReportState[]) => void;
    addPageReport: (pageReport: PageReportState) => void;
    setTotalErrors: (totalErrors: number) => void;
    setTotalContrasts: (totalContrasts: number) => void;
    setTotalAlerts: (totalAlerts: number) => void;
    setTotalFeatures: (totalFeatures: number) => void;
    setTotalStructures: (totalStructures: number) => void;
    setTotalArias: (totalArias: number) => void;
    setWebsiteReport: (websiteReport: WebsiteReport) => void;
};

const useWebsiteReportStore = create<WebsiteReportStore>((set) => ({
    rootUrl: '',
    xmlSiteMap: [],
    status: false,
    pageReports: [],
    totalErrors: 0,
    totalContrasts: 0,
    totalAlerts: 0,
    totalFeatures: 0,
    totalStructures: 0,
    totalArias: 0,
    averageErrors: 0,
    averageContrasts: 0,
    averageAlerts: 0,
    averageFeatures: 0,
    averageStructures: 0,
    averageArias: 0,
    setRootUrl: (text: string) => {
        set(state => ({
            rootUrl: text
        }));
    }
    ,
    setXmlSiteMap: (text: string[]) => {
        set(state => ({
            xmlSiteMap: text
        }));
    },
    setStatus: (status: boolean) => {
        set(state => ({
            status: status
        }));
    },
    setPageReports: (pageReports: PageReportState[]) => {
        set(state => ({
            pageReports: pageReports
        }));
    },
    addPageReport: (pageReport: PageReportState) => {
        set(state => ({
            ...state,
            pageReports: [...state.pageReports, {
                url: pageReport.url,
                error: {
                    description: pageReport.error.description,
                    count: pageReport.error.count,
                    items: pageReport.error.items ? pageReport.error.items : []
                },
                contrast: {
                    description: pageReport.contrast.description,
                    count: pageReport.contrast.count,
                    items: pageReport.contrast.items ? pageReport.contrast.items : []
                },
                alert: {
                    description: pageReport.alert.description,
                    count: pageReport.alert.count,
                    items: pageReport.alert.items ? pageReport.alert.items : []
                },
                feature: {
                    description: pageReport.feature.description,
                    count: pageReport.feature.count,
                    items: pageReport.feature.items ? pageReport.feature.items : []
                },
                structure: {
                    description: pageReport.structure.description,
                    count: pageReport.structure.count,
                    items: pageReport.structure.items ? pageReport.structure.items : []
                },
                aria: {
                    description: pageReport.aria.description,
                    count: pageReport.aria.count,
                    items: pageReport.aria.items ? pageReport.aria.items : []
                }
            }]
        }));
    },
    setTotalErrors: (totalErrors: number) => {
        set(state => ({
            totalErrors: totalErrors,
            averageErrors: totalErrors / state.pageReports.length
        }));
    }
    ,
    setTotalContrasts: (totalContrasts: number) => {
        set(state => ({
            totalContrasts: totalContrasts,
            averageContrasts: totalContrasts / state.pageReports.length
        }));
    }
    ,
    setTotalAlerts: (totalAlerts: number) => {
        set(state => ({
            totalAlerts: totalAlerts,
            averageAlerts: totalAlerts / state.pageReports.length
        }));
    }
    ,
    setTotalFeatures: (totalFeatures: number) => {
        set(state => ({
            totalFeatures: totalFeatures,
            averageFeatures: totalFeatures / state.pageReports.length
        }));
    }
    ,
    setTotalStructures: (totalStructures: number) => {
        set(state => ({
            totalStructures: totalStructures,
            averageStructures: totalStructures / state.pageReports.length
        }));
    }
    ,
    setTotalArias: (totalArias: number) => {
        set(state => ({
            totalArias: totalArias,
            averageArias: totalArias / state.pageReports.length
        }));
    }
    ,
    setWebsiteReport: (websiteReport: WebsiteReport) => {
        set(state => ({
            rootUrl: websiteReport.rootUrl,
            xmlSiteMap: websiteReport.xmlSiteMap,
            status: websiteReport.status,
            pageReports: websiteReport.pageReports,
            totalErrors: websiteReport.totalErrors,
            totalContrasts: websiteReport.totalContrasts,
            totalAlerts: websiteReport.totalAlerts,
            totalFeatures: websiteReport.totalFeatures,
            totalStructures: websiteReport.totalStructures,
            totalArias: websiteReport.totalArias,
            averageErrors: websiteReport.totalErrors / websiteReport.pageReports.length,
            averageContrasts: websiteReport.totalContrasts / websiteReport.pageReports.length,
            averageAlerts: websiteReport.totalAlerts / websiteReport.pageReports.length,
            averageFeatures: websiteReport.totalFeatures / websiteReport.pageReports.length,
            averageStructures: websiteReport.totalStructures / websiteReport.pageReports.length,
            averageArias: websiteReport.totalArias / websiteReport.pageReports.length,
        }));
    },
}));

export { useWebsiteReportStore };