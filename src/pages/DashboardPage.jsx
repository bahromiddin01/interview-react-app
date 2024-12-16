import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.svg'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {

    const navigate = useNavigate()

    const [userName, setUserName] = useState('')

    const handleLogOut = async e => {
        try {
            const { error } = await supabase.auth.signOut()

            if (error) {
                console.error('Error:', error.message)
            } else {
                navigate('/')
            }
        } catch (error) {
            console.error('Error:', error.message)
        }
    }

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const { data, error } = await supabase.auth.getUser()

                if (error) {
                    console.error('Error fetching user:', error.message)
                    navigate('/login')
                }

                if (!data.user) {
                    navigate('/login')
                } else {
                    setUserName(data.user.user_metadata.name)
                }

            } catch (error) {
                console.error('Error:', error.message)
                navigate('/login')
            }
        }
        fetchUser()
    }, [navigate])

    return (
        <div className='flex mx-auto h-screen 4xl:container'>
            <div className='flex flex-col flex-none justify-between bg-white px-6 py-8'>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="LogoImage" />
                        <h4 className='font-archivo font-bold text-lg'>InterviewPro</h4>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className='flex items-center gap-3 bg-green-200 px-3 py-2 rounded-md'>
                            <i className="text-gray-500 text-lg fa-house fa-solid"></i>
                            <p className='font-inter font-semibold text-base'>Home</p>
                        </button>
                        <button onClick={() => navigate('/history')} className='flex items-center gap-3 hover:bg-green-200 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
                            <i className="text-gray-500 text-lg fa-calendar fa-regular"></i>
                            <p className='font-inter font-semibold text-base'>Interviews history</p>
                        </button>
                        <button className='flex items-center gap-3 hover:bg-green-200 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
                            <i className="text-gray-500 text-lg fa-book-open fa-solid"></i>
                            <p className='font-inter font-semibold text-base'>Dedicated mentor</p>
                        </button>
                    </div>
                </div>
                <button onClick={handleLogOut} className='flex items-center gap-2 hover:bg-green-200 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
                    <i className="fa-right-from-bracket text-gray-500 text-lg fa-solid"></i>
                    <p className='font-inter font-semibold text-base'>Log out</p>
                </button>
            </div>
            <div className='flex flex-col flex-grow gap-8 mx-12 my-16'>
                <div className='flex flex-col gap-3 max-w-lg'>
                    <h3 className='font-inter font-semibold text-3xl'>Welcome back, {userName}</h3>
                    <p className='font-inter font-normal text-base text-gray-500'>Book interviews with top tech engineers, receive expert feedback, and elevate your performance.</p>
                    <div className='flex items-center gap-4'>
                        <button className='flex items-center gap-2 bg-primaryGreen hover:bg-green-700 px-4 py-2 rounded-full transition-all duration-200 ease-in-out'>
                            <i className='text-white fa-calendar fa-regular'></i>
                            <p className='font-inter font-semibold text-sm text-white'>Book a mentor</p>
                        </button>
                        <button className='flex items-center gap-2 border-2 hover:border-gray-400 bg-white px-4 py-2 rounded-full transition-all duration-200 ease-in-out'>
                            <i className="fa-file-invoice fa-solid"></i>
                            <p className='font-inter font-semibold text-sm'>Update resume</p>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='font-inter font-medium text-xl'>Interview overview</h4>
                    <div className='flex flex-col items-center gap-3 border-2 bg-[#FAFAF9] py-16 xl:py-24 rounded-xl'>
                        <div>
                            <i className='border-2 border-gray-300 bg-white px-3 py-1.5 rounded-lg text-3xl text-gray-700 fa-calendar fa-regular'></i>
                        </div>
                        <p className='max-w-52 font-inter font-medium text-base text-center text-gray-600'>You have no interviews coming up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
