import { create } from 'zustand';

type Issue = {
    description: string;
    count: number;
    setIssue: (text: string, number: number) => void;
    setIssueCount: (number: number) => void;
};

export const useIssueStore = create<Issue>((set) => ({
    description: 'Issue',
    count: 0,
    setIssue(text: string, number: number) {
        set(state => ({
            ...state,
            description: text,
            count: number
        }));
    },
    setIssueCount(newCount: number) {
        set(state => ({
            count: newCount
        }));
    },
}));