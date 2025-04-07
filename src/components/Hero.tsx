import React from 'react';
import { Link } from 'react-scroll';
import { Heart, Instagram, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image - Hidden on Mobile */}
      <div 
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80")',
        }}
      />
      
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
            Caring for your pets like they're family – in the comfort of their own home
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 cursor-pointer transform hover:scale-105 transition-all duration-200"
            >
              <Heart className="w-5 h-5 mr-2" />
              Book a Meet & Greet
            </Link>
            <div className="flex gap-4 justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 text-base font-medium rounded-full text-primary-700 bg-white hover:bg-primary-50 transform hover:scale-105 transition-all duration-200"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 text-base font-medium rounded-full text-primary-700 bg-white hover:bg-primary-50 transform hover:scale-105 transition-all duration-200"
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