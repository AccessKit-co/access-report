import IssueSubtype from './IssueSubtype';

export default function IssueReport() {
    return (
        <div
            className="flex flex-col rounded-lg border bg-gray-100 px-5 py-4 w-full'">
            <div className='flex flex-row w-full h-1/6 items-center justify-start mx-3 mb-3'>
                <h2 className='text-xl font-semibold '> Issue Report </h2>
            </div>
            <div className='relative flex mx-1 items-center justify-center'>
                <div className='flex flex-col gap-1 overflow-y-scroll overflow-x-clip w-full h-64'>
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