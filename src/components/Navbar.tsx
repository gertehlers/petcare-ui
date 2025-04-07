import React from 'react';
import { Link } from 'react-scroll';
import { PawPrintIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="home" spy={true} smooth={true} offset={-64} duration={500} className="flex items-center cursor-pointer transform hover:scale-105 transition-all duration-200">
            <PawPrintIcon className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-handwritten font-bold text-primary-600">
              PetCare by Phyllis
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'How It Works', 'FAQs', 'Resources', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase().replace(/\s+/g, '-')}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="font-handwritten text-gray-600 hover:text-primary-600 cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;