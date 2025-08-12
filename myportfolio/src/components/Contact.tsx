import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, InstagramIcon, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    // Simple regex for demonstration
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'email') {
      setEmailError(validateEmail(value) ? null : 'Please enter a valid email address.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Extra validation before sending
    if (!formData.name.trim()) {
      toast.error('Name is required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_i54b5an',
        'template_0ozp0yb',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        '-G1dGSWmoGEPlo_L8'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Toaster position="top-center" />
      <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? 'visible' : ''}`}>
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
      </div>
      <div ref={contentRef} className={`grid grid-cols-1 md:grid-cols-2 gap-8 scroll-fade-up ${contentVisible ? 'visible' : ''}`}>
        <div className="space-y-8 scroll-fade-up-delay-1">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <a href="mailto:thalladachakri@gmail.com" className="text-gray-300 hover:text-white">
                thalladachakri@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-red-500" />
              <span className="text-gray-300">Telangana, India</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/thalladachakri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/_chakri06_?igsh=MTZxdmR1cmN3M3cxMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 scroll-fade-up-delay-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};