import React from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import largeVectorImage from '../../../assets/images/readyToAceLargeVectorImage.svg'
import smallVectorImage from '../../../assets/images/readyToAceSmallVectorImage.svg'

export default function ReadyToAceSection() {
    return (
        <div className='flex flex-col gap-3 md:gap-6 mx-2 sm:mx-10 md:mx-12 xl:mx-28 py-8 md:py-24 px-5 md:px-16 rounded-2xl md:rounded-3xl bg-secondaryGreen relative my-20'>
            <h1 className='text-3xl md:text-5xl xl:text-[60px] font-medium font-roboto text-white leading-8 md:leading-[70px] max-w-2xl'>Ready to Ace Your Next <span className='text-primaryGreen'>Tech Interview?</span></h1>
            <p className='text-xs md:text-xl font-normal font-inter text-gray-300 max-w-72 md:max-w-md'>Join InterviewPro today and start your journey toward landing your dream job.</p>
            <div>
                <PrimaryButton buttonName={'Apply now'} />
            </div>
            <div>
                <img src={largeVectorImage} alt="VectorImage" className='absolute hidden md:inline-block bottom-0 right-0 md:max-w-xl xl:max-w-none' />
                <img src={smallVectorImage} alt="VectorImage" className='absolute inline-block md:hidden bottom-0 right-0' />
            </div>
        </div>
    )
}
