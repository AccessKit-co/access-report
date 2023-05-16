type IssueProps = {
    text: string;
};

export default function Issue(props: IssueProps) {
    const { text } = props;

    return (
        <div className='flex flex-row rounded-lg border bg-gray-200 w-full h-8 justify-between transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30'>
            <div className='flex flex-row m-2 items-center justify-start'>
                <p className='text-sm font-light text-left truncate'>{text}</p>
            </div>
        </div>
    );
}
