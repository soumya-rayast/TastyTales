import React from 'react';

const Subscription = () => {
    return (
        <div className="bg-white py-16 rounded-t-md">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                            Subscribe to our newsletter.
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Stay updated with the latest news and exclusive offers. Sign up now and never miss a thing!
                        </p>
                    </div>
                    <div className="sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            className="flex-grow px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="py-3 px-6 bg-btnCOlor  text-white font-semibold rounded-md hover:bg-secondary-dark transition ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;