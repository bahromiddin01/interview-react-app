import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrimaryButton({ buttonName }) {

    const navigate = useNavigate()

    return <button className='md:px-8 md:py-3 px-6 py-2 bg-primaryGreen rounded-full text-xs md:text-base font-medium font-inter text-white hover:bg-green-700' onClick={() => navigate('/signup')}>{buttonName}</button>
}
