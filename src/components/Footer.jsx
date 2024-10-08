import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-Black py-8">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-12 md:h-20" />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="space-y-4 md:space-y-0 md:space-x-8">
  <Link to="/about" className="text-lg font-bold hover:text-primary transition-colors duration-300">
    About Us
  </Link>
  <Link to="/" className="text-lg font-bold hover:text-primary transition-colors duration-300">
    Services
  </Link>
  <Link to="/" className="text-lg font-bold hover:text-primary transition-colors duration-300">
    Contact Us
  </Link>
  <Link to="/" className="text-lg font-bold hover:text-primary transition-colors duration-300">
    Privacy Policy
  </Link>
</div>


          {/* Social Media Links */}
          <div className="flex space-x-6 text-lg">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black text-lg transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black  transition-colors duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blac transition-colors duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-black text-lg">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
