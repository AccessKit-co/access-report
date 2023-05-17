import IssueReport from './IssueReport/IssueReport';
import IssueTypes from './TypeOfIssue/IssueTypes';


const PageReport = () => (
    <div className='flex flex-col gap-4 w-full'>
        <IssueTypes />
        <IssueReport />
    </div>
);

export default PageReport;