import React from 'react';
import SocialLinks from './SocialLinks';

import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPaw } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <section
     id="home"
     className="relative min-h-[90vh] flex items-center bg-cover bg-center bg-no-repeat"
     style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
     }}
     >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/90 via-primary-50/80 to-white" />

      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-primary-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-handwritten font-bold text-primary-800 mb-6">
            Welcome to PetCare by Phyllis
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-handwritten">
            Caring for your pets like they're family <br/>
            - in the comfort of their own home -
          </p>
          <div className="flex flex-col items-center gap-4 mb-12">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 cursor-pointer transform hover:scale-105 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faPaw} className="w-5 h-5 mr-4" />
              Make a booking
              <FontAwesomeIcon icon={faPaw} className="w-5 h-5 ml-4" />
            </Link>
            <SocialLinks sizeClass='!w-6 !h-6' />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;