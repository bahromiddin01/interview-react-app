import React from 'react'
import logoImage from '../../../assets/images/logo.svg'
import FooterLink from './FooterLink'

export default function FooterSection() {

    const linksData1 = [
        { href: '', name: 'Product', },
        { href: '', name: 'Overview', },
        { href: '', name: 'Features', },
        { href: '', name: 'Courses', },
        { href: '', name: 'Testimonials', },
    ]

    const linksData2 = [
        { href: '', name: 'Resources', },
        { href: '', name: 'Blog', },
        { href: '', name: 'Newsletter', },
        { href: '', name: 'Support', },
    ]
    return (
        <div className='4xl:container mx-auto'>
            <div className='flex flex-col gap-16 my-20 mx-8 md:mx-10 lg:mx-20'>
                <div className='flex flex-col md:flex-row gap-8 justify-between'>
                    <div className='flex flex-col gap-6 lg:gap-8 max-w-80'>
                        <div className='flex items-center gap-2'>
                            <img src={logoImage} alt="LogoImage" />
                            <h4 className='text-base md:text-lg font-bold font-archivo'>InterviewPro</h4>
                        </div>
                        <p className='text-base font-normal font-inter text-gray-600'>Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <div className='flex sm:justify-evenly gap-16 md:gap-10 lg:gap-20 pr-10 lg:pr-20'>
                        <div className='flex flex-col gap-4'>
                            {linksData1.map((link, index) => <FooterLink linkHref={link.href} linkName={link.name} key={index} />)}
                        </div>
                        <div className='flex flex-col gap-4'>
                            {linksData2.map((link, index) => <FooterLink linkHref={link.href} linkName={link.name} key={index} />)}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6 md:flex-row justify-between py-10 border-t border-t-gray-300'>
                    <p className='text-base font-normal font-inter text-gray-500'>© 2024 InterviewPro. All rights reserved.</p>
                    <div className='flex md:justify-center gap-6 text-base font-normal font-inter text-gray-500'>
                        <a href="$">Terms</a>
                        <a href="$">Privacy</a>
                        <a href="$">Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
