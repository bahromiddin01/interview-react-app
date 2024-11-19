import React from 'react'
import WhyChooseUsRatingData from './WhyChooseUsRatingData'

export default function WhyChooseUsSection() {

    const ratingData = [
        {
            id: 1,
            title: '$500K',
            info: 'Highest annual salary achieved by a student using InterviewPro.',
        },
        {
            id: 2,
            title: '84%',
            info: 'Success rate in landing a job after completing multiple mock interviews.',
        },
        {
            id: 3,
            title: '41.2%',
            info: 'Average increase in promotion rate within the first year for candidates who used InterviewPro.',
        },
        {
            id: 4,
            title: '$15,000+',
            info: 'Average increase in starting salary after preparing with InterviewPro.',
        },
    ]

    return (
        <div className='4xl:container mx-auto'>
            <div className='bg-secondaryGreen flex flex-col items-center gap-16 xl:gap-24 px-8 md:px-16 xl:px-20 py-8 md:py-16 xl:py-24 md:mx-4 xl:mx-20 rounded-xl md:rounded-3xl my-20'>
                <div className='flex flex-col gap-4 md:gap-6 xl:gap-8 items-center md:max-w-lg'>
                    <h2 className='text-white text-center'>Why choose us</h2>
                    <p className='text-gray-200 text-sm font-medium font-roboto text-center'>Get expert feedback, achieve higher salaries, and succeed faster with InterviewPro.</p>
                    <div className='flex gap-8 items-center bg-customGreen rounded-full px-4 md:px-8 py-2 md:py-3'>
                        <div className='flex gap-1 text-yellow-500 text-2xs md:text-lg'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className='text-fadedWhite text-2xs md:text-sm font-semibold font-roboto'>4.97/5 from over 800 reviews</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-8 md:flex md:gap-20'>
                    {ratingData.map((data) => <WhyChooseUsRatingData title={data.title} info={data.info} key={data.id} />)}
                </div>
            </div>
        </div>
    )
}
