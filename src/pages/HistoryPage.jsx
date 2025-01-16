import React, { useState } from 'react'
import HistoryMainSection from '../sections/historyPageSections/HistoryMainSection'
import HistoryNavbarSection from '../sections/historyPageSections/HistoryNavbarSection'

export default function HistoryPage() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex'>
            <HistoryNavbarSection isOpen={isOpen} />
            <HistoryMainSection isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
