import React from 'react'

export default function FooterLink({ linkHref, linkName }) {
    return <a href={linkHref} className='text-base font-semibold font-inter text-gray-600 hover:text-green-700'>{linkName}</a>
}
