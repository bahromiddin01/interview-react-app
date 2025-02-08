import React from 'react'

export default function MentorTable({ bookingData }) {
    return (
        <div className='flex flex-col'>
            <div className='top-0 z-50 sticky flex bg-white px-6 py-3 border-b rounded-t-xl'>
                <h5 className='w-72 font-inter font-medium text-darkGray text-xs'>Mentor name</h5>
                <h5 className='w-48 font-inter font-medium text-darkGray text-xs'>Date</h5>
                <h5 className='w-28 font-inter font-medium text-darkGray text-xs'>Status</h5>
            </div>
            {bookingData.map((data, index) => (
                <div key={index} className='flex items-center px-6 py-4 border-b'>
                    <div className='w-72'>
                        <h3 className='font-inter font-medium text-sm'>{data.mentor_name}</h3>
                    </div>
                    <p className='w-48 font-inter font-normal text-darkGray text-sm'>
                        {new Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        }).format(new Date(data.calendar_time))}
                    </p>
                    <div className='w-28'>
                        <p className='bg-orange-100 px-2 py-0.5 rounded-2xl w-fit font-inter font-medium text-center text-orange-700 text-xs'>Pending</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
