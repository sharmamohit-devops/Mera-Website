'use client';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Contact Me</h2>
        <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <form action="https://formsubmit.co/mohitfrontendev@gmail.com" method="POST">
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
