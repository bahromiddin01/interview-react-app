import { linksData } from './NavbarLinksData'
import NavbarLinks from './NavbarLinks'
import PrimaryButton from '../../../components/PrimaryButton'

export default function NavbarModal({ open }) {

    return (
        <div className={'flex flex-col justify-start items-center gap-12 z-50 fixed top-[74px] left-0 w-full h-full bg-white duration-300 4xl:container ' + (open ? "" : "-translate-x-[100%]")}>
            
            <div className='flex flex-col justify-around h-full w-full md:px-40 px-8 pb-8'>

                <div className='flex flex-col items-center gap-6'>
                    {linksData.map((data) => <NavbarLinks linkHref={data.href} linkName={data.name} key={data.id} style={`text-base font-semibold font-inter hover:text-green-700`} />)}
                </div>

                <div className='flex flex-col gap-6'>
                    <PrimaryButton buttonName={'Sign up'} />
                    <button className='text-xs md:text-base font-medium font-inter md:px-8 md:py-3 px-6 py-2 rounded-full hover:bg-gray-100'>Log in</button>
                </div>

            </div>

        </div>
    )
}
