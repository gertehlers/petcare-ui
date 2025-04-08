import serviceFees from '../data/serviceFees.json';
import { Dog, Home, Cat, Bird } from 'lucide-react';

const services = [
  {
    title: 'Pet Sitting',
    description: 'Professional in-home care including feeding, playtime, and regular updates. Your pet stays comfortable in their familiar environment.',
    icon: Home,
    fee: serviceFees['pet-sitting']['fee'],
    interval: serviceFees['pet-sitting']['interval'],
  },
  {
    title: 'Drop In Visits',
    description: 'Short visits to check on your pet, provide companionship, and ensure their well-being. Ideal for pets who need a little extra attention during the day.',
    icon: Cat,
    fee: serviceFees['drop-in-visit']['fee'],
    interval: serviceFees['drop-in-visit']['interval'],
  },
  {
    title: 'Drop In Feeds',
    description: 'Quick visits to ensure your pet is fed, hydrated, and cared for while you are away. Perfect for busy schedules or short trips.',
    icon: Bird,
    fee: serviceFees['drop-in-feed']['fee'],
    interval: serviceFees['drop-in-feed']['interval'],
  },
  {
    title: 'Meet & Greet',
    description: 'A free introduction session to get to know you and your pet. We`ll discuss routines, preferences, and any special care requirements.',
    icon: Dog,
    fee: 0,
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
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
                <div className="mt-auto text-right">
                  <p className='text-gray-400'>
                    <span className="text-gray-400 text-xs align-top">*</span>{' '}
                    {service.fee === 0 ? 'Free' : `R${service.fee} per ${service.interval}`}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-sm text-gray-500 mt-8 text-center">
          * The fees listed above are indicative and subject to change. Final pricing will be determined and agreed upon during the Meet & Greet session and outlined in the service contract.
        </p>
      </div>
    </section>
  );
};

export default Services;