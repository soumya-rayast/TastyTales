import React from 'react';
import FeaturedImg from '../assets/featured.webp';

const FeaturedSection = () => {
  return (
    <section className='overflow-hidden flex flex-col md:flex-row justify-between items-center sm:my-20 my-8 md:gap-16 gap-8 mx-4 px-6 lg:px-16 bg-gradient-to-br from-white to-gray-50 shadow-md rounded-lg'>
      {/* Image Section */}
      <div className='relative md:w-1/2 my-2'>
        <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md tracking-wider shadow-sm'>
          Featured Recipe
        </div>
        <img 
          src={FeaturedImg} 
          alt="Featured Recipe" 
          className='rounded-lg shadow-lg' 
        />
      </div>

      {/* Text Section */}
      <div className='text-start md:w-1/2'>
        <h2 className='text-4xl font-bold text-secondary sm:text-5xl leading-snug'>
          Pineapple + Smoked Jackfruit Pizza
        </h2>
        <p className='text-lg mt-4 text-gray-600'>
          Discover the perfect blend of sweet and smoky flavors with our pineapple and smoked jackfruit pizza. A delightful twist on a classic favorite!
        </p>
      </div>
    </section>
  );
};

export default FeaturedSection;
