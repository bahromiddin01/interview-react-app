import React from 'react'
import InterviewTable from './InterviewTable'
import EmptyTable from './EmptyTable'

export default function Table({ loading, data }) {
    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-inter font-medium text-xl'>Upcoming interviews</h4>
            <div className='flex flex-col border-2 bg-[#FAFAF9] rounded-xl max-w-4xl h-[310px] overflow-auto'>
                <div className='relative flex-1 overflow-auto'>
                    {loading ? <div className='flex justify-center items-center h-full'>
                        <div className='loader'></div>
                    </div> : <>
                        {data?.length !== 0 ? <InterviewTable bookingData={data} /> : <EmptyTable />}
                    </>}
                </div>
            </div>
        </div>
    )
}
