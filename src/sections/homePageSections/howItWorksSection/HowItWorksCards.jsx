import React from 'react'
import PrimaryButton from '../../../components/PrimaryButton'

export default function HowItWorksCards({ title, description, imgSrc, imgAlt }) {
    return (
        <div className='flex flex-col md:flex-row gap-16 items-center justify-between bg-white border border-gray-300 p-4 md:p-8 rounded-3xl'>

            <div className='flex flex-col gap-3 md:gap-8 max-w-72 md:max-w-xs xl:max-w-lg'>
                <h3 className='text-xl md:text-2xl xl:text-4xl font-medium font-inter tracking-tighter text-secondaryGreen'>{title}</h3>
                <p className='text-sm md:text-sm xl:text-2xl font-normal font-inter text-gray-600'>{description}</p>
                <div>
                    <PrimaryButton buttonName={'Apply now'} />
                </div>
            </div>

            <div>
                <img src={imgSrc} alt={imgAlt} className='w-64 md:w-96 xl:w-auto' />
            </div>

        </div>
    )
}
