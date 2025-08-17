import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center  px-4"
    >
      <div className="w-full max-w-md  rounded-xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-2">Let's Talk</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Whether you're looking to build a new website, improve your existing
          platform, or bring a unique project to life, I'm here to help.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-white mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Disha"
              className="w-full px-4 py-2 rounded-lg bg-[#1f2937] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="disha.sahay2005@gmail.com"
              className="w-full px-4 py-2 rounded-lg bg-[#1f2937] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-white mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Share your thoughts..."
              className="w-full px-4 py-2 rounded-lg bg-[#1f2937] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition"

          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
