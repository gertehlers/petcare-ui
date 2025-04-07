import React from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Can you give medication?',
    answer: 'Yes, I'm experienced in administering various types of pet medications, including pills, liquids, and injections. We'll discuss your pet's medical needs during our Meet & Greet session.',
  },
  {
    question: 'Do you offer overnight stays?',
    answer: 'Yes, overnight pet sitting services are available for pets that need round-the-clock care or companionship. This includes evening and morning routines.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'I currently serve the greater metropolitan area, including surrounding suburbs within a 20-mile radius. Contact me to confirm if your location is within my service area.',
  },
  {
    question: 'How will I know how my pet is doing?',
    answer: 'I provide daily updates including photos and detailed notes about your pet's activities, meals, and overall well-being through text or email, based on your preference.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-primary-800 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-handwritten font-medium text-left text-primary-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary-600" />
                ) : (
                  <Plus className="w-5 h-5 text-primary-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;