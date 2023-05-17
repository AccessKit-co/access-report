import { type } from 'os';
import { create } from 'zustand';

type Issue = {
    description: string;
    count: number;
    setIssue: (text: string, number: number) => void;
    setIssueDescription: (text: string) => void;
    setIssueCount: (number: number) => void;
};

type PageReport = {
    url: string;
    error: Issue;
    contrast: Issue;
    alert: Issue;
    structure: Issue;
    setUrl: (text: string) => void;
    setError: (number: number) => void;
    setContrast: (number: number) => void;
    setAlert: (number: number) => void;
    setStructure: (number: number) => void;
};



const useIssueStore = create<Issue>((set) => ({
    description: 'Issue',
    count: 0,
    setIssue(text: string, number: number) {
        set(state => ({
            description: text,
            count: number
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
}));

const usePageReportStore = create<PageReport>((set) => ({
    url: '',
    error: { description: "Error", count: 0 },
    contrast: { description: "Contrast", count: 0 },
    alert: { description: "Alerts", count: 0 },
    structure: { description: "Structure", count: 0 },
    setUrl(text: string) {
        set(state => ({
            ...state,
            url: text
        }));
    },
    setError(number: number) {
        set(state => ({
            error: { description: "Error", count: number }
        }));
    },
    setContrast(number: number) {
        set(state => ({
            contrast: { description: "Contrast", count: number }
        }));
    },
    setAlert(number: number) {
        set(state => ({
            alert: { description: "Alerts", count: number }
        }));
    }
    ,
    setStructure(number: number) {
        set(state => ({
            structure: { description: "Structure", count: number }
        }));
    },

}));

export { usePageReportStore, useIssueStore };

