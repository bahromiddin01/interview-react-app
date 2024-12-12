import { linksData } from './NavbarLinksData'
import NavbarLinks from './NavbarLinks'
import logo from '../../../assets/images/logo.svg'
import PrimaryButton from '../../../components/PrimaryButton'
import { useState, useEffect } from 'react'
import NavbarModal from './NavbarModal'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../../supabase/supabase'

export default function NavbarSection() {

    const [isOpen, setIsOpen] = useState(false)
    const [userName, setUserName] = useState('')
    const [isUser, setIsUser] = useState(false)
    const [showButtons, setShowButtons] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser()

            if (data.user) {
                setUserName(data.user.user_metadata.name)
                setIsUser(true)
            }
        }

        fetchUser()
    })

    const handleLogOut = async e => {
        try {
            const { error } = await supabase.auth.signOut()

            if (error) {
                console.error('Error:', error.message)
            } else {
                alert('You logged out')
                navigate('/')
                window.location.reload()
            }
        } catch (error) {
            console.error('Error:', error.message)
        }
    }

    return (
        <div className='sticky lg:relative top-0 z-50 bg-white lg:bg-customCream'>
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
                    {isUser
                        ? <div className='flex flex-col gap-2 items-center relative'>
                            <button onClick={() => setShowButtons(!showButtons)} className='flex items-center gap-4 py-3 px-4 active:scale-90 transform transition hover:bg-gray-300 rounded-xl duration-200'>
                                <i className="fa-solid fa-user text-xl"></i>
                                <h3 className='text-xl font-light font-roboto'>{userName}</h3>
                            </button>
                            <div className={`${showButtons ? 'flex' : 'hidden'} duration-200 flex-col gap-2 absolute top-16 w-48 py-2 px-2 bg-white border rounded-xl shadow-lg`}>
                                <button onClick={() => navigate('/dashboard')} className='active:scale-90 transform transition py-3 px-4 border border-gray-200 bg-white hover:bg-gray-200 duration-100 rounded-xl font-inter text-left font-light shadow-sm'>Dashboard</button>
                                <button onClick={handleLogOut} className='active:scale-90 transform transition flex items-center gap-2 py-3 px-4 border border-gray-200 bg-white hover:bg-gray-200 duration-100 rounded-xl font-inter text-left shadow-sm'>
                                    <i className="fa-solid fa-right-from-bracket text-lg text-gray-500"></i>
                                    <p className='font-light font-inter'>Log out</p>
                                </button>
                            </div>
                        </div>
                        : <div className='hidden lg:flex gap-6'>
                            <button className='text-base font-medium font-inter hover:text-green-700' onClick={() => navigate('/login')}>Log in</button>
                            <PrimaryButton buttonName={'Apply now'} onClick={() => navigate('/signup')} />
                        </div>}
                </div>
                <NavbarModal open={isOpen} />
            </div>
        </div>
    )
}
