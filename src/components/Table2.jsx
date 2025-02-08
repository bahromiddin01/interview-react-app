import React from 'react'
import MentorTable from './MentorTable'
import EmptyTable from './EmptyTable'

export default function Table2({data, loading}) {
    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-inter font-medium text-xl'>Upcoming interviews</h4>
            <div className='flex flex-col border-2 bg-[#FAFAF9] rounded-xl max-w-3xl h-[310px] overflow-auto'>
                <div className='relative flex-1 overflow-auto'>
                    {loading ? <div className='flex justify-center items-center h-full'>
                        <div className='loader'></div>
                    </div> : <>
                        {data?.length !== 0 ? <MentorTable bookingData={data} /> : <EmptyTable />}
                    </>}
                </div>
            </div>
        </div>
    )
}
