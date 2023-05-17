import { type } from 'os';
import { create } from 'zustand';

export type Subtype = {
    description: string;
    count: number;
    issues: string[];
    setdescription: (text: string) => void;
    setcount: (number: number) => void;
    setissues: (text: string[]) => void;
};

export type Issue = {
    description: string;
    count: number;
    subtypes?: Subtype[];
    setIssue: (text: string, number: number) => void;
    setIssueDescription: (text: string) => void;
    setIssueCount: (number: number) => void;
};

export type PageReport = {
    url: string;
    error: Issue;
    contrast: Issue;
    alert: Issue;
    structure: Issue;
    setUrl: (text: string) => void;
    setError: (issue: Issue) => void;
    setContrast: (issue: Issue) => void;
    setAlert: (issue: Issue) => void;
    setStructure: (issue: Issue) => void;
};

const useSubtypeStore = create<Subtype>((set) => ({
    description: 'Subtype',
    count: 0,
    issues: [],
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
    setissues(newIssues: string[]) {
        set(state => ({
            issues: newIssues
        }));
    },
}));

const useIssueStore = create<Issue>((set) => ({
    description: 'Issue',
    count: 0,
    setIssue(text: string, number: number, subtypes?: Subtype[]) {
        set(state => ({
            description: text,
            count: number,
            subtypes: subtypes ? subtypes : []
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
    setSubtypes(newSubtypes: Subtype[]) {
        set(state => ({
            subtypes: newSubtypes
        }));
    },
}));

const usePageReportStore = create<PageReport>((set) => ({
    url: 'none',
    error: { description: "Error", count: 0 },
    contrast: { description: "Contrast", count: 0 },
    alert: { description: "Alerts", count: 0 },
    structure: { description: "Structure", count: 0 },
    setUrl(text: string) {
        set(state => ({
            url: text
        }));
    },
    setError(issue: Issue) {
        set(state => ({
            error: {
                ...state.error,
                count: issue.count,
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
    setContrast(issue: Issue) {
        set(state => ({
            contrast: {
                ...state.contrast,
                count: issue.count,
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
    setAlert(issue: Issue) {
        set(state => ({
            alert: {
                ...state.alert,
                count: issue.count,
                subtypes: issue.subtypes ? issue.subtypes : []
            }
        }));
    },
    setStructure(issue: Issue) {
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

