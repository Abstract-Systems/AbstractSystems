import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-100 bg-white rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <div>
          <label className="text-gray-700 font-medium">Name</label>
          <input
            className="w-full py-2 px-4 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:border-primary"
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Email</label>
          <input
            className="w-full py-2 px-4 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:border-primary"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Message</label>
          <textarea
            className="w-full py-2 px-4 bg-gray-100 text-gray-800 border border-gray-300 rounded focus:outline-none focus:border-primary"
            placeholder="Your Message"
          />
        </div>
        <div>
          <button className="w-full py-2 px-4 bg-primary text-white font-medium rounded hover:bg-primary-dark focus:outline-none focus:bg-primary-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
