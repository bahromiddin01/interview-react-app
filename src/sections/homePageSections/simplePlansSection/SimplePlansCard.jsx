import React from 'react'
import FeatureItem from './FeatureItem'
import PrimaryButton from '../../../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'

export default function SimplePlansCard({ title1, title2, text1, text2, text3, bgColor, titleColor, textColor, border, feature1, feature2, feature3 }) {

    const navigate = useNavigate()

    return (
        <div className={`${bgColor} ${border} p-2 md:p-4 lg:p-6 rounded-lg md:rounded-2xl lg:rounded-3xl mx-3 md:mx-10 lg:mx-16 xl:mx-96 flex justify-between max-w-sm md:max-w-2xl lg:max-w-5xl w-full`}>
            <div className='flex flex-col gap-6 md:gap-16 lg:gap-24'>
                <div className='flex flex-col gap-4 max-w-80'>
                    <h2 className={titleColor}>{title1}</h2>
                    <p className={`${textColor} text-sm font-medium font-roboto hidden md:inline-block`}>{text1}</p>
                </div>
                <div className='flex flex-col gap-1 md:gap-6'>
                    <p className={`${textColor} text-2xs md:text-xs font-semibold font-roboto`}>{text2}</p>
                    <h2 className={`${titleColor}`}>{title2}</h2>
                    <p className={`${textColor} text-2xs md:text-xs font-medium font-roboto max-w-24 md:max-w-none`}>{text3}</p>
                    <div>
                        <PrimaryButton buttonName={'Apply now'} onClick={() => navigate('/signup')} />
                    </div>
                </div>
            </div>
            <div className='bg-white flex flex-col gap-1 p-2 md:py-4 lg:py-6 md:px-6 lg:px-10 rounded-lg md:rounded-xl'>
                <h4 className='text-2xs md:text-sm lg:text-base font-semibold font-roboto'>Features:</h4>
                <div className='flex flex-col'>
                    <FeatureItem feature={feature1} />
                    <FeatureItem feature={feature2} />
                    <FeatureItem feature={feature3} />
                </div>
            </div>
        </div>
    )
}
