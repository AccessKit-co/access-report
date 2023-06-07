import { create } from 'zustand';
import { PageReportState } from './PageReportStore';

{/** Type for structuring the data gotten from a website scan */ }
export type WebsiteReport = {
    rootUrl: string;
    xmlSiteMap: string[];
    status: boolean;
    siteReports: PageReportState[];
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
    setSiteReports: (siteReports: PageReportState[]) => void;
    addSiteReport: (siteReport: PageReportState) => void;
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
    siteReports: [],
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
    setSiteReports: (siteReports: PageReportState[]) => {
        set(state => ({
            siteReports: siteReports
        }));
    },
    addSiteReport: (siteReport: PageReportState) => {
        set(state => ({
            siteReports: [...state.siteReports, siteReport]
        }));
    },
    setTotalErrors: (totalErrors: number) => {
        set(state => ({
            totalErrors: totalErrors,
            averageErrors: totalErrors / state.siteReports.length
        }));
    }
    ,
    setTotalContrasts: (totalContrasts: number) => {
        set(state => ({
            totalContrasts: totalContrasts,
            averageContrasts: totalContrasts / state.siteReports.length
        }));
    }
    ,
    setTotalAlerts: (totalAlerts: number) => {
        set(state => ({
            totalAlerts: totalAlerts,
            averageAlerts: totalAlerts / state.siteReports.length
        }));
    }
    ,
    setTotalFeatures: (totalFeatures: number) => {
        set(state => ({
            totalFeatures: totalFeatures,
            averageFeatures: totalFeatures / state.siteReports.length
        }));
    }
    ,
    setTotalStructures: (totalStructures: number) => {
        set(state => ({
            totalStructures: totalStructures,
            averageStructures: totalStructures / state.siteReports.length
        }));
    }
    ,
    setTotalArias: (totalArias: number) => {
        set(state => ({
            totalArias: totalArias,
            averageArias: totalArias / state.siteReports.length
        }));
    }
    ,
    setWebsiteReport: (websiteReport: WebsiteReport) => {
        set(state => ({
            rootUrl: websiteReport.rootUrl,
            xmlSiteMap: websiteReport.xmlSiteMap,
            status: websiteReport.status,
            siteReports: websiteReport.siteReports,
            totalErrors: websiteReport.totalErrors,
            totalContrasts: websiteReport.totalContrasts,
            totalAlerts: websiteReport.totalAlerts,
            totalFeatures: websiteReport.totalFeatures,
            totalStructures: websiteReport.totalStructures,
            totalArias: websiteReport.totalArias,
            averageErrors: websiteReport.totalErrors / websiteReport.siteReports.length,
            averageContrasts: websiteReport.totalContrasts / websiteReport.siteReports.length,
            averageAlerts: websiteReport.totalAlerts / websiteReport.siteReports.length,
            averageFeatures: websiteReport.totalFeatures / websiteReport.siteReports.length,
            averageStructures: websiteReport.totalStructures / websiteReport.siteReports.length,
            averageArias: websiteReport.totalArias / websiteReport.siteReports.length,
        }));
    },
}));
