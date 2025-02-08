import React, { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { supabase } from '../supabase/supabase'

export default function MentorBookingModal({ setIsOpen, modalRef, fetchBookingData, setSuccess }) {

    const [userId, setUserId] = useState('')

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
                    .from('MentorBooking')
                    .insert([
                        {
                            user_id: userId,
                            mentor_name: 'Jon Doe',
                            type: 'Mentorship session',
                            calendar_time: scheduledTime.resource.start_time,
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
            const {data} = await supabase.auth.getUser()
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
                <div className={`w-[800px] h-full`}>
                    <InlineWidget
                        styles={{ width: '100%', height: '100%' }}
                        url='https://calendly.com/bahromiddinabduqaxxorov1604/interview-pro' />
                </div>
            </div>
        </div>
    )
}
