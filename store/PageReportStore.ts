import { create } from 'zustand';

interface PageReport {
    errors: Issue;
    contrast: Issue;
    alerts: Issue;
    structure: Issue;
    setErrors: (errors: Issue) => void;
    setContrast: (contrast: Issue) => void;
    setAlerts: (alerts: Issue) => void;
    setStructure: (structure: Issue) => void;
}

interface Issue {
    description: string;
    count: number;
    subtypes: subtype[];
    setIssueDescription: (description: string) => void;
    setIssueCount: (count: number) => void;
    setIssueSubtypes: (subtypes: subtype[]) => void;
}

interface subtype {
    description: string;
    count: number;
    items: string[];
    setSubtypeDescription: (description: string) => void;
    setSubtypeCount: (count: number) => void;
    setSubtypeItems: (items: string[]) => void;
}

const usePageReportStore = create<PageReport>((set) => ({
    errors: { description: 'Errors', count: 0, subtypes: [] },
    contrast: { description: 'Contrast', count: 0, subtypes: [] },
    alerts: { description: 'Alerts', count: 0, subtypes: [] },
    structure: { description: 'Structure', count: 0, subtypes: [] },
    setErrors: (newErrors: Issue) => { set({ errors: { description: 'Errors', count: newErrors['count'], subtypes: newError['items'] } }) },
    setContrast: (newContrast: Issue) => { set({ contrast: { description: 'Contrast', count: newContrast.count, subtypes: newContrast.subtypes } }) },
    setAlerts: (newAlerts: Issue) => { set({ alerts: { description: 'Alerts', count: newAlerts.count, subtypes: newAlerts.subtypes } }) },
    setStructure: (newStructure: Issue) => { set({ structure: { description: 'Structure', count: newStructure.count, subtypes: newStructure.subtypes } }) },
}));

const useIssueStore = create<Issue>((set) => ({
    description: 'issueType',
    count: 2,
    subtypes: [],
    setIssueDescription: (description: string) => set({ description }),
    setIssueCount(newCount: number) {
        set((state) => ({
            count: newCount
        })
        )
    },
    setIssueSubtypes: (subtypes: subtype[]) => set({ subtype }),
}));

const useSubtypeStore = create<subtype>((set) => ({
    description: 'subtypeType',
    count: 8,
    items: [],
    setSubtypeDescription: (description: string) => set({ description }),
    setSubtypeCount: (newCount: number) => set({ count: newCount }),
    setSubtypeItems: (items: string[]) => set({ items }),
}));

export { usePageReportStore, useIssueStore, useSubtypeStore };