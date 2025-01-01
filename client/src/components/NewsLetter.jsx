import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto flex flex-col items-center p-10">
      <h3 className="text-secondary font-semibold text-center text-4xl">
        Sign up for my weekly newsletter
      </h3>
      <p className="mt-6 text-gray-600 text-lg text-center leading-normal font-light">
        Weekly emails with my latest recipes, cooking tips and tricks, and product recommendations! You'll be set up in minutes.
      </p>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center w-full gap-4 mb-20">
        <input
          className="w-full  md:w-auto flex-grow px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full md:w-auto flex-grow px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
          type="email"
          placeholder="Email Address"
        />
        <button
          type="submit"
          className="py-3 px-6 bg-btnCOlor  text-white font-semibold rounded-md hover:bg-secondary-dark transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
