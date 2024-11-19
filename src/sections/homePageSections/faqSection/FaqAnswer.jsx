import React from 'react'

export default function FaqAnswer({ open, answer }) {
    return <p className={'text-2xs md:text-base font-normal font-inter text-gray-600 px-2 md:px-6 py-2 md:py-4 border-y border-t-gray-300 rounded-b-xl ' + (open ? '' : 'hidden')}>{answer}</p>
}
