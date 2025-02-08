import React from 'react';
import logoApple from '../assets/images/appleIcon.svg';
import logoGoogle from '../assets/images/googleIcon.svg';
import logoFaang from '../assets/images/logoFaang.svg';
import logoFacebook from '../assets/images/logoFacebook.svg';
import logoMicrosoft from '../assets/images/microsoftIcon.svg';

export default function InterviewTable({ bookingData }) {
    
    const interviewerImages = {
        'FAANg Interviewer': logoFaang,
        'Facebook Interviewer': logoFacebook,
        'Google Interviewer': logoGoogle,
        'Microsoft Interviewer': logoMicrosoft,
        'Apple Interviewer': logoApple,
    }

    return (
        <div className='flex flex-col'>
            <div className='top-0 z-50 sticky flex bg-white px-6 py-3 border-b rounded-t-xl'>
                <h5 className='w-80 font-inter font-medium text-darkGray text-xs'>Interview</h5>
                <h5 className='w-72 font-inter font-medium text-darkGray text-xs'>Focus</h5>
                <h5 className='w-36 font-inter font-medium text-darkGray text-xs'>Date</h5>
                <h5 className='w-28 font-inter font-medium text-darkGray text-xs'>Status</h5>
            </div>
            {bookingData.map((data, index) => (
                <div key={index} className='flex items-center px-6 py-4 border-b'>
                    <div className='flex items-center gap-3 w-80'>
                        <img className='w-8 h-8' src={interviewerImages[data.interviewer]} alt={`${data.interviewer} logo`} />
                        <div>
                            <h3 className='font-inter font-medium text-sm'>{data.interviewer}</h3>
                            <p className='font-inter font-normal text-darkGray text-sm'>{data.type}</p>
                        </div>
                    </div>
                    <p className='w-72 font-inter font-normal text-darkGray text-sm'>{data.interview_focus}</p>
                    <p className='w-36 font-inter font-normal text-darkGray text-sm'>
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
