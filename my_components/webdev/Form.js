import React from "react";

function Form() {
  return (
    <form className="flex flex-col gap-6">
      {/* Name Input */}
      <div className="relative">
        <input
          type="text"
          id="name"
          className="peer w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute left-3 top-3 text-gray-500 text-lg transition-all peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
        >
          Your Name
        </label>
      </div>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          id="email"
          className="peer w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute left-3 top-3 text-gray-500 text-lg transition-all peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
        >
          Your Email
        </label>
      </div>

      {/* Message Textarea */}
      <div className="relative">
        <textarea
          id="message"
          rows="4"
          className="peer w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder=" "
        ></textarea>
        <label
          htmlFor="message"
          className="absolute left-3 top-3 text-gray-500 text-lg transition-all peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
        >
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}

export default Form;
