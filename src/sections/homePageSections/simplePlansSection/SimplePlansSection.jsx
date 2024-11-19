import React from 'react'
import SimplePlansCard from './SimplePlansCard'

export default function SimplePlansSection() {

    const mainInfo = [
        {
            title1: 'Pro',
            title2: '$2500',
            text1: 'Pay monthly, cancel anytime',
            text2: 'From',
            text3: 'Price in USD per month',
            bgColor: 'bg-customGray',
            titleColor: 'text-black',
            textColor: 'text-gray-700',
            border: 'border-2 border-gray-200',
            feature1: "Ideal if you're cramming for booked interviews",
            feature2: 'No work eligibility / experience requirements',
            feature3: 'Flat monthly fee',
        },
        {
            title1: 'Unlimited',
            title2: '$5000',
            text1: 'Get unlimited support until you land a role, then pay based on the gain we help you achieve.',
            text2: 'Starts at',
            text3: 'down, then portion of salary gain',
            bgColor: 'bg-secondaryGreen',
            titleColor: 'text-white',
            textColor: 'text-gray-300',
            border: 'border-none',
            feature1: "Ideal if you're earlier in your job hunt",
            feature2: 'Must be eligible to work in U.S. or Canada',
            feature3: 'Incentive aligned, pay based on your salary gain',
        },
    ]

    return (
        <div className='4xl:container mx-auto'>
            <div id='membership' className='flex flex-col items-center gap-7 my-20'>
                <div className='flex flex-col items-center gap-2 md:gap-4 max-w-[340px] md:max-w-lg text-center'>
                    <h1 className='md:text-4xl lg:text-5xl font-medium font-roboto'>Simple plans for all</h1>
                    <p className='text-xs md:text-base lg:text-lg font-normal font-roboto'>Interview pro features plans to accommodate everyone from fresh graduates and junior engineers to seasoned experts.</p>
                </div>
                <div className='flex flex-col items-center gap-4 md:gap-8'>
                    {mainInfo.map((data, index) => <SimplePlansCard title1={data.title1} title2={data.title2} text1={data.text1} text2={data.text2} text3={data.text3} bgColor={data.bgColor} titleColor={data.titleColor} textColor={data.textColor} border={data.border} feature1={data.feature1} feature2={data.feature2} feature3={data.feature3} key={index} />)}
                </div>
            </div>
        </div>
    )
}
