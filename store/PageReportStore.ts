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
    url: '',
    error: { description: "Error", count: 0, items: [] },
    contrast: { description: "Contrast", count: 0, items: [] },
    alert: { description: "Alerts", count: 0, items: [] },
    feature: { description: "Feature", count: 0, items: [] },
    structure: { description: "Structure", count: 0, items: [] },
    aria: { description: "Aria", count: 0, items: [] },
    setPageReport(pageReport: PageReportState) {
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


export { usePageReportStore, useIssueStore, useSubtypeStore };

