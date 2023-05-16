import { create } from 'zustand';

interface PageReport {
    url: string;
    errors: Issue;
    contrast: Issue;
    alerts: Issue;
    structure: Issue;
    overallScore: number;
    Status: boolean;
    setUrl: (url: string) => void;
    setErrors: (errors: Issue) => void;
    setContrast: (contrast: Issue) => void;
    setAlerts: (alerts: Issue) => void;
    setStructure: (structure: Issue) => void;
    setOverallScore: (overallScore: number) => void;
    setStatus: (Status: boolean) => void;
    setPageReport: (pageReport: PageReport) => void;
}

interface Issue {
    description: string;
    count: number;
    subtypes: subtype[];
    setIssueDescription: (description: string) => void;
    setIssueCount: (count: number) => void;
    setIssueSubtypes: (subtypes: subtype[]) => void;
    setIssue: (issue: Issue) => void;
}

interface subtype {
    description: string;
    count: number;
    items: string[];
    setSubtypeDescription: (description: string) => void;
    setSubtypeCount: (count: number) => void;
    setSubtypeItems: (items: string[]) => void;
    setSubtype: (subtype: subtype) => void;
}

const usePageReportStore = create((set) => ({
    url: '',
    errors: { description: 'Errors', count: '', subtypes: [] },
    contrast: { description: 'Contrast', count: '', subtypes: [] },
    alerts: { description: 'Alerts', count: '', subtypes: [] },
    structure: { description: 'Structure', count: '', subtypes: [] },
    overallScore: 0,
    Status: false,
    setUrl: (url: string) => set({ url }),
    setErrors: (errors: Issue) => set({ errors }),
    setContrast: (contrast: Issue) => set({ contrast }),
    setAlerts: (alerts: Issue) => set({ alerts }),
    setStructure: (structure: Issue) => set({ structure }),
    setOverallScore: (overallScore: number) => set({ overallScore }),
    setStatus: (Status: boolean) => set({ Status }),
}));

const useIssueStore = create<Issue>((set) => ({
    description: 'issueType',
    count: 2,
    subtypes: [],
    setIssueDescription: (description: string) => set({ description }),
    setIssueCount: (count: number) => set({ count }),
    setIssueSubtypes: (subtypes: subtype[]) => set({ subtype }),
    setIssue: (issue: Issue) => set({ issue }),
}));

const useSubtypeStore = create<subtype>((set) => ({
    description: 'subtypeType',
    count: 8,
    items: [],
    setSubtypeDescription: (description: string) => set({ description }),
    setSubtypeCount: (count: number) => set({ count }),
    setSubtypeItems: (items: string[]) => set({ items }),
    setSubtype: (subtype: subtype) => set({ subtype }),
}));

export { usePageReportStore, useIssueStore, useSubtypeStore };