import React from 'react'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
const MobileNav = ({ menuItems, logo, onClose, hideLeft, onOpen }) => {
    return (
        <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
            <Link to='/' >
                <img src={logo} alt="tasty tales" className='w-14 h-14' />
            </Link>
            <button onClick={onOpen} className='border border-primary rounded' >
                <CiMenuFries className='w-7 h-7' />
            </button>

            <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
                <button onClick={onClose} className='absolute right-8 top-32'>
                    <IoCloseSharp className='w-7 h-7' />
                </button>
                <div>
                    <ul className=' flex flex-col gap-5'>
                        {
                            menuItems?.map((menu, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={menu} className='font-medium capitalize text-secondary text-2xl'>
                                            {menu}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNav
