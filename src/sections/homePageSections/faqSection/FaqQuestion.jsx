import React from 'react'
import { useState } from 'react'
import FaqAnswer from './FaqAnswer'

export default function FaqQuestion({ question, answer }) {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex flex-col bg-white border border-gray-300 rounded-lg md:rounded-xl overflow-hidden'>
            <button className='flex justify-between items-center w-full border-y rounded-t-xl border-b-gray-300 pl-2 md:pl-4 pr-12 py-1 md:py-2' onClick={() => setIsOpen(!isOpen)}>
                <h4 className='text-2xs md:text-base font-medium font-inter'>{question}</h4>
                {isOpen ? <i className="fa-solid fa-minus text-sm md:text-2xl"></i> : <i className="fa-solid fa-plus text-sm md:text-2xl text-primaryGreen"></i>}
            </button>
            <FaqAnswer open={isOpen} answer={answer} />
        </div>
    )
}
