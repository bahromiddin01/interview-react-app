import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import userImage1 from '../../../assets/images/testimonialsImage1.svg'
import userImage2 from '../../../assets/images/testimonialsImage2.svg'
import userImage3 from '../../../assets/images/testimonialsImage3.svg'

export default function TestimonialsSection() {

    const testimonialsData = [
        {
            image: userImage1,
            name: 'Jordan K.',
            job: 'Software Developer',
            comment: '"The tailored feedback and step-by-step advice I got from InterviewPro helped me refine my skills and approach. I highly recommend it to anyone serious about acing their tech interviews."',
        },
        {
            image: userImage2,
            name: 'Alex J.',
            job: 'Software Engineer',
            comment: '"InterviewPro was a game-changer for me. The feedback from an actual senior engineer gave me invaluable insights into my interview skills. I went from feeling unsure to confident and landed my dream job at a top tech company!"',
        },
        {
            image: userImage3,
            name: 'Days Brewing Rob Johns',
            job: 'Finance Director',
            comment: '"The mock interviews were incredibly realistic and helped me identify areas where I needed improvement. The actionable feedback I received was clear and practical, making a huge difference in my preparation."',
        },
    ]

    const testimonialsDataList = [...testimonialsData, ...testimonialsData, ...testimonialsData]

    return (
        <div id='testimonials' className='flex flex-col gap-6 md:gap-12 my-20'>
            <div className='px-8 md:px-12 xl:px-16'>
                <h3 className='md:text-3xl xl:text-4xl font-medium font-roboto tracking-tight max-w-60 md:max-w-md xl:max-w-lg'>Here's what our customers have been saying</h3>
            </div>

            <div className='flex flex-col gap-3 md:gap-6'>
                <div className='flex gap-2 md:gap-4 overflow-hidden'>
                    <div className='flex gap-2 md:gap-4 w-fit rightToLeft'>
                        {testimonialsDataList.map((data, index) => <TestimonialsCard imageUrl={data.image} name={data.name} job={data.job} comment={data.comment} key={index} />)}
                    </div>
                    <div className='flex gap-2 md:gap-4 w-fit rightToLeft'>
                        {testimonialsDataList.map((data, index) => <TestimonialsCard imageUrl={data.image} name={data.name} job={data.job} comment={data.comment} key={index} />)}
                    </div>
                </div>

                <div className='flex gap-2 md:gap-4 overflow-hidden'>
                    <div className='flex gap-2 md:gap-4 w-fit leftToRight'>
                        {testimonialsDataList.map((data, index) => <TestimonialsCard imageUrl={data.image} name={data.name} job={data.job} comment={data.comment} key={index} />)}
                    </div>
                    <div className='flex gap-2 md:gap-4 w-fit leftToRight'>
                        {testimonialsDataList.map((data, index) => <TestimonialsCard imageUrl={data.image} name={data.name} job={data.job} comment={data.comment} key={index} />)}
                    </div>
                </div>
            </div>

        </div>
    )
}
