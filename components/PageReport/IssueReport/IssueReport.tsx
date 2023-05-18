import IssueSubtype from './IssueSubtype';
import { useIssueStore, usePageReportStore, Subtype } from '../../store/PageReportStore';

export default function IssueReport() {
    return (
        <div
            className="flex flex-col rounded-lg border bg-gray-100 px-5 py-4 w-full h-96 gap-2">
            <div className='flex flex-row w-full h-16 items-start justify-start mx-2'>
                <h2 className='text-xl font-semibold '> Overall Report</h2>
            </div>
            <div className='flex flex-col relative mx-2 h-80 items-center justify-center '>
                <div className='flex flex-col gap-1 scrollbar-hide w-full overflow-y-scroll overflow-hidden h-80'>
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                    <IssueSubtype />
                </div>
            </div>
        </div>
    );
}