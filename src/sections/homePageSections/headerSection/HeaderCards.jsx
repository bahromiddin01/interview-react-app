import React from 'react'
import headerImage1 from '../../../assets/images/headerImage1.svg'
import headerImage2Vector from '../../../assets/images/headerImage2Vector.svg'
import headerImage3 from '../../../assets/images/headerImage3.svg'

export default function HeaderCards() {
    return (
        <div className='flex justify-center'>
            <div className='flex md:flex-row flex-col justify-center gap-2'>
                <div className='flex gap-2'>
                    <img src={headerImage1} alt="" className='h-44 md:h-52 lg:h-72 xl:h-auto' />
                    <div className='relative flex flex-col justify-between bg-secondaryGreen p-4 lg:p-6 rounded-xl md:rounded-3xl w-36 md:w-44 lg:w-60 xl:w-80 overflow-hidden'>
                        <img src={headerImage2Vector} alt="" className='right-0 bottom-0 absolute' />
                        <h2 className='text-white'>500+</h2>
                        <p className='font-medium font-roboto text-2xs text-gray-300 lg:text-sm'>Helped 500+ students to land their dream job in 2024.</p>
                    </div>
                </div>
                <div className='relative'>
                    <p className='bottom-4 xl:bottom-6 left-4 absolute bg-fadedWhite px-3 lg:px-6 py-2 lg:py-3 rounded-md lg:rounded-xl w-52 md:w-64 lg:w-96 font-medium font-roboto text-2xs text-gray-500 lg:text-sm'>World-class mentorship from senior FAANG engineers for students to land their next dream role</p>
                    <img src={headerImage3} alt="" className='w-80 md:w-auto h-52 md:h-52 lg:h-72 xl:h-auto' />
                </div>
            </div>
        </div>
    )
}
