import React from 'react';
import { Dog, Home, Heart, Clock } from 'lucide-react';

const services = [
  {
    title: 'Pet Sitting',
    description: 'Professional in-home care including feeding, playtime, and regular updates. Your pet stays comfortable in their familiar environment.',
    icon: Home,
  },
  {
    title: 'Dog Walking',
    description: 'Tailored walking schedules to match your dog's energy levels and needs. Individual or group walks available.',
    icon: Dog,
  },
  {
    title: 'Meet & Greet',
    description: 'A free introduction session to get to know you and your pet. We'll discuss routines, preferences, and any special care requirements.',
    icon: Heart,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-primary-800 text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-handwritten font-bold text-primary-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;