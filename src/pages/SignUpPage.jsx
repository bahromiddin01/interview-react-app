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
            return
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })

            if (error) {
                console.error('Error:', error.message)
                setErrorMessage(error.message)
            } else {
                console.log('Data added:', data)
                alert('Account created successfully!')
                setShowError(false)
                navigate('/dashboard')
            }
        } catch (error) {
            console.error('Unexpected error:', error.message)
            alert('An unexpected error occurred')
        }
    }

    const handleSignIn = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: '/dashboard/'
                }
            });

            if (error) throw error

        } catch (err) {
            console.error('Sign-In Error:', err.message);
            alert('Error signing in.');
        }
    };

    return (
        <div className='flex justify-between 4xl:container mx-auto'>
            <div className='flex flex-col justify-between h-screen p-4 w-full'>
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
                                value={name}
                                className='px-3 py-2 rounded-lg border border-gray-300 outline-none focus:border-gray-400'
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='text-sm font-medium font-roboto'>Email*</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='Enter your email'
                                required
                                value={email}
                                className='px-3 py-2 rounded-lg border border-gray-300 outline-none focus:border-gray-400'
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password" className='text-sm font-medium font-roboto'>Password*</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Create a password'
                                required
                                value={password}
                                className='px-3 py-2 rounded-lg border border-gray-300 outline-none focus:border-gray-400'
                                onChange={e => setPassword(e.target.value)} />
                            <p className={`text-sm font-normal font-inter text-darkGray ${showError ? 'text-red-600' : ''}`}>
                                Must be at least 8 characters.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 mt-4'>
                            <p className='text-red-500 font-normal text-center tracking-wider'>{errorMessage}</p>
                            <PrimaryButton buttonName={'Create account'} type='submit' />
                        </div>
                    </form>
                    <button onClick={handleSignIn} className='flex items-center justify-center gap-2 md:px-8 md:py-3 px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400'>
                        <img className='w-4 md:w-auto' src={googleIcon} alt="GoogleIcon" />
                        <p className='text-xs md:text-base font-semibold font-inter'>Sign up with Google</p>
                    </button>
                    <div className='flex gap-2 justify-center'>
                        <p className='text-sm font-normal font-inter text-darkGray'>Already have an account?</p>
                        <button className='text-sm font-semibold font-inter text-primaryGreen hover:text-green-700' onClick={() => navigate('/login')}>Log in</button>
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <p className='text-sm font-normal font-inter text-darkGray'> Interviewpro 2024</p>
                    <a href="$" className='text-sm font-normal font-inter text-darkGray'>help@interviewpro.com</a>
                </div>
            </div>
            <div className='h-screen w-[1100px] relative hidden lg:block'>
                <p className='absolute text-4xl bottom-0 p-10 font-medium font-inter text-white'>"InterviewPro's tailored feedback refined my skills. Highly recommend for acing tech interviews."</p>
                <img className='w-[1100px] h-screen rounded-l-[60px] object-cover' src={mainImage} alt="MainImage" />
            </div>
        </div>
    )
}
