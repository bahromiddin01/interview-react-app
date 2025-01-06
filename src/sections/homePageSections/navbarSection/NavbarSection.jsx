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
                navigate('/')
                window.location.reload()
            }
        } catch (error) {
            console.error('Error:', error.message)
        }
    }

    return (
        <div className='lg:relative top-0 z-50 sticky bg-white lg:bg-customCream'>
            <div className='mx-auto 4xl:container'>
                <div className='flex justify-between items-center lg:px-16 4xl:container'>
                    <div className='flex justify-between items-center lg:gap-12 px-10 md:px-16 lg:px-0 py-4 border-b border-b-gray-200 lg:border-none w-full lg:w-fit'>
                        <div className='flex items-center gap-2'>
                            <img src={logo} alt="LogoImage" />
                            <h4 className='font-archivo font-bold text-lg'>InterviewPro</h4>
                        </div>
                        <button className='inline-block lg:hidden hover:bg-gray-100 px-3 py-1 rounded-lg text-xl duration-100' onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <i className='fa-solid fa-xmark'></i> : <i className='fa-bars fa-solid'></i>}
                        </button>
                        <div className='lg:flex gap-6 hidden'>
                            {linksData.map((data) => <NavbarLinks linkHref={data.href} linkName={data.name} key={data.id} style={`text-base font-medium font-inter hover:text-green-700`} />)}
                        </div>
                    </div>
                    {isUser
                        ? <div className='relative flex flex-col items-center gap-2'>
                            <button onClick={() => setShowButtons(!showButtons)} className='flex items-center gap-4 hover:bg-gray-300 px-4 py-3 rounded-xl transform transition duration-75 active:scale-90'>
                                <i className="text-xl fa-solid fa-user"></i>
                                <h3 className='font-light font-roboto text-xl'>{userName}</h3>
                            </button>
                            <div className={`${showButtons ? 'flex' : 'hidden'} duration-200 flex-col gap-2 absolute top-16 w-48 py-2 px-2 bg-white border rounded-xl shadow-lg`}>
                                <button onClick={() => navigate('/dashboard')} className='border-gray-200 bg-white hover:bg-gray-200 shadow-sm px-4 py-3 border rounded-xl font-inter font-light text-left transform transition duration-100 active:scale-90'>Dashboard</button>
                                <button onClick={handleLogOut} className='flex items-center gap-2 border-gray-200 bg-white hover:bg-gray-200 shadow-sm px-4 py-3 border rounded-xl font-inter text-left transform transition duration-100 active:scale-90'>
                                    <i className="fa-right-from-bracket text-gray-500 text-lg fa-solid"></i>
                                    <p className='font-inter font-light'>Log out</p>
                                </button>
                            </div>
                        </div>
                        : <div className='lg:flex gap-6 hidden'>
                            <button className='font-inter font-medium text-base hover:text-green-700' onClick={() => navigate('/login')}>Log in</button>
                            <PrimaryButton buttonName={'Apply now'} onClick={() => navigate('/signup')} />
                        </div>}
                </div>
                <NavbarModal open={isOpen} />
            </div>
        </div>
    )
}
