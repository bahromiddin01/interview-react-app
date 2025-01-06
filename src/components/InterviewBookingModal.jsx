import React, { useContext, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import logoApple from '../assets/images/appleIcon.svg';
import logoGoogle from '../assets/images/googleIcon.svg';
import logoFaang from '../assets/images/logoFaang.svg';
import logoFacebook from '../assets/images/logoFacebook.svg';
import logoMicrosoft from '../assets/images/microsoftIcon.svg';
import { BookingContext } from '../context/BookingContext';

export default function InterviewBookingModal({ modalRef }) {

    const { setInterviewFocus, setInterviewType } = useContext(BookingContext)

    const [selectedFocus, setSelectedFocus] = useState('');
    const [selectedInterviewer, setSelectedInterviewer] = useState('');

    const interviewerData = [
        { img: logoFaang, name: 'faang', title: 'FAANG Interviewer' },
        { img: logoFacebook, name: 'facebook', title: 'Meta (Facebook) Interviewer' },
        { img: logoGoogle, name: 'google', title: 'Google Interviewer' },
        { img: logoMicrosoft, name: 'microsoft', title: 'Microsoft Interviewer' },
        { img: logoApple, name: 'apple', title: 'Apple Interviewer' },
    ];

    const handleFocusChange = value => {
        setInterviewFocus(value)
        setSelectedFocus({ value })
    }

    const handleInterviewerChange = value => {
        setSelectedInterviewer({ value })
        setInterviewType(value)
    }

    return (
        <div className={`fixed inset-0 justify-center flex items-center bg-black bg-opacity-50`}>
            <div ref={modalRef} className="flex justify-center items-center gap-4 bg-white shadow-lg mx-36 p-6 rounded-lg w-fit h-[600px]">
                <div className={`flex flex-col flex-none gap-4 w-[386px]`}>
                    <li className="font-inter font-semibold text-2xl">Interview booking</li>
                    <div className="flex flex-col gap-2">
                        <li className="font-inter font-medium text-lg">Interview Focus</li>
                        <select
                            value={selectedFocus}
                            onChange={e => handleFocusChange(e.target.value)}
                            name="interviewFocus"
                            className="border-gray-300 shadow-sm px-3 py-2 border rounded-lg w-full outline-none">
                            <option value="" disabled>Select</option>
                            <option value="algorithmsAndDataStructures">Algorithms and Data Structures</option>
                            <option value="systemsDesign">Systems Design</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <li className="font-inter font-medium text-lg">Interviewer Background</li>
                        <div className="flex flex-col gap-2">
                            {interviewerData.map((data, index) => (
                                <label
                                    key={index}
                                    htmlFor={data.name}
                                    className="flex justify-between items-center hover:border-green-300 px-4 py-2.5 border rounded-xl transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <img src={data.img} alt="LogoImage" className="h-7" />
                                        <p className="font-inter font-medium text-base text-darkBlue">{data.title}</p>
                                    </div>
                                    <input
                                        type="radio"
                                        name="Interviewer"
                                        id={data.name}
                                        className="hidden peer"
                                        onChange={() => handleInterviewerChange(data.name)}
                                    />
                                    <div className="relative after:top-[4.5px] after:left-[4.5px] after:absolute flex after:peer-checked:flex justify-center items-center after:content-[''] border-2 border-gray-300 peer-checked:border-green-500 after:hidden after:bg-green-500 rounded-full after:rounded-full w-5 after:w-[50%] h-5 after:h-[50%]"></div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`flex-none flex w-[800px] h-full ${selectedFocus && selectedInterviewer ? '' : 'pointer-events-none opacity-50'}`}>
                    <InlineWidget
                        url="https://calendly.com/bahromiddinabduqaxxorov1604/interview-pro"
                        styles={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    );
}
