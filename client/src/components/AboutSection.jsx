import React from 'react';
import AboutImg from '../assets/about-image.jpg';

const AboutSection = () => {
    return (
        <section className='overflow-hidden flex  flex-col md:flex-row justify-between items-center sm:my-20 my-8 md:gap-16 gap-8 px-6 mx-4 lg:px-16 bg-gradient-to-bl from-gray-100 to-white shadow-md rounded-lg'>
            {/* Text Section */}
            <div className='text-start md:w-1/2'>
                <h2 className='text-4xl font-bold text-secondary sm:text-5xl leading-snug'>
                    Vegan foodie who loves to experiment with recipes
                </h2>
                <p className='text-lg mt-4 text-gray-600'>
                    Join me on a journey of culinary creativity, where I explore plant-based ingredients and whip up delightful recipes to inspire your inner chef.
                </p>
                <div className='mt-10'>
                    <button className='py-3 px-6 bg-secondary text-white hover:bg-secondary-dark transition-all duration-200 text-lg font-medium rounded-lg shadow-md focus:outline-none'>
                        Learn More
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className='relative md:w-1/2'>
                <img 
                    src={AboutImg} 
                    alt="About Me" 
                    className='rounded-lg shadow-lg' 
                />
            </div>
        </section>
    );
};

export default AboutSection;
