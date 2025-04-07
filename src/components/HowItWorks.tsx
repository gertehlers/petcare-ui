import React, { useEffect, useRef } from 'react';
import { Calendar, UserCheck, Heart, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Make a Booking',
    description: 'Contact us via our form or email to schedule your pet care needs.',
    icon: Calendar,
  },
  {
    title: 'Meet & Greet',
    description: 'Free introduction session at your home to meet you and your pet.',
    icon: UserCheck,
  },
  {
    title: 'Pet Sitting Begins',
    description: 'Professional care with daily updates and flexible scheduling.',
    icon: Heart,
  },
  {
    title: 'Return Day',
    description: 'Final update, home check-in, and feedback collection.',
    icon: CheckCircle,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && animationRef.current) {
          animationRef.current.classList.add('run-animation');
          observer.disconnect(); // Only run animation once
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative py-16 bg-primary-50 overflow-hidden" ref={sectionRef}>
      {/* Animated Dogs Container */}
      <div ref={animationRef} className="absolute left-0 right-0 h-20">
        {/* Large Dog */}
        <div className="absolute w-16 h-16 -left-16 dog-large">
          <div className="w-full h-full bg-primary-600"
            style={{
              maskImage: `url("/assets/dog.svg")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
            }}
          />
        </div>
        {/* Medium Dog */}
        <div className="absolute w-12 h-12 -left-12 dog-medium">
          <div className="w-full h-full bg-primary-600"
            style={{
              maskImage: `url("/assets/dog.svg")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
            }}
          />
        </div>
        {/* Small Dog */}
        <div className="absolute w-10 h-10 -left-10 dog-small">
          <div className="w-full h-full bg-primary-600"
            style={{
              maskImage: `url("/assets/dog.svg")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-primary-800 text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-handwritten font-bold text-primary-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform -translate-x-8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;