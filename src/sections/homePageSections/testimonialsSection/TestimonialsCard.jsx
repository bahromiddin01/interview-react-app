import React from 'react'

export default function TestimonialsCard({ imageUrl, name, job, comment }) {
    return (
        <div className='flex flex-col gap-3 md:gap-4 xl:gap-6 w-[200px] md:w-[370px] xl:w-[420px] px-2 md:px-4 xl:px-6 py-2 md:py-4 xl:py-6 border border-gray-300 rounded-xl md:rounded-3xl bg-white'>
            <div className='flex items-center gap-4'>
                <img src={imageUrl} alt="UserImage" className='w-8 md:w-auto' />
                <div className='flex flex-col gap-1'>
                    <h4 className='text-2xs md:text-sm font-medium font-inter'>{name}</h4>
                    <p className='text-2xs md:text-sm font-normal font-inter text-gray-500'>{job}</p>
                    <div className='text-primaryGreen text-2xs md:text-base'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
            <p className='text-2xs md:text-xs xl:text-base font-normal font-inter'>{comment}</p>
        </div>

    )
}
