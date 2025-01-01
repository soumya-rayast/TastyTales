import React from 'react'
import { IoSearch } from "react-icons/io5";
const HeroSection = () => {
    return (
        <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
            <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>
                A blog template made for food <span className='text-orange-400'>influencer's</span></h1>
            <form action="/search"
            className='bg-white p-4 rounded relative flex items-center'
            >
                <IoSearch className='w-5 h-5 mr-3 text-neutral-500' />
                <input type="search" name='query' placeholder='search your fav. recipe'
                    id='search' className='outline-none w-full placeholder:text-[##1b2629]'
                />
            </form>
        </div>
    )
}

export default HeroSection
