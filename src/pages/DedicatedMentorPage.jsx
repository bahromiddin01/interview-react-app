import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { supabase } from '../supabase/supabase'
import { InlineWidget } from 'react-calendly'
import { toast } from 'react-toastify'

export default function DedicatedMentorPage() {

    const navigate = useNavigate()

    const modalRef = useRef()
    const buttonRef = useRef()

    const [isOpen, setIsOpen] = useState(false)

    const handleLogOut = async () => {
        await supabase.auth.signOut()
        navigate('/')
    }

    useEffect(() => {

        const handleEventScheduled = async e => {
            if (e.data?.event === 'calendly.event_scheduled') {
                const API_TOKEN = 'eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzM1MTk0NjY0LCJqdGkiOiJhMGEzN2Y2Yy1lODY0LTQ4YjktOWZkMC1iM2M2MDU1NDhjZTEiLCJ1c2VyX3V1aWQiOiJlY2E0MzE2Zi1mNzc4LTRiODUtYmI1OS05NDRlOTA4MDAyMDAifQ.vAjtIFTAwkc46fKz1JH2kwXPkaM8tfyNv-awaNIDvO87jSLhjnS4rR7nVe7ZTzJTYt-3j8UnX8yl9ZCqs8qlRQ'

                const response = await fetch(e.data.payload.event.uri, {
                    headers: {
                        Authorization: `Bearer ${API_TOKEN}`,
                    }
                })

                const scheduledTime = await response.json()

                await supabase
                    .from('InterviewBooking')
                    .insert([
                        {
                            calendar_time: scheduledTime.resource.start_time,
                            type: 'mentor',
                        }
                    ])
                setTimeout(() => {
                    setIsOpen(false)
                    toast.success('Mentor booked successfully!')
                }, 1000);
            }
        }

        window.addEventListener('message', handleEventScheduled)

        window.addEventListener('click', e => {
            if (modalRef.current?.contains(e.target) || buttonRef.current?.contains(e.target)) return
            setIsOpen(false)
        })

        return () => {
            window.removeEventListener('message', handleEventScheduled)
        }
    }, [])

    return (
        <div>
            <div className={`mx-auto h-screen 4xl:container flex ${isOpen ? 'blur-[1px]' : ''}`}>
                <div className='flex flex-col flex-none justify-between bg-white px-6 py-8'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center gap-2'>
                            <img src={logo} alt='LogoImage' />
                            <h4 className='font-archivo font-bold text-lg'>InterviewPro</h4>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className='flex items-center gap-3 hover:bg-green-50 px-3 py-2 rounded-md'>
                                <i className='text-gray-500 text-lg fa-house fa-solid'></i>
                                <p className='font-inter font-semibold text-base'>Home</p>
                            </button>
                            <button
                                onClick={() => navigate('/history')}
                                className='flex items-center gap-3 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'
                            >
                                <i className='text-gray-500 text-lg fa-calendar fa-regular'></i>
                                <p className='font-inter font-semibold text-base'>Interviews history</p>
                            </button>
                            <button className='flex items-center gap-3 bg-green-50 px-3 py-2 rounded-md text-green-500 transition-all duration-200 ease-in-out'>
                                <i className='text-gray-500 text-lg fa-book-open fa-solid'></i>
                                <p className='font-inter font-semibold text-base'>Dedicated mentor</p>
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleLogOut}
                        className='flex items-center gap-2 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'
                    >
                        <i className='fa-right-from-bracket text-gray-500 text-lg fa-solid'></i>
                        <p className='font-inter font-semibold text-base'>Log out</p>
                    </button>
                </div>
                <div className='flex flex-col flex-grow gap-8 mx-12 my-16'>
                    <div className='flex flex-col gap-8 max-w-lg'>
                        <h3 className='font-inter font-semibold text-3xl'>Dedicated mentorship</h3>
                        <div className='flex items-center gap-4'>
                            <button
                                ref={buttonRef}
                                onClick={() => setIsOpen(true)}
                                className='flex items-center gap-2 bg-primaryGreen hover:bg-green-700 px-4 py-2 rounded-full transition-all duration-200 ease-in-out'
                            >
                                <i className='text-white fa-calendar fa-regular'></i>
                                <p className='font-inter font-semibold text-sm text-white'>Book a mentor</p>
                            </button>
                            <button className='flex items-center gap-2 border-2 hover:border-gray-400 bg-white px-4 py-2 rounded-full transition-all duration-200 ease-in-out'>
                                <i className='fa-file-invoice fa-solid'></i>
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
                            <p className='max-w-52 font-inter font-medium text-base text-center text-gray-600'>
                                You have no interviews coming up
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed inset-0 justify-center items-center bg-black bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}>
                <div ref={modalRef} className='bg-white shadow-lg p-6 rounded-lg w-full max-w-4xl h-[600px]'>
                    <InlineWidget
                        url="https://calendly.com/bahromiddinabduqaxxorov1604/interview-pro"
                        styles={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    )
}
