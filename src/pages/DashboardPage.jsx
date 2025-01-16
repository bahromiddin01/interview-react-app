import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import DashboardMainSection from '../sections/dashboardPageSections/DashboardMainSection'
import DashboardNavbarSection from '../sections/dashboardPageSections/DashboardNavbarSection'
import { supabase } from '../supabase/supabase'

export default function DashboardPage() {
    const [isOpen, setIsOpen] = useState(false)
    const { setUser } = useContext(UserContext)

    useEffect(() => {
        const init = async () => {
            const { data } = await supabase.auth.getUser()
            setUser(data.user)
        }

        init()
    }, [])

    return (
        <div className='flex'>
            <DashboardNavbarSection isOpen={isOpen} />
            <DashboardMainSection isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
