import React from 'react'

export default function NavbarLinks({ linkHref, linkName, style }) {

    return (
        <a className={`${style}`} href={linkHref}>{linkName}</a>
    )
}
