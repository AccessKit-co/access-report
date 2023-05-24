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
};

{/** These are the store types with the setter functions */ }
export type SubtypeStore = SubtypeState & {
    setdescription: (text: string) => void;
    setcount: (number: number) => void;
    setselectors: (text: string[]) => void;
    setid: (text: string) => void;
    seturl: (text: string) => void;
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
};

const useSubtypeStore = create<SubtypeStore>((set) => ({
    description: 'description of this subtype',
    count: 0,
    selectors: [],
    id: 'Subtype',
    url: 'none',
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
    }
}));

export { usePageReportStore, useIssueStore, useSubtypeStore };

