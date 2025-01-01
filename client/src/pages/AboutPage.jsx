import React from 'react'
import image from '../assets/aboutPage.webp'
const AboutPage = () => {
    return (
        <section className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>
                About
            </h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 items-center">
                <p className="text-center sm:text-left sm:w-3/4 mx-auto sm:mx-0 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, perferendis. Tempore expedita asperiores voluptas est magni exercitationem accusantium corporis perspiciatis, vero deserunt?
                </p>
                <div className="flex justify-center">
                    <img src={image} alt="About page illustration" className="w-full max-w-md h-auto object-cover rounded-lg shadow-md" />
                </div>
            </div>

        </section>
    )
}

export default AboutPage
