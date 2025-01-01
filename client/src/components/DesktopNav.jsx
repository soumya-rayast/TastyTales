import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNav = ({ menuItems, logo }) => {
    return (
        <div className='j-16 flex justify-between items-center px-6 lg:px-12'>
            <Link to='/' className=' flex justify-center items-center'>
                <img src={logo} alt="tasty tales" className='w-20 h-w-20' />
                <p className='text-2xl font-semibold'>TastyTales</p>
            </Link>
            <ul className='flex gap-7' >
                {
                    menuItems?.map((menu, index) => (
                        <li key={index}>
                            <Link to={menu} className='font-medium capitalize text-secondary' >{menu}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DesktopNav
