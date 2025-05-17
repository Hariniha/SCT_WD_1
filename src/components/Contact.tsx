import React from 'react';

const Contact: React.FC = () => (
 <section
  id="contact"
  className="min-h-screen px-6 py-20 max-w-7xl mx-auto bg-gray-100"
>
  <h2 className="text-4xl font-bold mb-6 text-center text-indigo-900">Get in Touch</h2>
  <p className="max-w-xl mx-auto text-center mb-8 text-gray-700">
    Interested in boosting your team’s productivity? Reach out to learn more or start your free trial today.
  </p>
  <form className="max-w-xl mx-auto space-y-6">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      required
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      required
    />
    <textarea
      placeholder="Your Message"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      rows={5}
      required
    ></textarea>
    <button
      type="submit"
      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition"
    >
      Contact Us
    </button>
  </form>
</section>

);

export default Contact;
