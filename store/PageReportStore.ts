import { create } from 'zustand';

{/** keep in mind this store only works for reporttype=4 */ }

{/** These are the raw data types */ }
export type SubtypeState = {
    description: string;
    count: number;
    id: string;
    selectors: string[];
};

export type IssueState = {
    description: string;
    count: number;
    items: SubtypeState[];
};

export type PageReportState = {
    url: string;
    error: IssueState;
    contrast: IssueState;
    alert: IssueState;
    feature: IssueState;
    structure: IssueState;
    aria: IssueState;
};
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


{/** These are the store types with the setter functions */ }
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



export type SubtypeStore = SubtypeState & {
    setdescription: (text: string) => void;
    setcount: (number: number) => void;
    setselectors: (text: string[]) => void;
    setid: (text: string) => void;
    setSubtype: (subtype: SubtypeState) => void;
};

export type IssueStore = IssueState & {
    setIssue: (issue: IssueState) => void;
    setIssueDescription: (text: string) => void;
    setIssueCount: (newCount: number) => void;
    setSubtypes: (newSubtypes: SubtypeState[]) => void;
};

export type PageReportStore = PageReportState & {
    setUrl: (text: string) => void;
    setError: (issue: IssueState) => void;
    setContrast: (issue: IssueState) => void;
    setAlert: (issue: IssueState) => void;
    setFeature: (issue: IssueState) => void;
    setStructure: (issue: IssueState) => void;
    setAria: (issue: IssueState) => void;
    setPageReport: (pageReport: PageReportState) => void;
};

{/** These are the stores */ }

const useSubtypeStore = create<SubtypeStore>((set) => ({
    description: 'description of this subtype',
    count: 0,
    selectors: [],
    id: 'Subtype',
    setSubtype(subtype: SubtypeState) {
        set(state => ({
            description: subtype.description,
            count: subtype.count,
            selectors: subtype.selectors,
            id: subtype.id,
        }));
    },
    setdescription(text: string) {
        set(state => ({
            description: text
        }));
    },
    setcount(newCount: number) {
        set(state => ({
            count: newCount
        }));
    },
    setselectors(newSelectors: string[]) {
        set(state => ({
            selectors: newSelectors
        }));
    },
    setid(newId: string) {
        set(state => ({
            id: newId
        }));
    },
}));

const useIssueStore = create<IssueStore>((set) => ({
    description: '',
    count: 0,
    items: [],
    setIssue(issue: IssueState) {
        set(state => ({
            description: issue.description,
            count: issue.count,
            items: issue.items ? issue.items : []
        }));
    },
    setIssueDescription(text: string) {
        set(state => ({
            description: text
        }));
    },
    setIssueCount(newCount: number) {
        set(state => ({
            count: newCount
        }));
    },
    setSubtypes(items: SubtypeState[]) {
        set(state => ({
            items: items
        }));
    },
}));

const usePageReportStore = create<PageReportStore>((set) => ({
    url: 'none',
    error: { description: "Error", count: 0, items: [] },
    contrast: { description: "Contrast", count: 0, items: [] },
    alert: { description: "Alerts", count: 0, items: [] },
    feature: { description: "Feature", count: 0, items: [] },
    structure: { description: "Structure", count: 0, items: [] },
    aria: { description: "Aria", count: 0, items: [] },
    async setPageReport(pageReport: PageReportState) {
        set(state => ({
            url: pageReport.url,
            error: {
                ...state.error,
                count: pageReport.error.count,
                items: pageReport.error.items ? pageReport.error.items : []
            },
            contrast: {
                ...state.contrast,
                count: pageReport.contrast.count,
                items: pageReport.contrast.items ? pageReport.contrast.items : []
            },
            alert: {
                ...state.alert,
                count: pageReport.alert.count,
                items: pageReport.alert.items ? pageReport.alert.items : []
            },
            feature: {
                ...state.feature,
                count: pageReport.feature.count,
                items: pageReport.feature.items ? pageReport.feature.items : []
            },
            structure: {
                ...state.structure,
                count: pageReport.structure.count,
                items: pageReport.structure.items ? pageReport.structure.items : []
            },
            aria: {
                ...state.aria,
                count: pageReport.aria.count,
                items: pageReport.aria.items ? pageReport.aria.items : []
            }
        }));
    },
    setUrl(text: string) {
        set(state => ({
            url: text
        }));
    },
    setError(issue: IssueState) {
        set(state => ({
            error: {
                ...state.error,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setContrast(issue: IssueState) {
        set(state => ({
            contrast: {
                ...state.contrast,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setAlert(issue: IssueState) {
        set(state => ({
            alert: {
                ...state.alert,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setFeature(issue: IssueState) {
        set(state => ({
            feature: {
                ...state.feature,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setStructure(issue: IssueState) {
        set(state => ({
            structure: {
                ...state.structure,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setAria(issue: IssueState) {
        set(state => ({
            aria: {
                ...state.aria,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
}));

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


export { usePageReportStore, useIssueStore, useSubtypeStore, useWebsiteReportStore };

