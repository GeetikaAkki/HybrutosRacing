import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bt1lw1g',      // Replace with your EmailJS service ID
        'template_4i97e1n',     // Replace with your EmailJS template ID
        form.current,
        'SF3dPDfueF5_pd1cI'       // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row p-8 md:p-16">
      {/* Left Side */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <p className="mb-2">📞 +91 9148436825</p>
        <p className="mb-2">📞 +91 7259305803</p>
        <p className="mb-4">✉️ hybrutosracing@gmail.com</p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">Navigate:</h3>
        <ul className="space-y-2">
          <li><Link to="/" className="text-green-400 hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-green-400 hover:underline">About</Link></li>
          <li><Link to="/sponsors" className="text-green-400 hover:underline">Sponsors</Link></li>
          <li><Link to="/events" className="text-green-400 hover:underline">Events</Link></li>
          <li><Link to="/gallery" className="text-green-400 hover:underline">Gallery</Link></li>
        </ul>
      </div>

      {/* Right Side (Form) */}
      <div className="md:w-1/2 bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1">Contact (Phone/Email)</label>
            <input
              type="text"
              name="contact"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div> 
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
