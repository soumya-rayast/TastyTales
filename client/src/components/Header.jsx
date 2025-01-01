import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import logo from '/logo.png'
import MobileNav from './MobileNav'
const Header = () => {
    const [hideLeft, setHideLeft] = useState("-left-[1000px]")
    const menuItems = ['recipes', 'resources', 'about', 'contacts']

    const onOpen = () => {
        setHideLeft('-left-0');
    }
    const onClose = () => {
        setHideLeft('-left-[1000px]')
    }
    return (
        <>
            <div className=' max-[900px]:hidden'>
                <DesktopNav
                    menuItems={menuItems}
                    logo={logo} />
            </div>
            <div className=' min-[900px]:hidden'>
                <MobileNav
                    menuItems={menuItems}
                    logo={logo}
                    onClose={onClose}
                    hideLeft={hideLeft}
                    onOpen={onOpen}
                    />
            </div>
        </>
    )
}

export default Header
