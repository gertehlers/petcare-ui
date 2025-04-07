import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Instagram, Star, LogIn } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-primary-800 mb-4">Contact Us</h3>
            <div className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:phylla.smith@gmail.com">phylla.smith@gmail.com</a>
            </div>
            <p className="mt-4 text-gray-600">Serving the Northern Suburbs of Cape Town</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'How It Works', 'FAQs', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(/\s+/g, '-')}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Future Features */}
          <div>
            <h3 className="text-lg font-bold text-primary-800 mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Star className="w-6 h-6" />
              </a>
            </div>
            {/* Future Features (Muted) */}
            <div className="space-y-2">
              <button className="flex items-center text-gray-400 hover:text-primary-400 transition-colors cursor-not-allowed" disabled>
                <LogIn className="w-4 h-4 mr-2" />
                <span>Client Login</span>
              </button>
              <div className="text-gray-400 space-x-4 text-sm">
                <a href="#" className="hover:text-primary-400 cursor-not-allowed">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-primary-400 cursor-not-allowed">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-100 pt-6">
          <p className="text-center text-gray-600 text-sm">
            © 2025 PetCare by Phyllis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;