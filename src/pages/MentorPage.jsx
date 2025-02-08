import React, { useEffect, useState } from 'react'
import MentorMainSection from '../sections/mentorPageSections/MentorMainSection'
import MentorNavbarSection from '../sections/mentorPageSections/MentorNavbarSection'
import { supabase } from '../supabase/supabase'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

export default function MentorPage() {

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
                <MentorNavbarSection success={success} isOpen={isOpen} />
                <MentorMainSection success={success} setSuccess={setSuccess} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </Layout>
    )
}
