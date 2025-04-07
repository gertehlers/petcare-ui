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
  const dogRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && dogRef.current) {
          dogRef.current.classList.add('run-animation');
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
      {/* Animated Dog Silhouette */}
      <div 
        ref={dogRef}
        className="absolute w-12 h-12 bg-primary-600/20 -left-12"
        style={{
          maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5'/%3E%3Cpath d='M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5'/%3E%3Cpath d='M8 14v.5'/%3E%3Cpath d='M16 14v.5'/%3E%3Cpath d='M11.25 16.25h1.5L12 17l-.75-.75Z'/%3E%3Cpath d='M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306'/%3E%3C/svg%3E")`,
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          maskSize: 'contain',
        }}
      />

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