import IssueSubtype from './IssueSubtype';

const IssueReport = () => (
    <div
        className="flex flex-col rounded-lg border bg-gray-100 px-5 py-4 w-full h-96">
        <div className='flex flex-row w-full h-16 items-center justify-start mx-3 mb-3'>
            <h2 className='text-xl font-semibold '> Overall Report</h2>
        </div>
        <div className='relative flex mx-1 items-center justify-center'>
            <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip scrollbar-hide w-full h-80'>
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

export default IssueReport;