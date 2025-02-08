import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { supabase } from '../supabase/supabase'
import faangLogo from '../assets/images/logoFaang.svg'
import facebookLogo from '../assets/images/logoFacebook.svg'
import googleLogo from '../assets/images/googleIcon.svg'
import microsoftLogo from '../assets/images/microsoftIcon.svg'
import appleLogo from '../assets/images/appleIcon.svg'

export default function InterviewBookingModal({ setIsOpen, modalRef, fetchBookingData, setSuccess }) {

    const [interviewFocus, setInterviewFocus] = useState('')
    const [interviewer, setInterviewer] = useState('')
    const [userId, setUserId] = useState('')

    const bookingData = [
        { img: faangLogo, name: 'FAANg Interviewer', title: 'FAANg Interviewer' },
        { img: facebookLogo, name: 'Facebook Interviewer', title: 'Meta (Facebook) interviewer' },
        { img: googleLogo, name: 'Google Interviewer', title: 'Google Interviewer' },
        { img: microsoftLogo, name: 'Microsoft Interviewer', title: 'Microsoft Interviewer' },
        { img: appleLogo, name: 'Apple Interviewer', title: 'Apple Interviewer' },
    ]

    useEffect(() => {
        const handleEventScheduled = async e => {
            if (e.data.event === 'calendly.event_scheduled') {
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
                            interview_focus: interviewFocus,
                            interviewer: interviewer,
                            calendar_time: scheduledTime.resource.start_time,
                            type: 'Mock interview',
                            user_id: userId
                        }
                    ])

                setTimeout(() => {
                    setIsOpen(false)
                    setSuccess(true)
                    fetchBookingData()
                }, 1000)
            }
        }

        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser()
            setUserId(data.user?.id)
        }

        fetchUser()

        window.addEventListener('message', handleEventScheduled)

        return () => {
            window.removeEventListener('message', handleEventScheduled)
        }
    })

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
            <div ref={modalRef} className='flex justify-center items-center gap-4 bg-white shadow-lg mx-36 p-6 rounded-lg w-fit h-[600px]'>
                <div className='flex flex-col flex-none gap-4 w-[386px]'>
                    <li className='font-inter font-semibold text-2xl'>Interview booking</li>
                    <div className='flex flex-col gap-2'>
                        <li className='font-inter font-medium text-lg'>Interview Focus</li>
                        <select onChange={e => setInterviewFocus(e.target.value)} defaultValue='' name="interviewFocus" className='border-gray-300 shadow-sm px-3 py-2 border rounded-lg w-full outline-none'>
                            <option value="" disabled>Select</option>
                            <option value="Algorithms and data structures">Algorithms and Data Structures</option>
                            <option value="Systems design">Systems Design</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <li className='font-inter font-medium text-lg'>Interviewer background</li>
                        <div className='flex flex-col gap-2'>
                            {bookingData.map((data, index) => (
                                <label key={index} htmlFor={data.name} className={`flex ${interviewer === data.name ? 'border-green-500' : ''} justify-between items-center px-4 py-2.5 border rounded-xl transition-colors cursor-pointer`}>
                                    <div className="flex items-center gap-3">
                                        <img src={data.img} alt="LogoImage" className="w-7 h-7" />
                                        <p className="font-inter font-medium text-base text-darkBlue">{data.title}</p>
                                    </div>
                                    <input value={data.name} onChange={e => setInterviewer(e.target.value)} type="radio" name='Interviewer' id={data.name} className='hidden peer' />
                                    <div className='relative after:top-[4.5px] after:left-[4.5px] after:absolute flex after:peer-checked:flex justify-center items-center after:content-[""] border-2 border-gray-300 peer-checked:border-green-500 after:hidden after:bg-green-500 rounded-full after:rounded-full w-5 after:w-[50%] h-5 after:h-[50%]'></div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`w-[800px] h-full ${interviewFocus && interviewer ? '' : 'pointer-events-none opacity-50'}`}>
                    <InlineWidget
                        styles={{ width: '100%', height: '100%' }}
                        url='https://calendly.com/bahromiddinabduqaxxorov1604/interview-pro' />
                </div>
            </div>
        </div>
    )
}
