import React from 'react';
import { FileText, Youtube, Heart, Phone } from 'lucide-react';

const documents = [
  {
    title: 'Pet Sitting Contract',
    description: 'Our standard service agreement outlining responsibilities and terms.',
    icon: FileText,
    url: '#',
  },
  {
    title: 'Terms & Conditions',
    description: 'Detailed terms of service and policies.',
    icon: FileText,
    url: '#',
  },
  {
    title: 'Service Agreement',
    description: 'Comprehensive overview of our service commitments.',
    icon: FileText,
    url: '#',
  },
];

const guides = [
  {
    title: 'Preparing for a Pet Sitter',
    description: 'Essential tips to ensure a smooth pet sitting experience.',
    icon: Heart,
    url: '#',
  },
  {
    title: 'Dog Walking Safety Guide',
    description: 'Best practices for safe and enjoyable walks.',
    icon: Heart,
    url: '#',
  },
];

const videos = [
  {
    title: 'Understanding Cat Body Language',
    description: 'Learn to read your cat\'s signals and moods.',
    icon: Youtube,
    url: 'https://youtube.com/watch?v=example1',
  },
  {
    title: 'Dog Training Basics',
    description: 'Essential commands and positive reinforcement techniques.',
    icon: Youtube,
    url: 'https://youtube.com/watch?v=example2',
  },
];

const emergency = [
  {
    title: 'Emergency Vet Clinic',
    description: '24/7 Emergency Care: +27 21 555 0000',
    icon: Phone,
    url: 'tel:+27215550000',
  },
  {
    // For poison-related emergencies, contact the Poisons Information Helpline of the Western Cape at 0861 555 777 
    title: 'Poisons Information Helpline of the Western Cape (PIHWC)',
    description: 'For 24/7 poison-related emergencies: +27 861 555 777',
    icon: Phone,
    phone: 'tel:+27861555777',
    url: 'https://d7.westerncape.gov.za/service/poisons-information-helpline-western-cape',
  },
  {
    title: 'The Cape of Good Hope SPCA',
    description: 'Animal welfare concerns: +27 21 700 4140',
    icon: Phone,
    url: 'tel:+27217004140',
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-primary-800 text-center mb-12">
          Pet Care Resources
        </h2>

        {/* Documents Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-handwritten font-bold text-primary-700 mb-6">
            Important Documents
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc) => {
              const Icon = doc.icon;
              return (
                <div key={doc.title} className="bg-primary-50 rounded-lg p-6 hover:bg-primary-100 transition-colors">
                  <div className="flex items-start">
                    <Icon className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-primary-800 mb-2">{doc.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                      <a
                        href={doc.url}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Download PDF →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pet Care Guides */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-handwritten font-bold text-primary-700 mb-6">
            Pet Care Guides
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <div key={guide.title} className="bg-white border border-primary-100 rounded-lg p-6 hover:border-primary-300 transition-colors">
                  <div className="flex items-start">
                    <Icon className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-primary-800 mb-2">{guide.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                      <a
                        href={guide.url}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Video Resources */}
        {/* <div className="mb-12">
          <h3 className="text-2xl font-handwritten font-bold text-primary-700 mb-6">
            Educational Videos
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video) => {
              const Icon = video.icon;
              return (
                <div key={video.title} className="bg-primary-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <Icon className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-primary-800 mb-2">{video.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Watch Video →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Emergency Contacts */}
        <div>
          <h3 className="text-2xl font-handwritten font-bold text-primary-700 mb-6">
            Emergency Contacts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {emergency.map((contact) => {
              const Icon = contact.icon;
              return (
                <div key={contact.title} className="bg-red-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <Icon className="w-6 h-6 text-red-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">{contact.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{contact.description}</p>
                      <a
                        href={contact.url}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Call Now →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;


// . . In case of medical emergencies, dial 10177 for ambulance services . Additionally, the National Sea Rescue Institute (NSRI) can be contacted at 087 094 9774 for water-related incidents .