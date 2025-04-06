import React from 'react';
import { Link } from 'react-scroll';
import { Heart, Instagram, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-handwritten font-bold text-primary-800 mb-6">
            Welcome to PetCare by Phyllis
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-handwritten">
            Caring for your pets like they're family – in the comfort of their own home
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 cursor-pointer"
            >
              <Heart className="w-5 h-5 mr-2" />
              Make a Booking
            </Link>
            <div className="flex gap-4 justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 text-base font-medium rounded-full text-primary-700 bg-white hover:bg-primary-50"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 text-base font-medium rounded-full text-primary-700 bg-white hover:bg-primary-50"
              >
                <Star className="w-5 h-5 mr-2" />
                Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;