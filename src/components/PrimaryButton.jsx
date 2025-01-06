import React from 'react'

export default function PrimaryButton({ buttonName, onClick }) {

    return <button onClick={onClick} className='bg-primaryGreen hover:bg-green-700 px-6 md:px-8 py-2 md:py-3 rounded-full font-inter font-medium text-white text-xs md:text-base duration-200'>{buttonName}</button>
}
