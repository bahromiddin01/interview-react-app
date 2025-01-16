import React, { useEffect, useRef, useState } from 'react'
import EmptyTable from '../../components/EmptyTable'
import InterviewTable from '../../components/InterviewTable'
import BookingModal from '../../components/BookingModal'

export default function MentorMainSection({ isOpen, setIsOpen }) {

    const modalRef = useRef()
    const buttonRef = useRef()

    const [isData, setIsData] = useState(false)
    const [interviewType, setInterviewType] = useState('')
    const [isLoading, setIsLoading] = useState(true) 

    const handleOpenModal = type => {
        setIsOpen(true)
        setInterviewType(type)
    }

    useEffect(() => {

        window.addEventListener('click', e => {
            if (modalRef.current && buttonRef.current) {
                if (!modalRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
                    setIsOpen(false)
                }
            }
        })
    })

    return (
        <div className='flex w-full'>
            <div className={`flex flex-col mx-12 gap-8 bg-[#F9F8F5] w-full ${isOpen ? 'blur-[1px]' : ''}`}>
                <div className='flex flex-col gap-4 mt-16 max-w-lg'>
                    <h2 className='font-inter font-semibold text-3xl'>Past interviews</h2>
                    <div className='flex items-center gap-4'>
                        <button ref={buttonRef} onClick={() => handleOpenModal('Mentorship session')} className='flex items-center gap-2 bg-primaryGreen hover:bg-green-700 px-4 py-2 rounded-full transition-all duration-200 ease-in-out'>
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
                    <h4 className='font-inter font-medium text-xl'>Upcoming interviews</h4>
                    <div className='flex flex-col border-2 bg-[#FAFAF9] rounded-xl max-w-4xl h-[310px] overflow-auto'>
                        <div className='top-0 z-50 sticky flex bg-white px-6 py-3 border-b rounded-t-xl'>
                            <h5 className='w-80 font-inter font-medium text-darkGray text-xs'>Interview</h5>
                            <h5 className='w-72 font-inter font-medium text-darkGray text-xs'>Focus</h5>
                            <h5 className='w-36 font-inter font-medium text-darkGray text-xs'>Date</h5>
                            <h5 className='w-28 font-inter font-medium text-darkGray text-xs'>Status</h5>
                        </div>
                        {isLoading
                            ?
                            <div className='flex justify-center items-center h-full'>
                                <div className='loader'></div>
                            </div>
                            :
                            <div className='relative flex-1 overflow-auto'>
                                <EmptyTable isData={isData} />
                                <InterviewTable isData={isData} setIsData={setIsData} setIsLoading={setIsLoading} />
                            </div>}
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? '' : 'hidden'}`}>
                <BookingModal setIsOpen={setIsOpen} modalRef={modalRef} interviewType={interviewType} />
            </div>
        </div>
    )
}
