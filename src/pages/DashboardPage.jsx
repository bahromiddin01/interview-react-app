import React, { useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {

    const navigate = useNavigate()

    const handleLogOut = async e => {
        try {
            const { error } = await supabase.auth.signOut()

            if (error) {
                console.error('Error:', error.message)
            } else {
                alert('You logged out')
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
                }

            } catch (error) {
                console.error('Error:', error.message)
                navigate('/login')
            }
        }
        fetchUser()
    }, [navigate])

    return (
        <div className='flex h-screen 4xl:container mx-auto'>
            <div className='flex flex-col justify-between flex-none py-8 px-6 bg-white'>
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="LogoImage" />
                        <h4 className='text-lg font-bold font-archivo'>InterviewPro</h4>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className='flex items-center gap-3 bg-green-200 py-2 px-3 rounded-md'>
                            <i className="fa-solid fa-house text-lg text-gray-500"></i>
                            <p className='text-base font-semibold font-inter'>Home</p>
                        </button>
                        <button onClick={() => navigate('/history')} className='flex items-center gap-3 py-2 px-3 rounded-md hover:bg-green-200 transition-all duration-200 ease-in-out'>
                            <i className="fa-regular fa-calendar text-lg text-gray-500"></i>
                            <p className='text-base font-semibold font-inter'>Interviews history</p>
                        </button>
                        <button className='flex items-center gap-3 py-2 px-3 rounded-md hover:bg-green-200 transition-all duration-200 ease-in-out'>
                            <i className="fa-solid fa-book-open text-lg text-gray-500"></i>
                            <p className='text-base font-semibold font-inter'>Dedicated mentor</p>
                        </button>
                    </div>
                </div>
                <button onClick={handleLogOut} className='flex items-center gap-2 py-2 px-3 rounded-md hover:bg-green-200 transition-all duration-200 ease-in-out'>
                    <i className="fa-solid fa-right-from-bracket text-lg text-gray-500"></i>
                    <p className='text-base font-semibold font-inter'>Log out</p>
                </button>
            </div>
            <div className='flex flex-col gap-8 flex-grow mx-12 my-16'>
                <div className='flex flex-col gap-3 max-w-lg'>
                    <h3 className='text-3xl font-semibold font-inter'>Welcome back, Michael</h3>
                    <p className='text-base font-normal font-inter text-gray-500'>Book interviews with top tech engineers, receive expert feedback, and elevate your performance.</p>
                    <div className='flex items-center gap-4'>
                        <button className='flex items-center gap-2 py-2 px-4 bg-primaryGreen hover:bg-green-700 rounded-full transition-all duration-200 ease-in-out'>
                            <i className='fa-regular fa-calendar text-white'></i>
                            <p className='text-sm font-semibold font-inter text-white'>Book a mentor</p>
                        </button>
                        <button className='flex items-center gap-2 py-2 px-4 rounded-full bg-white border-2 hover:border-gray-400 transition-all duration-200 ease-in-out'>
                            <i className="fa-solid fa-file-invoice"></i>
                            <p className='text-sm font-semibold font-inter'>Update resume</p>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h4 className='text-xl font-medium font-inter'>Interview overview</h4>
                    <div className='flex flex-col items-center gap-3 bg-[#FAFAF9] border-2 rounded-xl py-16 xl:py-24'>
                        <div>
                            <i className='fa-regular fa-calendar bg-white py-1.5 px-3 border-2 border-gray-300 rounded-lg text-gray-700 text-3xl'></i>
                        </div>
                        <p className='max-w-52 text-base font-medium font-inter text-gray-600 text-center'>You have no interviews coming up</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
