import React from 'react'
import PrimaryButton from '../../../components/PrimaryButton'
import HeaderCards from './HeaderCards'
import HeaderLogoContainer from './HeaderLogoContainer'

export default function HeaderSection() {

    return (
        <div className='flex flex-col items-center gap-16 my-20'>

            <div className='flex flex-col items-center gap-6 text-center w-[340px] md:w-[620px] xl:w-[740px]'>
                <h1 className='text-3xl md:text-5xl xl:text-6xl font-medium font-roboto tracking-tighter xl:leading-[62px]'>Where software engineering <span className='text-primaryGreen'>careers</span> are built</h1>
                <p className='text-xs md:text-lg font-normal font-roboto text-gray-600'>Prepare for technical interviews with industry professionals from top FAANG companies. Gain the confidence and skills you need to land your dream job.</p>

                <div className='flex flex-col md:flex-row gap-3'>
                    <PrimaryButton buttonName={'Apply now'} />
                    <button onClick={() => alert('This button is not working now.')} className='px-6 md:px-8 py-2 md:py-3 border border-black rounded-full text-xs md:text-base font-medium font-inter hover:text-green-700 hover:border-green-700'>Watch demo</button>
                </div>

            </div>
            <HeaderCards />
            <HeaderLogoContainer />
        </div>
    )
}
