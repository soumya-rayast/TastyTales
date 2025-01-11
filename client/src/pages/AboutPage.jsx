import React from 'react';
import image from '../assets/aboutPage.webp';

const AboutPage = () => {
    return (
        <section className="px-6 lg:px-12 py-20 ">
            <h1 className="text-center text-4xl font-bold text-secondary sm:text-6xl mb-12">
                About Us
            </h1>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 items-center">
                {/* Text Section */}
                <div className="text-center sm:text-left">
                    <p className="text-lg leading-relaxed text-gray-700">
                        Welcome to our world of culinary exploration! We are passionate about crafting delightful recipes and sharing our love for food with you. Our journey is fueled by creativity, authenticity, and a sprinkle of magic that brings every dish to life.
                    </p>
                    <p className="mt-6 text-lg leading-relaxed text-gray-700">
                        Whether you're a seasoned chef or just starting your culinary adventure, we have something special for everyone. Join us as we create, inspire, and savor the beauty of cooking together.
                    </p>
                </div>
                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt="About page illustration"
                        className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
