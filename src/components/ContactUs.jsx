import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png';
import slide1 from '../assets/slide1.jpg';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bt1lw1g',      // Replace with your EmailJS service ID
        'template_4i97e1n',     // Replace with your EmailJS template ID
        form.current,
        'SF3dPDfueF5_pd1cI'     // Replace with your EmailJS public key
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
    <div
      className="min-h-screen bg-gray-900 text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.9)), url(${slide1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          {/* Logo */}
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              src={logo}
              alt="Hybrutos Racing Logo"
              className="w-96 h-96 object-contain mb-8 filter drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 rounded bg-gray-700/90 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1">Contact (Phone/Email)</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="w-full p-2 rounded bg-gray-700/90 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full p-2 rounded bg-gray-700/90 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center space-x-2">
                  <span className="text-2xl">📞</span>
                  <span>+91 9148436825</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-2xl">📞</span>
                  <span>+91 7259305803</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-2xl">✉</span>
                  <span>hybrutosracing@gmail.com</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white hover:text-green-400 transition-colors">Home</button>
                <button onClick={() => document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white hover:text-green-400 transition-colors">Sponsors</button>
                <button onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white hover:text-green-400 transition-colors">Achievements</button>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-white hover:text-green-400 transition-colors">Contact</button>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Follow Us</h3>
              <div className="flex justify-center space-x-8">
                <a href="#" className="text-white hover:text-green-400 transition-colors transform hover:scale-110">
                  <FaInstagram className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-green-400 transition-colors transform hover:scale-110">
                  <FaLinkedin className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-green-400 transition-colors transform hover:scale-110">
                  <FaTwitter className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
