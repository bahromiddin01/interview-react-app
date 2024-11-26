import React from 'react'
import PrimaryButton from '../components/PrimaryButton'
import logo from '../assets/images/logo.svg'
import googleIcon from '../assets/images/googleIcon.svg'
import mainImage from '../assets/images/signUpMainImage.jpeg'
import { useNavigate } from 'react-router-dom'

export default function LogInPage() {

    const navigate = useNavigate()

    return (
        <div className='lg:flex justify-between 4xl:container mx-auto'>
            <div className='flex flex-col h-screen justify-between p-4 w-full'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="LogoImage" />
                    <h4 className='text-lg font-bold font-archivo'>InterviewPro</h4>
                </div>
                <div className='flex flex-col mx-auto gap-4 md:w-[480px]'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-semibold font-inter'>Log in</h3>
                        <p className='text-base font-normal font-inter text-darkGray'>Welcome back! Please enter your details.</p>
                    </div>
                    <form className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='text-sm font-medium font-inter'>Email</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='Enter your email'
                                required
                                className='px-3 py-2 rounded-lg border outline-none focus:border-gray-300' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password" className='text-sm font-medium font-inter'>Password</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='..........................'
                                required
                                className='px-3 py-2 rounded-lg border outline-none focus:border-gray-300' />
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='rememberMe' />
                                <label htmlFor='rememberMe' className='text-sm font-normal font-inter text-darkGray'>Remember me</label>
                            </div>
                            <button className='text-sm font-semibold font-inter text-primaryGreen hover:text-green-700'>Forgot password</button>
                        </div>
                        <div className='flex flex-col gap-4 mt-4'>
                            <PrimaryButton buttonName={'Sign in'} type='submit' className='mt-4' />
                        </div>
                    </form>
                    <button className='flex items-center justify-center gap-2 md:px-8 md:py-3 px-6 py-2 rounded-full border border-gray-300 hover:border-gray-400'>
                        <img className='w-4 md:w-auto' src={googleIcon} alt="GoogleIcon" />
                        <p className='text-xs md:text-base font-semibold font-inter'>Sign in with Google</p>
                    </button>
                    <div className='flex justify-center gap-2 mt-6'>
                        <p className='text-sm font-normal font-inter text-darkGray'>Don't have an account?</p>
                        <button className='text-sm font-semibold font-inter text-primaryGreen hover:text-green-700' onClick={() => navigate('/signup')}>Sign up</button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm font-normal font-inter text-darkGray'>© Interviewpro 2024</p>
                    <a href="$" className='text-sm font-normal font-inter text-darkGray'>help@interviewpro.com</a>
                </div>
            </div>
            <div className='h-screen w-[1100px relative hidden lg:block'>
                <p className='absolute text-4xl bottom-0 p-10 font-medium font-inter text-white'>"InterviewPro's tailored feedback refined my skills. Highly recommend for acing tech interviews."</p>
                <img className='w-[1100px] h-screen rounded-l-[60px] object-cover' src={mainImage} alt="MainImage" />
            </div>
        </div>
    )
}