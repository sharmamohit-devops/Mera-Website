'use client';

import { useState, FormEvent } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/mohitfrontendev@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitted(true);
        setError(null);
        (event.target as HTMLFormElement).reset();
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          {submitted ? (
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <div className="mb-6">
                <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Your Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Your Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-gray-700 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-4 rounded-lg hover:scale-105 transition-transform">Send Message</button>
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
