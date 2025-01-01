import React from 'react';

const ContactPage = () => {
  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Contact Us
      </h1>
      <p className="text-center sm:w-1/2 mx-auto mb-10 leading-relaxed">
        We’d love to hear from you! Whether you have a question about our services, feedback, or just want to say hi, feel free to reach out to us.
      </p>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p>
            <strong>Company Name:</strong> TastyTales
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@tastytales.com" className="text-blue-600 underline">
              info@tastytales.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Flavor Street, Gourmet City, FoodLand 45678
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="johndoe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-btnCOlor text-white font-semibold px-6 py-3 rounded-lg hover:bg-secondary-dark transition"
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
