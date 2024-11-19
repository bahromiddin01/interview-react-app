import React from 'react'

export default function OurClientsLogos({ imgSrc }) {
    return (
        <img src={imgSrc} alt='LogoImage' className='filter grayscale hover:grayscale-0 h-6 md:h-auto' />
    )
}
