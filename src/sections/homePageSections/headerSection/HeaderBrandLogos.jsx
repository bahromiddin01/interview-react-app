import React from 'react'

export default function HeaderBrandLogos({ imageSrc, imageAlt }) {
    return <img src={imageSrc} alt={imageAlt} className='h-8 lg:h-9 xl:h-auto' />
}
