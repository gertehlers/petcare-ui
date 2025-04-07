import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [errors, setErrors] = React.useState({ toDate: '' });
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: '',
    fromDate: '',
    toDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({ toDate: '' });

    // Validation: Ensure toDate is not before fromDate
    if (new Date(formData.toDate) < new Date(formData.fromDate)) {
      setErrors({ toDate: 'End date must be after the start date' });
      return;
    }

    // TODO: Implement form submission
    // TODO: Implement default wording for the email body
    window.location.href = `mailto:phylla.smith@gmail.com?subject=Pet Care Inquiry - ${formData.service}
    &body=Name: ${formData.name}
    %0D%0A%0D%0AFrom Date: ${formData.fromDate}
    %0D%0A%0D%0ATo Date: ${formData.toDate}
    %0D%0A%0D%0AMessage: ${formData.message}`;
  };

  return (
    <section id="contact" className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-handwritten font-bold text-primary-800 text-center mb-12">
          Get in Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Mail className="w-6 h-6 text-primary-600 mr-2" />
              <a
                href="mailto:phylla.smith@gmail.com"
                className="text-primary-600 hover:text-primary-800 transition-colors duration-200"
              >
                phylla.smith@gmail.com
              </a>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                  Service Type
                </label>
                <select
                  id="service"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  <option value="Pet Sitting">Pet Sitting</option>
                  <option value="Drop In Visit">Drop In Visit</option>
                  <option value="Drop In Feed">Drop In Feed</option>
                </select>
              </div>
              <div>
                <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
                  From Date
                </label>
                <input
                  type="date"
                  id="fromDate"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.fromDate || ''}
                  onChange={(e) => setFormData({ ...formData, fromDate: e.target.value })}
                />
              </div>
                <div>
                <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
                  {errors.toDate ? (<span className="text-red-500" aria-hidden="true">{errors.toDate}</span>) : ('To Date')}
                </label>
                <input
                  type="date"
                  id="toDate"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.toDate || ''}
                  onChange={(e) => setFormData({ ...formData, toDate: e.target.value })}
                />
                </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
