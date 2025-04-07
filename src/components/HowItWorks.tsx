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
          <div className="w-full h-full bg-primary-600/30"
            style={{
              // maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40,60 Q50,70 60,60 Q70,50 80,60 L90,50 L80,40 Q70,30 60,40 Q50,50 40,40 L30,50 L40,60 Z M45,55 L50,55 M65,55 L70,55'/%3E%3C/svg%3E")`,
              maskImage: `url("/src/assets/dog.svg")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
            }}
          />
        </div>
        {/* Medium Dog */}
        <div className="absolute w-12 h-12 -left-12 dog-medium">
          <div className="w-full h-full bg-primary-600/25"
            style={{
              // maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M35,65 Q45,75 55,65 Q65,55 75,65 L85,55 L75,45 Q65,35 55,45 Q45,55 35,45 L25,55 L35,65 Z M40,60 L45,60 M60,60 L65,60'/%3E%3C/svg%3E")`,
              maskImage: `url("/src/assets/dog.svg")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              maskSize: 'contain',
            }}
          />
        </div>
        {/* Small Dog */}
        <div className="absolute w-10 h-10 -left-10 dog-small">
          <div className="w-full h-full bg-primary-600/20"
            style={{
              // maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30,70 Q40,80 50,70 Q60,60 70,70 L80,60 L70,50 Q60,40 50,50 Q40,60 30,50 L20,60 L30,70 Z M35,65 L40,65 M55,65 L60,65'/%3E%3C/svg%3E")`,
              maskImage: `url("/src/assets/dog.svg")`,
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