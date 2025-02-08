import React, { useContext, useEffect, useRef, useState } from 'react'
import InterviewBookingModal from '../../components/InterviewBookingModal'
import Table from '../../components/Table'
import { UserContext } from '../../context/UserContext'
import { supabase } from '../../supabase/supabase'
import SuccessModal from '../../components/SuccessModal'

export default function HistoryMainSection({ isOpen, setIsOpen, success, setSuccess }) {

    const modalRef = useRef()
    const buttonRef = useRef()
    const [loading, setLoading] = useState(true)
    const { user } = useContext(UserContext)
    const [bookingData, setBookingData] = useState([])

    const fetchBookingData = async () => {
        const { data, error } = await supabase
            .from('InterviewBooking')
            .select('*')
            .eq('user_id', user.id)

        if (error) {
            console.error('Error fetching data:', error.message)
        } else {
            setBookingData(data)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!user?.id) return
        fetchBookingData()

        window.addEventListener('click', e => {
            if (modalRef.current && buttonRef.current) {
                if (!modalRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                    setIsOpen(false)
                }
            }
        })
    }, [user])


    return (
        <div className='flex w-full'>
            <div className={`flex flex-col mx-12 gap-8 bg-[#F9F8F5] w-full ${isOpen || success ? 'blur-[1px]' : ''}`}>
                <div className='flex flex-col gap-4 mt-16 max-w-lg'>
                    <h2 className='font-inter font-semibold text-3xl'>Past interviews</h2>
                    <button ref={buttonRef} onClick={() => setIsOpen(true)} className='flex items-center gap-2 bg-primaryGreen hover:bg-green-700 px-4 py-2 rounded-full w-fit transition-all duration-200 ease-in-out'>
                        <i className='text-white fa-calendar fa-regular'></i>
                        <p className='font-inter font-semibold text-sm text-white'>Book an interview</p>
                    </button>
                </div>
                <Table loading={loading} data={bookingData} />
            </div>
            <div className={`${isOpen ? '' : 'hidden'}`}>
                <InterviewBookingModal setIsOpen={setIsOpen} modalRef={modalRef} fetchBookingData={fetchBookingData} setSuccess={setSuccess} />
            </div>
            {success ? <SuccessModal setSuccess={setSuccess} /> : null}
        </div>
    )
}
