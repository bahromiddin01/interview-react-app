import React, { useEffect, useState } from 'react'
import HistoryMainSection from '../sections/historyPageSections/HistoryMainSection'
import HistoryNavbarSection from '../sections/historyPageSections/HistoryNavbarSection'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function HistoryPage() {

    const [isOpen, setIsOpen] = useState(false)
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {

        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser()

            if (!data.user) {
                navigate('/login')
            }
        }

        fetchUser()

    }, [])

    return (
        <Layout>
            <div className='flex'>
                <HistoryNavbarSection success={success} isOpen={isOpen} />
                <HistoryMainSection success={success} setSuccess={setSuccess} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </Layout>
    )
}
