import { create } from 'zustand';

interface StoreState {
    categories: Category[];
    errorCount: number;
    contrastCount: number;
    structureCount: number;
    alertsCount: number;
    setSearchResult: (result: ApiResponse) => void;
}

const useURLSearchStore = create<StoreState>((set) => ({
    categories: [],
    errorCount: 0,
    contrastCount: 0,
    structureCount: 0,
    alertsCount: 0,
    setSearchResult: (result: ApiResponse) => {
        set({
            categories: result.categories,
            errorCount: result.categories.error.count,
            contrastCount: result.categories.contrast.count,
            structureCount: result.categories.structure.count,
            alertsCount: result.categories.alerts.count,
        });
    },
}));

export default useURLSearchStore;