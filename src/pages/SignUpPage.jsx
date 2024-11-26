import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import mainImage from '../assets/images/signUpMainImage.jpeg'
import googleIcon from '../assets/images/googleIcon.svg'
import PrimaryButton from '../components/PrimaryButton'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'


export default function SignUpPage() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        linkedinUrl: '',
        password: '',
    })

    const [text, setText] = useState('')
    const [showError, setShowError] = useState(false)

    const handleInputText = e => {
        setText(e.target.value)
    }

    const handleInputChange = e => {
        const value = e.target.value
        setFormData(prevState => ({
            ...prevState,
            [e.target.id]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        const hasError = text.length < 8
        setShowError(hasError)

        if (hasError) {
            return;
        }

        try {
            const { error } = await supabase
                .from('Sign up')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        linkedinUrl: formData.linkedinUrl,
                        password: formData.password,
                    }
                ])

            if (error) {
                console.error('Error:', error.message)
            } else {
                console.log('Data added:', formData)
                alert('Account created successfully!')
                e.target.reset()
                setText('')
            }
        } catch (error) {
            console.error('Unexpected error:', error.message)
        }
    }

    return (
        <div className='flex justify-between'>
            <div className='flex flex-col gap-4 p-4 w-full'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="LogoImage" />
                    <h4 className='text-lg font-bold font-archivo'>InterviewPro</h4>
                </div>
                <div className='flex flex-col mx-auto gap-4 max-w-[360px]'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-semibold font-roboto'>Sign up</h3>
                        <p className='text-base font-normal font-roboto text-darkGray'>Create your account and start improving your interview skills.</p>
                    </div>
                    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name" className='text-sm font-medium font-roboto'>Name*</label>
                            <input
                                type="text"
                                id='name'
                                placeholder='Enter your name'
                                required
                                className='px-3 py-2 rounded-lg border outline-none focus:border-gray-300'
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='text-sm font-medium font-roboto'>Email*</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='Enter your email'
                                required
                                className='px-3 py-2 rounded-lg border outline-none focus:border-gray-300'
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="linkedinUrl" className='text-sm font-medium font-roboto'>Your Linkedin</label>
                            <input
                                type="text"
                                id='linkedinUrl'
                                placeholder='Enter your Linkedin URL'
                                required
                                className='px-3 py-2 rounded-lg border outline-none focus:border-gray-300'
                                onChange={handleInputChange} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password" className='text-sm font-medium font-roboto'>Password*</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Create a password'
                                required
                                value={text}
                                className='px-3 py-2 rounded-lg border outline-none focus:border-gray-300'
                                onChange={(e) => {
                                    handleInputText(e)
                                    handleInputChange(e)
                                }} />
                            <p
                                className={`text-sm font-normal font-inter text-darkGray ${showError ? 'text-red-600' : ''}`}>
                                Must be at least 8 characters.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 mt-4'>
                            <PrimaryButton buttonName={'Create account'} type='submit' />
                        </div>
                    </form>
                    <button className='flex items-center justify-center gap-2 md:px-8 md:py-3 px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400'>
                        <img src={googleIcon} alt="GoogleIcon" />
                        <p className='text-xs md:text-base font-semibold font-inter'>Sign up with Google</p>
                    </button>
                    <div className='flex gap-2 justify-center'>
                        <p className='text-sm font-normal font-inter text-darkGray'>Already have an account?</p>
                        <button className='text-sm font-semibold font-inter text-primaryGreen hover:text-green-700' onClick={() => navigate('/login')}>Log in</button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm font-normal font-inter text-darkGray'>© Interviewpro 2024</p>
                    <a href="$" className='text-sm font-normal font-inter text-darkGray'>help@interviewpro.com</a>
                </div>
            </div>
            <div className='h-screen w-[1100px relative'>
                <p className='absolute text-4xl bottom-0 p-10 font-medium font-inter text-white'>"InterviewPro's tailored feedback refined my skills. Highly recommend for acing tech interviews."</p>
                <img className='w-[1100px] h-screen rounded-l-[60px] object-cover' src={mainImage} alt="MainImage" />
            </div>
        </div>
    )
}
