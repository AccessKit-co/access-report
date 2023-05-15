export default function Issue() {

    return (
        <div className='flex flex-row rounded-lg border bg-gray-200 w-full h-8 justify-between transition-colors hover:border-gray-300 hover:dark:bg-neutral-800/30'>
            <div className='flex flex-row m-2 items-center justify-center'>
                <div className='flex h-full justify-start mx-1 items-center'>
                    <h2 className='text-l font-semibold'>Type</h2>
                </div>
                <div className='flex h-full justify-start mx-1 items-center'>
                    <h2 className='text-xl font-light'> | </h2>
                </div>
                <div className='flex items-center justify-start'>
                    <p className='text-sm font-light text-left truncate'>
                        This error occurs when there is missing alt-text on the page
                    </p>
                </div>
            </div>
        </div>
    )
}