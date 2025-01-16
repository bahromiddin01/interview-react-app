import React, { useState } from 'react'
import MentorMainSection from '../sections/mentorPageSections/MentorMainSection'
import MentorNavbarSection from '../sections/mentorPageSections/MentorNavbarSection'

export default function MentorPage() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex'>
            <MentorNavbarSection isOpen={isOpen} />
            <MentorMainSection isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
