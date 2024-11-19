import React from 'react'

export default function WhyChooseUsRatingData({ title, info }) {
    return (
        <div className='max-w-56 flex flex-col gap-2 xl:gap-5'>
            <h3 className='text-xl md:text-3xl xl:text-4xl font-medium font-roboto text-white'>{title}</h3>
            <p className='text-xs xl:text-sm font-medium font-roboto text-fadedWhite'>{info}</p>
        </div>
    )
}
