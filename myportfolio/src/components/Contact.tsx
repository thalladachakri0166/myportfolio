import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, InstagramIcon, Loader2, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      setEmailError(validateEmail(value) ? null : 'Please enter a valid email address.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          reply_to: formData.email,
        },
        '-G1dGSWmoGEPlo_L8'
      );

      // Trigger Confetti Celebration!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#a855f7', '#ec4899', '#34d399'],
      });

      toast.success('Message sent successfully!');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      url: 'https://www.linkedin.com/in/thalladachakri',
      bgHover: 'hover:bg-blue-600/20 hover:border-blue-500/50',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-5 h-5 text-pink-400" />,
      url: 'https://www.instagram.com/_chakri06_?igsh=MTZxdmR1cmN3M3cxMw==',
      bgHover: 'hover:bg-pink-600/20 hover:border-pink-500/50',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5 text-purple-400" />,
      url: 'https://github.com/thalladachakri0166',
      bgHover: 'hover:bg-purple-600/20 hover:border-purple-500/50',
    },
  ];

  return (
    <div id="contact" className="w-full max-w-5xl mx-auto px-4 py-16 scroll-mt-24">
      <Toaster position="top-center" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail className="w-4 h-4" /> Let's Connect
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Get in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-md mx-auto">
          Have a project, internship opportunity, or question? Send me a message!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        
        {/* Left Contact Details & Socials (2 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-6 glass-card p-6 sm:p-8 rounded-2xl border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white tracking-tight">Contact Info</h3>
          
          <div className="space-y-4 text-sm">
            <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-gray-900/60 border border-gray-800">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Direct Email</p>
                <a
                  href="mailto:thalladachakri@gmail.com"
                  className="text-gray-200 hover:text-blue-400 font-medium transition-colors"
                >
                  thalladachakri@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-gray-900/60 border border-gray-800">
              <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Location</p>
                <span className="text-gray-200 font-medium">Telangana, India</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Social Profiles
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-gray-900 border border-gray-800 ${social.bgHover} transition-all duration-300 shadow-md`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Interactive Contact Form (3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 glass-card p-6 sm:p-8 rounded-2xl border border-gray-800"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 bg-gray-950/80 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 bg-gray-950/80 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-all text-sm"
              />
              {emailError && <p className="text-red-400 text-xs mt-1 font-medium">{emailError}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-950/80 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};