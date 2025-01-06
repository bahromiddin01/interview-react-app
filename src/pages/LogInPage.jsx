import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import logo from '../assets/images/logo.svg'
import googleIcon from '../assets/images/googleIcon.svg'
import mainImage from '../assets/images/signUpMainImage.jpeg'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/supabase'

export default function LogInPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [showIcon, setShowIcon] = useState(false)

    const handleLogin = async e => {
        e.preventDefault()

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (error) {
                throw error
            } else {
                navigate('/dashboard')
            }
        } catch (error) {
            console.error('Error:', error.message)
            setErrorMessage(error.message)
        }
    }

    const handleSignIn = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: 'https://interview-react-app-beta.vercel.app/dashboard'
                }
            })

            if (error) throw error


        } catch (err) {
            console.error('Sign in Error:', err.message)
            alert('Error sign in')
        }
    }

    return (
        <div className='lg:flex justify-between mx-auto'>
            <div className='flex flex-col justify-between p-4 w-full h-screen'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="LogoImage" />
                    <h4 className='font-archivo font-bold text-lg'>InterviewPro</h4>
                </div>
                <div className='flex flex-col gap-4 mx-auto md:w-[480px]'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-inter font-semibold text-3xl'>Log in</h3>
                        <p className='font-inter font-normal text-base text-darkGray'>Welcome back! Please enter your details.</p>
                    </div>
                    <form className='flex flex-col gap-2' onSubmit={handleLogin}>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='font-inter font-medium text-sm'>Email</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='Enter your email'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className='border-gray-300 focus:border-gray-400 px-3 py-2 border rounded-lg outline-none' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password" className='font-inter font-medium text-sm'>Password</label>
                            <div className='relative flex items-center'>
                                <input
                                    type={`${showIcon ? 'text' : 'password'}`}
                                    id='password'
                                    placeholder='..........................'
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className='border-gray-300 focus:border-gray-400 px-3 py-2 border rounded-lg w-full outline-none' />
                                <button className='right-6 absolute' type='button'>
                                    <i className={`fa-solid fa-eye px-1.5 py-1 text-gray-400 ${showIcon ? '' : 'hidden'}`} onClick={() => setShowIcon(!showIcon)}></i>
                                    <i className={`fa-solid fa-eye-slash px-1.5 py-1 text-gray-400 ${showIcon ? 'hidden' : ''}`} onClick={() => setShowIcon(!showIcon)}></i>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='rememberMe' />
                                <label htmlFor='rememberMe' className='font-inter font-normal text-darkGray text-sm'>Remember me</label>
                            </div>
                            <button type='button' className='font-inter font-semibold text-primaryGreen text-sm hover:text-green-700'>Forgot password</button>
                        </div>
                        <div className='flex flex-col gap-4 mt-4'>
                            <PrimaryButton buttonName={'Sign in'} type='submit' className='mt-4' />
                        </div>
                    </form>
                    {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
                    <button onClick={handleSignIn} className='flex justify-center items-center gap-2 border-gray-300 hover:border-gray-400 px-6 md:px-8 py-2 md:py-3 border rounded-full'>
                        <img className='w-4 md:w-auto' src={googleIcon} alt="GoogleIcon" />
                        <p className='font-inter font-semibold text-xs md:text-base'>Sign in with Google</p>
                    </button>
                    <div className='flex justify-center gap-2 mt-6'>
                        <p className='font-inter font-normal text-darkGray text-sm'>Don't have an account?</p>
                        <button className='font-inter font-semibold text-primaryGreen text-sm hover:text-green-700' onClick={() => navigate('/signup')}>Sign up</button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='font-inter font-normal text-darkGray text-sm'> Interviewpro 2024</p>
                    <a href="$" className='font-inter font-normal text-darkGray text-sm'>help@interviewpro.com</a>
                </div>
            </div>
            <div className='lg:block relative hidden w-[1100px h-screen'>
                <p className='bottom-0 absolute p-10 font-inter font-medium text-4xl text-white'>"InterviewPro's tailored feedback refined my skills. Highly recommend for acing tech interviews."</p>
                <img className='rounded-l-[60px] w-[1100px] h-screen object-cover' src={mainImage} alt="MainImage" />
            </div>
        </div>
    )
}
