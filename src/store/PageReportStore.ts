import { create } from 'zustand';

//keep in mind this store only works for reporttype=4 reports from the WAVE api

// These are the raw data types
export type SubtypeState = {
    description: string;
    count: number;
    id: string;
    selectors: string[];
};

export type SelectedIssueState = {
    description: string;
    count: number;
    items: SubtypeState[];
};

export type PageReportState = {
    url: string;
    error: SelectedIssueState;
    contrast: SelectedIssueState;
    alert: SelectedIssueState;
    feature: SelectedIssueState;
    structure: SelectedIssueState;
    aria: SelectedIssueState;
};

export type PageReportStore = PageReportState & {
    setUrl: (text: string) => void;
    setError: (issue: SelectedIssueState) => void;
    setContrast: (issue: SelectedIssueState) => void;
    setAlert: (issue: SelectedIssueState) => void;
    setFeature: (issue: SelectedIssueState) => void;
    setStructure: (issue: SelectedIssueState) => void;
    setAria: (issue: SelectedIssueState) => void;
    setPageReport: (pageReport: PageReportState) => void;
};

// Page Report store
export const usePageReportStore = create<PageReportStore>((set) => ({
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
    setError(issue: SelectedIssueState) {
        set(state => ({
            error: {
                ...state.error,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setContrast(issue: SelectedIssueState) {
        set(state => ({
            contrast: {
                ...state.contrast,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setAlert(issue: SelectedIssueState) {
        set(state => ({
            alert: {
                ...state.alert,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setFeature(issue: SelectedIssueState) {
        set(state => ({
            feature: {
                ...state.feature,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setStructure(issue: SelectedIssueState) {
        set(state => ({
            structure: {
                ...state.structure,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
    setAria(issue: SelectedIssueState) {
        set(state => ({
            aria: {
                ...state.aria,
                count: issue.count,
                items: issue.items ? issue.items : []
            }
        }));
    },
}));

