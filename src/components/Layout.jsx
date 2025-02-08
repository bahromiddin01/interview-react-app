import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { supabase } from '../supabase/supabase'

export default function Layout({ children }) {

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {

        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser()

            if (!data.user) {
                navigate('/login')
            } else {
                setUser(data.user)
            }
        }

        fetchUser()

    }, [])

    return (
        <div>
            {children}
        </div>
    )
}
