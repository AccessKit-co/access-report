import { create } from 'zustand';

{/** These are for maintaining which issue type is selected to be displayed on the Issue Report */ }

{/** This is the type and the store type with the setter function */ }
export type IssueStateSelected = {
    selected: string;
};

export type IssueStateSelectStore = IssueStateSelected & {
    setSelected: (selected: string) => void;
};

{/** This is the store */ }
const useIssueStateSelectStore = create<IssueStateSelectStore>((set) => ({
    selected: '',
    setSelected(selected: string) {
        set(state => ({
            selected: selected
        }));
    },
}));

export { useIssueStateSelectStore };