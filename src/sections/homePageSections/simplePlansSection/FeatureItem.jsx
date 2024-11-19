import React from 'react'
import markImage from '../../../assets/images/markImage.svg'

export default function FeatureItem({ feature }) {
    return (
        <div className='flex items-center gap-2 p-1 md:py-4 border-b border-b-gray-200'>
            <img src={markImage} alt="MarkImage" className='w-2 md:w-auto' />
            <p className='text-2xs md:text-xs lg:text-sm font-medium font-roboto'>{feature}</p>
        </div>
    )
}
