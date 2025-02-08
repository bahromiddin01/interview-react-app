import React from 'react'
import HeaderBrandLogos from './HeaderBrandLogos'
import logoSpotify from '../../../assets/images/logoSpotify.svg'
import logoApple from '../../../assets/images/logoApple.svg'
import logoGoogle from '../../../assets/images/logoGoogle.svg'
import logoAmazon from '../../../assets/images/logoAmazon.svg'
import logoMicrosoft from '../../../assets/images/logoMicrosoft.svg'

export default function HeaderLogoContainer() {

    const logosData = [
        { src: logoSpotify, alt: 'LogoSpotify', },
        { src: logoApple, alt: 'LogoApple', },
        { src: logoGoogle, alt: 'LogoGoogle', },
        { src: logoAmazon, alt: 'LogoAmazon', },
        { src: logoMicrosoft, alt: 'LogoMicrosoft', },
    ]

    const logoList = [...logosData, ...logosData]

    return (
        <div className='flex lg:flex-row flex-col items-center gap-4 md:gap-6 lg:gap-16 xl:gap-32 border-y border-y-gray-300 lg:mx-12 xl:mx-24 px-4'>

            <h4 className='font-medium font-roboto text-sm md:text-xl whitespace-nowrap'>Experts from the top tech companies</h4>

            <div className='relative flex whitespace-nowrap overflow-hidden logos'>
                <div className='flex gap-8 md:gap-16 py-3 md:py-4 lg:py-6 logoSlide'>
                    {logoList.map((image, index) => <HeaderBrandLogos imageSrc={image.src} imageAlt={image.alt} key={index} />)}
                </div>
            </div>

        </div>
    )
}
