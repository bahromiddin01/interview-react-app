import React from 'react';

export default function EmptyTable({ isData }) {
    return (
        <div className={`flex justify-center items-center w-full h-full ${isData ? 'hidden' : 'absolute inset-0'}`}>
            <div className='flex flex-col items-center gap-3'>
                <i className='border-2 border-gray-300 bg-white px-3 py-1.5 rounded-lg text-3xl text-gray-700 fa-calendar fa-regular'></i>
                <p className='max-w-52 font-inter font-medium text-base text-center text-gray-600'>
                    You have no interviews coming up
                </p>
            </div>
        </div>
    );
}
