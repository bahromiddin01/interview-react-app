import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import mainImage from '../assets/images/signUpMainImage.jpeg'
import googleIcon from '../assets/images/googleIcon.svg'
import PrimaryButton from '../components/PrimaryButton'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        if (password.length < 8) {
            setShowError(true)
        } else {
            try {
                const { data, error } = await supabase.auth.signUp({
                    email: email,
                    password: password,
                    options: {
                        data: { name: name }
                    }
                })

                if (error) {
                    console.error('Error sign up:', error.message)
                    setErrorMessage(error.message)
                } else {
                    console.log('Data added:', data)
                    setShowError(false)
                    navigate('/dashboard')
                }

            } catch (error) {
                console.error('Unexpected error:', error.message)
                alert('An unexpected error occurred')
            }
        }
    }

    const handleSignIn = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'https://interview-react-app-beta.vercel.app/dashboard'
                }
            });

            if (error) throw error

        } catch (err) {
            console.error('Sign-In Error:', err.message);
        }
    };

    return (
        <div className='flex justify-between mx-auto 4xl:container'>
            <div className='flex flex-col justify-between p-4 w-full h-screen'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="LogoImage" />
                    <h4 className='font-archivo font-bold text-lg'>InterviewPro</h4>
                </div>
                <div className='flex flex-col gap-4 mx-auto max-w-[360px]'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-roboto font-semibold text-3xl'>Sign up</h3>
                        <p className='font-normal font-roboto text-base text-darkGray'>Create your account and start improving your interview skills.</p>
                    </div>
                    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name" className='font-medium font-roboto text-sm'>Name*</label>
                            <input
                                type="text"
                                id='name'
                                placeholder='Enter your name'
                                required
                                value={name}
                                className='border-gray-300 focus:border-gray-400 px-3 py-2 border rounded-lg outline-none'
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='font-medium font-roboto text-sm'>Email*</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='Enter your email'
                                required
                                value={email}
                                className='border-gray-300 focus:border-gray-400 px-3 py-2 border rounded-lg outline-none'
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password" className='font-medium font-roboto text-sm'>Password*</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Create a password'
                                required
                                value={password}
                                className='border-gray-300 focus:border-gray-400 px-3 py-2 border rounded-lg outline-none'
                                onChange={e => setPassword(e.target.value)} />
                            <p className={`text-sm font-normal font-inter text-darkGray ${showError ? 'text-red-600' : ''}`}>
                                Must be at least 8 characters.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 mt-4'>
                            <p className='font-normal text-center text-red-500 tracking-wider'>{errorMessage}</p>
                            <PrimaryButton buttonName={'Create account'} type='submit' />
                        </div>
                    </form>
                    <button onClick={handleSignIn} className='flex justify-center items-center gap-2 border-gray-300 hover:border-gray-400 px-6 md:px-8 py-2 md:py-3 border rounded-full'>
                        <img className='w-4 md:w-auto' src={googleIcon} alt="GoogleIcon" />
                        <p className='font-inter font-semibold text-xs md:text-base'>Sign up with Google</p>
                    </button>
                    <div className='flex justify-center gap-2'>
                        <p className='font-inter font-normal text-darkGray text-sm'>Already have an account?</p>
                        <button className='font-inter font-semibold text-primaryGreen text-sm hover:text-green-700' onClick={() => navigate('/login')}>Log in</button>
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <p className='font-inter font-normal text-darkGray text-sm'> Interviewpro 2024</p>
                    <a href="$" className='font-inter font-normal text-darkGray text-sm'>help@interviewpro.com</a>
                </div>
            </div>
            <div className='lg:block relative hidden w-[1100px] h-screen'>
                <p className='bottom-0 absolute p-10 font-inter font-medium text-4xl text-white'>"InterviewPro's tailored feedback refined my skills. Highly recommend for acing tech interviews."</p>
                <img className='rounded-l-[60px] w-[1100px] h-screen object-cover' src={mainImage} alt="MainImage" />
            </div>
        </div>
    )
}
