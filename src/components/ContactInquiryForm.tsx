'use client';

import React, { useState } from 'react';
import { X, Mail, Phone, User, Calendar, Users, MessageSquare, Send } from 'lucide-react';

interface ContactInquiryFormProps {
  accommodationName: string;
  onClose: () => void;
}

const ContactInquiryForm: React.FC<ContactInquiryFormProps> = ({ accommodationName, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after 2 seconds and close
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          guests: '1',
          message: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto animate-fadeIn text-black"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl w-full my-8 shadow-2xl relative transform transition-all animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 hover:rotate-90 transform duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-xl">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-green-50">Inquire about {accommodationName}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="+250 XXX XXX XXX"
              />
            </div>
          </div>

          {/* Stay Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-In Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check-Out Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={formData.checkIn || new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Guests
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
                <option value="10+">10+ Guests</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message / Special Requests
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your preferences, special requirements, or any questions you have..."
              />
            </div>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">Thank you! We'll get back to you shortly.</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 group"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center">
            We'll respond to your inquiry within 24 hours
          </p>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactInquiryForm;