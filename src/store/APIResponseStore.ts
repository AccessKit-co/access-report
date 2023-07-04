import { create } from 'zustand';
import { IssueState, IssueStore, useIssueStore } from './PageReportStore';

{/** keep in mind this store only works for reporttype=4 */ }

{/** These are the categories we get from the API response from the WAVE call */ }
export type StatusState = {
    success: boolean;
    httpsStatusCode: number;
};

export type StatisticsState = {
    pageTitle: string;
    pageUrl: string;
    time?: number;
    creditsremaining?: number;
    allitemcount?: number;
    totalelements?: number;
    waveurl?: string;
};

export type CategoriesState = {
    error: IssueState;
    contrast: IssueState;
    alert: IssueState;
    structure: IssueState;
    feature: IssueState;
    aria: IssueState;
};


export type APIResponseState = {
    status: StatusState;
    statistics: StatisticsState;
    categories: CategoriesState;
};

{/** These are the store types with the setter functions */ }
export type StatusStore = StatusState & {
    setSuccess: (success: boolean) => void;
    setHttpsStatusCode: (code: number) => void;
};

export type StatisticsStore = StatisticsState & {
    setPageTitle: (title: string) => void;
    setPageUrl: (url: string) => void;
    setTime: (time: number) => void;
    setCreditsRemaining: (credits: number) => void;
    setAllItemCount: (count: number) => void;
    setTotalElements: (elements: number) => void;
    setWaveUrl: (url: string) => void;
};
export type CategoriesStore = CategoriesState & {
    setError: (issue: IssueState) => void;
    setContrast: (issue: IssueState) => void;
    setAlert: (issue: IssueState) => void;
    setFeature: (issue: IssueState) => void;
    setStructure: (issue: IssueState) => void;
    setAria: (issue: IssueState) => void;
};

export type APIResponseStore = APIResponseState & {
    setStatus: (status: StatusState) => void;
    setStatistics: (statistics: StatisticsState) => void;
    setCategories: (categories: CategoriesState) => void;
    setAPIResponse: (response: APIResponseState) => void;
};

{/** This is the store itself */ }
const useStatusStore = create<StatusStore>((set) => ({
    success: false,
    httpsStatusCode: 0,
    setSuccess(success: boolean) {
        set(state => ({
            success: success
        }));
    },
    setHttpsStatusCode(code: number) {
        set(state => ({
            httpsStatusCode: code
        }));
    }
}));

const useStatisticsStore = create<StatisticsStore>((set) => ({
    pageTitle: '',
    pageUrl: '',
    setPageTitle(title: string) {
        set(state => ({
            pageTitle: title
        }));
    },
    setPageUrl(url: string) {
        set(state => ({
            pageUrl: url
        }));
    },
    setTime(time: number) {
        set(state => ({
            time: time
        }));
    },
    setCreditsRemaining(credits: number) {
        set(state =>
        ({
            creditsremaining: credits
        }));
    },
    setAllItemCount(itemcount: number) {
        set(state =>
        ({
            allitemcount: itemcount
        }));
    },
    setTotalElements(elements: number) {
        set(state =>
        ({
            totalelements: elements
        }));
    },
    setWaveUrl(url: string) {
        set(state =>
        ({
            waveurl: url
        }));
    }
}));

const useCategoriesStore = create<CategoriesState>((set) => ({
    error: { description: "Error", count: 0, items: [] },
    contrast: { description: "Contrast", count: 0, items: [] },
    alert: { description: "Alerts", count: 0, items: [] },
    feature: { description: "Feature", count: 0, items: [] },
    structure: { description: "Structure", count: 0, items: [] },
    aria: { description: "Aria", count: 0, items: [] },
    setCategories(categories: CategoriesState) {
        set(state => ({
            error: categories.error,
            contrast: categories.contrast,
            alert: categories.alert,
            structure: categories.structure,
            aria: categories.aria
        }));
    },
    setError(error: IssueState) {
        set(state => ({
            error: error
        }));
    },
    setContrast(contrast: IssueState) {
        set(state => ({
            contrast: contrast
        }));
    },
    setAlert(alert: IssueState) {
        set(state => ({
            alert: alert
        }));
    },
    setFeature(feature: IssueState) {
        set(state => ({
            feature: feature
        }));
    },
    setStructure(structure: IssueState) {
        set(state => ({
            structure: structure
        }));
    },
    setAria(aria: IssueState) {
        set(state => ({
            aria: aria
        }));
    },
}));




const useAPIResponseStore = create<APIResponseStore>((set) => ({
    status: {
        success: false,
        httpsStatusCode: 0
    },
    statistics: {
        pageTitle: '',
        pageUrl: ''
    },
    categories: {
        error: { description: "Error", count: 0, items: [] },
        contrast: { description: "Contrast", count: 0, items: [] },
        alert: { description: "Alerts", count: 0, items: [] },
        feature: { description: "Feature", count: 0, items: [] },
        structure: { description: "Structure", count: 0, items: [] },
        aria: { description: "Aria", count: 0, items: [] }
    },
    setAPIResponse(response: APIResponseState) {
        set(state => ({
            status: response.status,
            statistics: response.statistics,
            categories: response.categories
        }));
    },
    setStatus(status: StatusState) {
        set(state => ({
            status: status
        }));
    },
    setStatistics(statistics: StatisticsState) {
        set(state => ({
            statistics: statistics
        }));
    },
    setCategories(categories: CategoriesState) {
        set(state => ({
            categories: categories
        }));
    },
}));

export { useAPIResponseStore, useStatusStore, useStatisticsStore };