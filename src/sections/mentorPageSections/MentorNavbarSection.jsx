import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

export default function MentorNavbarSection({ isOpen }) {

    const navigate = useNavigate()

    return (
        <div className={`flex flex-col flex-none justify-between bg-white px-6 py-8 w-[312px] h-screen ${isOpen ? 'blur-[1px]' : ''}`}>
            <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="LogoImage" />
                    <h3 className='font-archivo font-bold text-lg'>InterviewPro</h3>
                </div>
                <div className='flex flex-col gap-2'>
                    <button onClick={() => navigate('/dashboard')} className='flex items-center gap-3 hover:bg-green-50 px-3 py-2 rounded-md'>
                        <i className="text-gray-500 text-lg fa-house fa-solid"></i>
                        <p className='font-inter font-semibold text-base'>Home</p>
                    </button>
                    <button onClick={() => navigate('/history')} className='flex items-center gap-3 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
                        <i className="text-gray-500 text-lg fa-calendar fa-regular"></i>
                        <p className='font-inter font-semibold text-base'>Interviews history</p>
                    </button>
                    <button className='flex items-center gap-3 bg-green-50 px-3 py-2 rounded-md text-green-500 transition-all duration-200 ease-in-out'>
                        <i className="text-gray-500 text-lg fa-book-open fa-solid"></i>
                        <p className='font-inter font-semibold text-base'>Dedicated mentor</p>
                    </button>
                </div>
            </div>

            <button className='flex items-center gap-2 hover:bg-green-50 px-3 py-2 rounded-md w-full transition-all duration-200 ease-in-out'>
                <i className="fa-right-from-bracket text-gray-500 text-lg fa-solid"></i>
                <p className='font-inter font-semibold text-base'>Log out</p>
            </button>
        </div>
    )
}
