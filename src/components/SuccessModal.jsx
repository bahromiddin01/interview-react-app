import React from 'react'

export default function SuccessModal({ setSuccess }) {

    return (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
            <div className={`flex flex-col items-center gap-5 bg-white p-6 rounded-xl max-w-[400px] duration-500`}>
                <i className="bg-green-100 px-3 py-2.5 rounded-full text-3xl text-primaryGreen fa-circle-check fa-regular"></i>
                <h4 className='font-inter font-semibold text-lg'>Your interview has been booked</h4>
                <p className='font-inter font-normal text-center text-gray-600 text-sm'>We will send you an email containing instruction on how to join the interview session</p>
                <button onClick={() => setSuccess(false)} className='bg-primaryGreen hover:bg-green-700 px-8 py-3 rounded-full font-inter font-semibold text-base text-white duration-200'>Confirm</button>
            </div>
        </div>
    )
}
