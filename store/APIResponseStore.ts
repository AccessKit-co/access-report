import { create } from 'zustand';
import { PageReportState, usePageReportStore } from './PageReportStore';
import { use } from 'react';

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

export type APIResponseState = {
    status: StatusState;
    statistics: StatisticsState;
    categories: PageReportState;
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

export type APIResponseStore = APIResponseState & {
    setStatus: (status: StatusState) => void;
    setStatistics: (statistics: StatisticsState) => void;
    setCategories: (categories: PageReportState) => void;
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

const useAPIResponseStore = create<APIResponseStore>((set) => ({
    status: useStatusStore.getState(),
    statistics: useStatisticsStore.getState(),
    categories: usePageReportStore.getState(),
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
    setCategories(categories: PageReportState) {
        set(state => ({
            categories: categories
        }));
    },
    setAPIResponse(response: APIResponseState) {
        set(state => ({
            status: response.status,
            statistics: response.statistics,
            categories: response.categories
        }));
    }));

export { useAPIResponseStore, useStatusStore, useStatisticsStore };