import React from 'react'
import howItWorksImage1 from '../../../assets/images/howItWorksImage1.svg'
import howItWorksImage2 from '../../../assets/images/howItWorksImage2.svg'
import howItWorksImage3 from '../../../assets/images/howItWorksImage3.svg'
import howItWorksImage4 from '../../../assets/images/howItWorksImage4.svg'
import HowItWorksCards from './HowItWorksCards'

export default function HowItWorksSection() {

    const cardImageData = [
        {
            id: 1,
            title: 'Choose Your Interview Focus',
            subtitle: 'Tailor your mock interview to your needs, focusing on coding, system design, or behavioral questions.',
            src: howItWorksImage1,
            alt: 'CardImage',
        },
        {
            id: 2,
            title: 'Select Your Interviewer’s Background',
            subtitle: 'Pick an interviewer with experience at top tech companies, aligned with your career goals.',
            src: howItWorksImage2,
            alt: 'CardImage',
        },
        {
            id: 3,
            title: 'Schedule at Your Convenience',
            subtitle: 'Book your interview at a time that suits you, with flexible scheduling to fit your routine.',
            src: howItWorksImage3,
            alt: 'CardImage',
        },
        {
            id: 4,
            title: 'Get Detailed Feedback',
            subtitle: "You'll receive personalized feedback highlighting strengths, areas for improvement, and steps to enhance your skills.",
            src: howItWorksImage4,
            alt: 'CardImage',
        },
    ]
    return (
        <div className='4xl:container mx-auto'>
            <div id='howItWorks' className='flex flex-col gap-10 my-20'>
                <div className='flex justify-center'>
                    <h1 className='text-3xl md:text-4xl xl:text-5xl font-medium font-roboto text-center leading-8 md:leading-[60px] max-w-xs md:max-w-lg'>How it works here at <span className='text-primaryGreen'>interviewPro</span></h1>
                </div>

                <div className='flex flex-col gap-6 md:gap-8 mx-4 md:mx-16 lg:mx-24 2xl:mx-32'>
                    {cardImageData.map((img) => <HowItWorksCards title={img.title} description={img.subtitle} imgSrc={img.src} imgAlt={img.alt} key={img.id} />)}
                </div>
            </div>
        </div>
    )
}
