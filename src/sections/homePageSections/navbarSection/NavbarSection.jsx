import { linksData } from './NavbarLinksData'
import NavbarLinks from './NavbarLinks'
import logo from '../../../assets/images/logo.svg'
import PrimaryButton from '../../../components/PrimaryButton'
import { useState } from 'react'
import NavbarModal from './NavbarModal'
import { useNavigate } from 'react-router-dom'

export default function NavbarSection() {

    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    return (
        <div className='top-0 z-50 bg-white lg:bg-customCream'>
            <div className='4xl:container mx-auto'>
                <div className='flex items-center justify-between lg:px-16 4xl:container'>
                    <div className='flex items-center justify-between w-full lg:w-fit lg:gap-12 px-10 md:px-16 lg:px-0 lg:border-none border-b py-4 border-b-gray-200'>
                        <div className='flex items-center gap-2'>
                            <img src={logo} alt="LogoImage" />
                            <h4 className='text-lg font-bold font-archivo'>InterviewPro</h4>
                        </div>
                        <button className='lg:hidden inline-block text-xl px-3 py-1 rounded-lg hover:bg-gray-100 duration-100' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <i className='fa-solid fa-xmark'></i> : <i className='fa-solid fa-bars'></i>}
                        </button>
                        <div className='hidden lg:flex gap-6'>
                            {linksData.map((data) => <NavbarLinks linkHref={data.href} linkName={data.name} key={data.id} style={`text-base font-medium font-inter hover:text-green-700`} />)}
                        </div>
                    </div>
                    <div className='hidden lg:flex gap-6'>
                        <button className='text-base font-medium font-inter hover:text-green-700' onClick={() => navigate('/login')}>Log in</button>
                        <PrimaryButton buttonName={'Apply now'} />
                    </div>
                </div>
                <NavbarModal open={isOpen} />
            </div>
        </div>
    )
}
