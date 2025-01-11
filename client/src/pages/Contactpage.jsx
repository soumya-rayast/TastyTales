import React from 'react';

const ContactPage = () => {
  return (
    <section className="px-6 lg:px-12 py-20 ">
      <h1 className="text-center text-4xl font-bold text-secondary sm:text-6xl mb-8">
        Contact Us
      </h1>
      <p className="text-center sm:w-2/3 lg:w-1/2 mx-auto mb-12 text-gray-600 leading-relaxed">
        We’d love to hear from you! Whether you have a question about our services, feedback, or just want to say hi, feel free to reach out to us.
      </p>

      {/* Contact Information and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-secondary">Get in Touch</h2>
          <p className="text-gray-600">
            <strong>Company Name:</strong> TastyTales
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong>{' '}
            <a href="mailto:info@tastytales.com" className="text-blue-600 hover:underline">
              info@tastytales.com
            </a>
          </p>
          <p className="text-gray-600">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> 123 Flavor Street, Gourmet City, FoodLand 45678
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-secondary focus:border-secondary"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-secondary focus:border-secondary"
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-secondary focus:border-secondary"
                placeholder="Your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-btnCOlor text-white font-semibold py-3 rounded-lg hover:bg-secondary-dark transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
