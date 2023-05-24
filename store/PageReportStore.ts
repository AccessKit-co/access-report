import { create } from 'zustand';

{/** These are the raw data types */ }
export type SubtypeState = {
    description: string;
    count: number;
    id: string;
    url: string;
    selectors: string[];
};

export type IssueState = {
    description: string;
    count: number;
    subtypes: SubtypeState[];
};

export type PageReportState = {
    url: string;
    error: IssueState;
    contrast: IssueState;
    alert: IssueState;
    structure: IssueState;
    aria: IssueState;
};

{/** These are the store types with the setter functions */ }
export type SubtypeStore = SubtypeState & {
    setdescription: (text: string) => void;
    setcount: (number: number) => void;
    setselectors: (text: string[]) => void;
    setid: (text: string) => void;
    seturl: (text: string) => void;
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
    setStructure: (issue: IssueState) => void;
    setAria: (issue: IssueState) => void;
    setPageReport: (pageReport: PageReportState) => void;
};

const useSubtypeStore = create<SubtypeStore>((set) => ({
    description: 'description of this subtype',
    count: 0,
    selectors: [],
    id: 'Subtype',
    url: 'none',
    setSubtype(subtype: SubtypeState) {
        set(state => ({
            description: subtype.description,
            count: subtype.count,
            selectors: subtype.selectors,
            id: subtype.id,
            url: subtype.url
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
    seturl(newUrl: string) {
        set(state => ({
            url: newUrl
        }));
    },
}));

const useIssueStore = create<IssueStore>((set) => ({
    description: '',
    count: 0,
    subtypes: [],
    setIssue(issue: IssueState) {
        set(state => ({
            description: issue.description,
            count: issue.count,
            subtypes: issue.subtypes ? issue.subtypes : []
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
    setSubtypes(newSubtypes: SubtypeState[]) {
        set(state => ({
            subtypes: newSubtypes
        }));
    },
}));

const usePageReportStore = create<PageReportStore>((set) => ({
    url: 'none',
    error: { description: "Error", count: 0, subtypes: [] },
    contrast: { description: "Contrast", count: 0, subtypes: [] },
    alert: { description: "Alerts", count: 0, subtypes: [] },
    structure: { description: "Structure", count: 0, subtypes: [] },
    aria: { description: "Aria", count: 0, subtypes: [] },
    setPageReport(pageReport: PageReportState) {
        set(state => ({
            url: pageReport.url,
            error: {
                ...state.error,
                count: pageReport.error.count,
                subtypes: pageReport.error.subtypes ? pageReport.error.subtypes : []
            },
            contrast: {
                ...state.contrast,
                count: pageReport.contrast.count,
                subtypes: pageReport.contrast.subtypes ? pageReport.contrast.subtypes : []
            },
            alert: {
                ...state.alert,
                count: pageReport.alert.count,
                subtypes: pageReport.alert.subtypes ? pageReport.alert.subtypes : []
            },
            structure: {
                ...state.structure,
                count: pageReport.structure.count,
                subtypes: pageReport.structure.subtypes ? pageReport.structure.subtypes : []
            },
            aria: {
                ...state.aria,
                count: pageReport.aria.count,
                subtypes: pageReport.aria.subtypes ? pageReport.aria.subtypes : []
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
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
    setContrast(issue: IssueState) {
        set(state => ({
            contrast: {
                ...state.contrast,
                count: issue.count,
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
    setAlert(issue: IssueState) {
        set(state => ({
            alert: {
                ...state.alert,
                count: issue.count,
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
    setStructure(issue: IssueState) {
        set(state => ({
            structure: {
                ...state.structure,
                count: issue.count,
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
    setAria(issue: IssueState) {
        set(state => ({
            aria: {
                ...state.aria,
                count: issue.count,
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
}));

export { usePageReportStore, useIssueStore, useSubtypeStore };

