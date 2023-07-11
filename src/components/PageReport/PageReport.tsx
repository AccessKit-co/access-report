
import { FiAlertCircle } from 'react-icons/fi'
import { FiAlertTriangle } from 'react-icons/fi'
import { ImTree } from 'react-icons/im'
import { ImContrast } from 'react-icons/im'
import { useIssueStateSelectStore } from '../../store/IssueStateSelectStore'
import { usePageReportStore, SubtypeState } from '../../store/PageReportStore'
import IssueSubtype from './IssueReport/IssueSubtype'
import { useWebsiteReportStore } from '../../store/WebsiteReportStore'
import { CircularProgress } from '@mui/material'
import { PageSearch } from '../PageSearch';

const colorScheme = {
    'error': { text: '#EA0404', bg: 'bg-[#FED7D7]', border: 'border-[#FDB0B0]', 'hover': 'hover:bg-[#FEEBEB]' },
    'contrast': { text: '#008AE0', bg: 'bg-[#C2E8FF]', border: 'border-[#70C8FF]', hover: 'hover:bg-[#C2E8FF]' },
    'structure': { text: '#2CB56E', bg: 'bg-[#CEF3E0]', border: 'border-[#5BD797]', hover: 'hover:bg-[#CEF3E0]' },
    'alert': { 'text': '#FF9505', bg: 'bg-[#FFE6C2]', border: 'border-[#FFCC85]', hover: 'hover:bg-[#FFEFD6]' },
};

const issueIcons = {
    error: FiAlertCircle,
    contrast: ImContrast,
    structure: ImTree,
    alert: FiAlertTriangle,
};

export const PageReport = () => {
    const PageStoreState = usePageReportStore();
    const SelectedIssueState = useIssueStateSelectStore();
    const WebsiteReport = useWebsiteReportStore();

    const handleSelectedIssueState = (selecting: string) => {
        if (SelectedIssueState.selected == selecting) {
            SelectedIssueState.setSelected(''); // deselect
        }
        SelectedIssueState.setSelected(selecting);
    };

    const issueButton = (type: string,) => {
        const issueColorScheme = (colorScheme as any)[type];
        const Icon = (issueIcons as any)[type];
        const textColor = "text-[" + issueColorScheme.text + "]";

        return (
            <button onClick={() => { handleSelectedIssueState(type) }} className={`flex flex-row w-full h-10 items-center justify-start ${issueColorScheme.hover} px-1`}
                style={{
                    backgroundColor: SelectedIssueState.selected == type ? 'white' : '',
                    borderRight: SelectedIssueState.selected == type ? '2px solid blue' : '',
                }}
            >
                <div className='flex flex-row gap-1 p-1 h-full items-center justify-start w-2/3'>
                    <div className='flex h-full items-center justify-center text-l group-hover:scale-125 mr-1'>
                        <Icon style={{ color: issueColorScheme.text }} />
                    </div>
                    <div className='flex h-full justify-start items-center'>
                        <h2 className='text-sm font-semibold '>{(PageStoreState as any)[type].description}</h2>
                    </div>
                </div>
                <div className='flex shrink-0 w-1/3 h-full p-2 justify-center items-center'>
                    <div className={`flex w-full h-full border-2 ${issueColorScheme.border} ${issueColorScheme.bg} rounded items-center justify-center`}>
                        {WebsiteReport.isLoading ? <span className='text-l items-center justify-center h-full font-semibold text-[#EA0404]'> <CircularProgress sx={{ color: issueColorScheme.text }} style={{ width: 16, height: 16 }} />  </span> : <span className='text-l items-center justify-center font-semibold'
                            style={{
                                color: issueColorScheme.text
                            }}> {(PageStoreState as any)[type].count} </span>}
                    </div>
                </div>
            </button>
        );

    }

    return (
        <div className="flex flex-col gap-1 w-full items-center justify-center">
            <PageSearch />
            <div className="flex text-center justify-center w-full max-w-[48rem] min-w-[20rem] h-[24rem] overflow-clip">
                <div className='flex flex-row divide-x rounded border-2 h-full w-full'>

                    {/** Issue Buttons sidebar*/}

                    <div className='flex w-[10rem] bg-[#F0F9FF] items-center justify-center shrink-0'>
                        <div className='flex flex-col items-center justify-top w-full h-full'>
                            {issueButton('error')}
                            {issueButton('contrast')}
                            {issueButton('structure')}
                            {issueButton('alert')}
                        </div>
                    </div>

                    {/** Issue Report */}

                    <div className='flex grow h-full items-center justify-center p-2 min-w-[10rem]'>
                        { // Sets a loading animation wihile website is being scanned
                            WebsiteReport.isLoading ? <CircularProgress style={{ width: 96, height: 96 }} /> :
                                <>
                                    { // We do this to prevent errors when the user has not selected any issue and before it auto selectors Error
                                        SelectedIssueState.selected == '' ? '' :
                                            <div
                                                className="flex flex-col w-full h-full justify-center items-center">
                                                <div className='flex flex-col w-full h-16 items-center justify-start'>
                                                    <div className='flex flex-row w-full h-8 items-center justify-start'>
                                                        <h2 className='font-semibold text-xl truncate'> {(PageStoreState as any)[SelectedIssueState.selected].description} Report </h2>
                                                    </div>
                                                    <div className='flex flex-row w-full h-4 items-center justify-start text-sm'>
                                                        <p className='text-xs font-extralight text-gray-400 justify-start items-center'> {(PageStoreState as any)[SelectedIssueState.selected].description} </p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col items-center overflow-y-auto overflow-clip justify-start h-full w-full scrollbar-hide overscroll-auto pb-2'>
                                                    {(PageStoreState as any)[SelectedIssueState.selected].items ?
                                                        <div className='flex flex-col items-top justify-center gap-1 w-full'>
                                                            {Object.values((PageStoreState as any)[SelectedIssueState.selected].items as SubtypeState[]).map(
                                                                (item: SubtypeState, index: number) =>
                                                                    <IssueSubtype key={index} description={item.description} count={item.count} id={item.id} selectors={item.selectors} />)}
                                                        </div>
                                                        : []}
                                                </div>
                                            </div>
                                    }
                                </>}
                    </div>
                </div>
            </div>
        </div >
    );
}