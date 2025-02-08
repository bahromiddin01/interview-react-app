import React from 'react'

export default function NavbarLinks({ linkHref, linkName, style, onClick }) {

    return (
        <a onClick={onClick} className={`${style}`} href={linkHref}>{linkName}</a>
    )
}
