import { create } from 'zustand';
import { PageReportState } from './PageReportStore';

{/** Type for structuring the data gotten from a website scan */ }
export type WebsiteReport = {
    rootUrl: string;
    xmlSiteMap: string[];
    status: boolean;
    pageReports: Record<string, PageReportState>;
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
    findPageReportByUrl: (url: string) => PageReportState | undefined;
    setXmlSiteMap: (text: string[]) => void;
    setStatus: (status: boolean) => void;
    addPageReport: (pageReport: PageReportState) => void;
    setTotalErrors: (totalErrors: number) => void;
    setTotalContrasts: (totalContrasts: number) => void;
    setTotalAlerts: (totalAlerts: number) => void;
    setTotalFeatures: (totalFeatures: number) => void;
    setTotalStructures: (totalStructures: number) => void;
    setTotalArias: (totalArias: number) => void;
    setWebsiteReport: (websiteReport: WebsiteReport) => void;
};

const useWebsiteReportStore = create<WebsiteReportStore>((set, get) => ({
    rootUrl: '',
    xmlSiteMap: [],
    status: false,
    pageReports: {},
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
    },
    findPageReportByUrl: (url: string): PageReportState | undefined => {
        return get().pageReports[url];
    },
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
    addPageReport: (pageReport: PageReportState) => {
        const { pageReports } = get();
        const newPageReports = {
            ...pageReports,
            [pageReport.url]: pageReport // Updated this line
        };

        // ...

        set(state => ({
            ...state,
            pageReports: newPageReports, // Updated this line
            // ...
        }));
    },
    setTotalErrors: (totalErrors: number) => {
        set(state => ({
            totalErrors: totalErrors,
            averageErrors: totalErrors / Object.keys(state.pageReports).length
        }));
    }
    ,
    setTotalContrasts: (totalContrasts: number) => {
        set(state => ({
            totalContrasts: totalContrasts,
            averageContrasts: totalContrasts / Object.keys(state.pageReports).length
        }));
    }
    ,
    setTotalAlerts: (totalAlerts: number) => {
        set(state => ({
            totalAlerts: totalAlerts,
            averageAlerts: totalAlerts / Object.keys(state.pageReports).length
        }));
    }
    ,
    setTotalFeatures: (totalFeatures: number) => {
        set(state => ({
            totalFeatures: totalFeatures,
            averageFeatures: totalFeatures / Object.keys(state.pageReports).length
        }));
    }
    ,
    setTotalStructures: (totalStructures: number) => {
        set(state => ({
            totalStructures: totalStructures,
            averageStructures: totalStructures / Object.keys(state.pageReports).length
        }));
    }
    ,
    setTotalArias: (totalArias: number) => {
        set(state => ({
            totalArias: totalArias,
            averageArias: totalArias / Object.keys(state.pageReports).length
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
            averageErrors: websiteReport.totalErrors / Object.keys(state.pageReports).length,
            averageContrasts: websiteReport.totalContrasts / Object.keys(state.pageReports).length,
            averageAlerts: websiteReport.totalAlerts / Object.keys(state.pageReports).length,
            averageFeatures: websiteReport.totalFeatures / Object.keys(state.pageReports).length,
            averageStructures: websiteReport.totalStructures / Object.keys(state.pageReports).length,
            averageArias: websiteReport.totalArias / Object.keys(state.pageReports).length,
        }));
    },
}));

export { useWebsiteReportStore };