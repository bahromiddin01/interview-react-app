import React from 'react'

export default function PrimaryButton({ buttonName, style }) {
    return <button className={`md:px-8 md:py-3 px-6 py-2 bg-primaryGreen rounded-full text-xs md:text-base font-medium font-inter text-white hover:bg-green-700 ${style}`} onClick={() => alert('This button is not working now.')}>{buttonName}</button>
}
