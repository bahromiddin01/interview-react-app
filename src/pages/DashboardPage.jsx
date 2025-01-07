import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../assets/images/logo.svg'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'
import InterviewBookingModal from '../components/InterviewBookingModal'
import { toast } from 'react-toastify'
import { BookingContext } from '../context/BookingContext'
import logoApple from '../assets/images/appleIcon.svg';
import logoGoogle from '../assets/images/googleIcon.svg';
import logoFaang from '../assets/images/logoFaang.svg';
import logoFacebook from '../assets/images/logoFacebook.svg';
import logoMicrosoft from '../assets/images/microsoftIcon.svg';

export default function DashboardPage() {

    const navigate = useNavigate()

    const interviewerImages = {
        'FAANG Interviewer': logoFaang,
        'Facebook Interviewer': logoFacebook,
        'Google Interviewer': logoGoogle,
        'Microsoft Interviewer': logoMicrosoft,
        'Apple Interviewer': logoApple,
    }

    const { interviewFocus, interviewType } = useContext(BookingContext)

    const modalRef = useRef()
    const buttonRef = useRef()

    const [isOpen, setIsOpen] = useState(false)
    const [userName, setUserName] = useState("")
    const [interviewData, setInterviewData] = useState([])

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
                    },
                });

                const scheduledTime = await response.json()

                await supabase
                    .from('InterviewBooking')
                    .insert([
                        {
                            interview_focus: interviewFocus,
                            interviewer: interviewType,
                            calendar_time: scheduledTime.resource.start_time,
                            type: 'Mock interview',
                        }
                    ])

                setTimeout(() => {
                    setIsOpen(false)
                    toast.success('Interview booked successfully!')
                }, 1000)

                fetchInterviewData()
            }
        }

        const fetchInterviewData = async () => {
            const { data, error } = await supabase
                .from('InterviewBooking')
                .select('interviewer, interview_focus, calendar_time, type')

            if (error) {
                console.error('Error fetching data:', error.message)
            } else {
                console.log('Olingan malumotlar:', data)
                setInterviewData(data)
            }
        }

        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser()
            console.log(data)
            if (data.user === null) {
                navigate('/login')
            } else {
                setUserName(data.user.user_metadata.name)
            }
        }

        window.addEventListener('click', e => {
            if (modalRef.current?.contains(e.target) || buttonRef.current?.contains(e.target)) return
            setIsOpen(false)
        })

        fetchUser()
        fetchInterviewData()

        window.addEventListener('message', handleEventScheduled)

        return () => {
            window.removeEventListener('message', handleEventScheduled)
        }
    }, [interviewFocus, interviewType])

    return (
        <div>
            <div className={`flex mx-auto 4xl:container ${isOpen ? 'blur-[1px]' : ''}`}>
                <div className='fixed flex flex-col flex-none justify-between bg-white px-6 py-8 w-fit h-screen'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center gap-2'>
                            <img src={logo} alt="LogoImage" />
                            <h4 className='font-archivo font-bold text-lg'>InterviewPro</h4>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className='flex items-center gap-3 bg-green-50 px-3 py-2 rounded-md text-green-500'>
                                <i className="text-gray-500 text-lg fa-house fa-solid"></i>
                                <p className='font-inter font-semibold text-base'>Home</p>
                            </button>
                            <button onClick={() => navigate('/history')} className='flex items-center gap-3 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
                                <i className="text-gray-500 text-lg fa-calendar fa-regular"></i>
                                <p className='font-inter font-semibold text-base'>Interviews history</p>
                            </button>
                            <button onClick={() => navigate('/mentor')} className='flex items-center gap-3 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
                                <i className="text-gray-500 text-lg fa-book-open fa-solid"></i>
                                <p className='font-inter font-semibold text-base'>Dedicated mentor</p>
                            </button>
                        </div>
                    </div>
                    <button onClick={handleLogOut} className='flex items-center gap-2 hover:bg-green-50 px-3 py-2 rounded-md transition-all duration-200 ease-in-out'>
                        <i className="fa-right-from-bracket text-gray-500 text-lg fa-solid"></i>
                        <p className='font-inter font-semibold text-base'>Log out</p>
                    </button>
                </div>
                <div className='flex flex-col flex-grow gap-8 mx-12 my-16 ml-72'>
                    <div className='flex flex-col gap-3 max-w-lg'>
                        <h3 className='font-inter font-semibold text-3xl'>Welcome back, {userName}</h3>
                        <p className='font-inter font-normal text-base text-gray-500'>Book interviews with top tech engineers, receive expert feedback, and elevate your performance.</p>
                        <div>
                            <button
                                ref={buttonRef}
                                onClick={() => setIsOpen(true)}
                                className='flex items-center gap-2 bg-primaryGreen hover:bg-green-700 px-4 py-2 rounded-full transition-all duration-200 ease-in-out'
                            >
                                <i className='text-white fa-calendar fa-regular'></i>
                                <p className='font-inter font-semibold text-sm text-white'>Book an interview</p>
                            </button>
                        </div>
                    </div>
                    {/******************************************************************************************/}
                    {!interviewData.length > 0 ?
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-inter font-medium text-xl'>Interview overview</h4>
                            <div className='flex flex-col items-center gap-3 border-2 bg-[#FAFAF9] py-16 xl:py-24 rounded-xl'>
                                <i className='border-2 border-gray-300 bg-white px-3 py-1.5 rounded-lg text-3xl text-gray-700 fa-calendar fa-regular'></i>
                                <p className='max-w-52 font-inter font-medium text-base text-center text-gray-600'>You have no interviews coming up</p>
                            </div>
                        </div>
                        :
                        <div className='flex flex-col gap-4'>
                            <h4 className='font-inter font-medium text-xl'>Upcoming interviews</h4>
                            <div className='flex flex-col border-2 bg-[#FAFAF9] rounded-xl max-w-4xl'>
                                <div className='flex bg-white px-6 py-3 rounded-t-xl'>
                                    <h5 className='w-80 font-inter font-medium text-darkGray text-xs'>Interview</h5>
                                    <h5 className='w-72 font-inter font-medium text-darkGray text-xs'>Focus</h5>
                                    <h5 className='w-36 font-inter font-medium text-darkGray text-xs'>Date</h5>
                                    <h5 className='w-28 font-inter font-medium text-darkGray text-xs'>Status</h5>
                                </div>
                                <div className='flex flex-col'>
                                    {interviewData.map((interview, index) => (
                                        <div key={index} className='flex items-center border-y px-6 py-3'>
                                            <div className='flex items-center gap-3 w-80'>
                                                <img className='w-8 h-8' src={interviewerImages[interview.interviewer]} alt={`${interview.interviewer} logo`} />
                                                <div className=''>
                                                    <h3 className='font-inter font-medium text-sm'>{interview.interviewer}</h3>
                                                    <p className='font-inter font-normal text-darkGray text-sm'>{interview.type}</p>
                                                </div>
                                            </div>
                                            <p className='w-72 font-inter font-normal text-darkGray text-sm'>{interview.interview_focus}</p>
                                            <p className='w-36 font-inter font-normal text-darkGray text-sm'>
                                                {new Intl.DateTimeFormat('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                }).format(new Date(interview.calendar_time))}
                                            </p>
                                            <div className='w-28'>
                                                <p className='bg-orange-100 px-2 py-0.5 rounded-2xl w-fit font-inter font-medium text-center text-orange-700 text-xs'>Pending</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>}
                    {/******************************************************************************************/}

                    {/******************************************************************************************/}
                </div>
            </div>
            <div className={`${isOpen ? '' : 'hidden'}`}>
                <InterviewBookingModal modalRef={modalRef} />
            </div>
        </div>
    )
}
