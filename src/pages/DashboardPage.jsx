import React, { useState } from 'react'
import Layout from '../components/Layout'
import DashboardMainSection from '../sections/dashboardPageSections/DashboardMainSection'
import DashboardNavbarSection from '../sections/dashboardPageSections/DashboardNavbarSection'

export default function DashboardPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [success, setSuccess] = useState(false)

    return (
        <Layout>
            <div className='flex'>
                <DashboardNavbarSection success={success} isOpen={isOpen} />
                <DashboardMainSection success={success} setSuccess={setSuccess} isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </Layout>
    )
}
