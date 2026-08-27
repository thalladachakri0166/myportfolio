import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, InstagramIcon, Loader2, Send, CheckCircle, ChevronDown, Search } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface CountryCode {
  code: string;
  country: string;
  iso: string;
  digits: number | [number, number];
}

const COUNTRY_CODES: CountryCode[] = [
  { code: '+91', country: 'India', iso: 'in', digits: 10 },
  { code: '+1', country: 'United States', iso: 'us', digits: 10 },
  { code: '+44', country: 'United Kingdom', iso: 'gb', digits: 10 },
  { code: '+1', country: 'Canada', iso: 'ca', digits: 10 },
  { code: '+61', country: 'Australia', iso: 'au', digits: 9 },
  { code: '+49', country: 'Germany', iso: 'de', digits: [10, 11] },
  { code: '+33', country: 'France', iso: 'fr', digits: 9 },
  { code: '+81', country: 'Japan', iso: 'jp', digits: 10 },
  { code: '+65', country: 'Singapore', iso: 'sg', digits: 8 },
  { code: '+971', country: 'United Arab Emirates', iso: 'ae', digits: 9 },
  { code: '+966', country: 'Saudi Arabia', iso: 'sa', digits: 9 },
  { code: '+55', country: 'Brazil', iso: 'br', digits: 11 },
  { code: '+52', country: 'Mexico', iso: 'mx', digits: 10 },
  { code: '+86', country: 'China', iso: 'cn', digits: 11 },
  { code: '+82', country: 'South Korea', iso: 'kr', digits: 10 },
  { code: '+39', country: 'Italy', iso: 'it', digits: 10 },
  { code: '+34', country: 'Spain', iso: 'es', digits: 9 },
  { code: '+31', country: 'Netherlands', iso: 'nl', digits: 9 },
  { code: '+41', country: 'Switzerland', iso: 'ch', digits: 9 },
  { code: '+64', country: 'New Zealand', iso: 'nz', digits: 9 },
  { code: '+92', country: 'Pakistan', iso: 'pk', digits: 10 },
  { code: '+880', country: 'Bangladesh', iso: 'bd', digits: 10 },
  { code: '+94', country: 'Sri Lanka', iso: 'lk', digits: 9 },
  { code: '+977', country: 'Nepal', iso: 'np', digits: 10 },
  { code: '+27', country: 'South Africa', iso: 'za', digits: 9 },
  { code: '+234', country: 'Nigeria', iso: 'ng', digits: 10 },
  { code: '+20', country: 'Egypt', iso: 'eg', digits: 10 },
  { code: '+60', country: 'Malaysia', iso: 'my', digits: 9 },
  { code: '+62', country: 'Indonesia', iso: 'id', digits: [10, 12] },
  { code: '+63', country: 'Philippines', iso: 'ph', digits: 10 },
  { code: '+84', country: 'Vietnam', iso: 'vn', digits: 9 },
  { code: '+66', country: 'Thailand', iso: 'th', digits: 9 },
  { code: '+353', country: 'Ireland', iso: 'ie', digits: 9 },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery) ||
      c.iso.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getEmailValidationError = (email: string): string | null => {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return 'Email address is required.';
    if (trimmed === 'thalladachakri@gmail.com') {
      return 'Please enter your own email address, not the recipient email.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  const getPhoneValidationError = (phone: string, country: CountryCode): string | null => {
    const trimmed = phone.trim();
    if (!trimmed) return null; // OPTIONAL: Empty phone is 100% valid

    const digitsOnly = trimmed.replace(/\D/g, '');

    if (digitsOnly.length === 0) {
      return 'Please enter digits for the phone number.';
    }

    if (Array.isArray(country.digits)) {
      const [min, max] = country.digits;
      if (digitsOnly.length < min || digitsOnly.length > max) {
        return `${country.country} (${country.code}) phone number must be between ${min} and ${max} digits (${digitsOnly.length} entered).`;
      }
    } else {
      if (digitsOnly.length !== country.digits) {
        return `${country.country} (${country.code}) phone number must be exactly ${country.digits} digits (${digitsOnly.length} entered).`;
      }
    }

    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'email') {
      setEmailError(getEmailValidationError(value));
    }
    if (name === 'phone') {
      setPhoneError(getPhoneValidationError(value, selectedCountry));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Name is required.');
      return;
    }

    const emailErr = getEmailValidationError(formData.email);
    if (emailErr) {
      setEmailError(emailErr);
      toast.error(emailErr);
      return;
    }

    const phoneErr = getPhoneValidationError(formData.phone, selectedCountry);
    if (phoneErr) {
      setPhoneError(phoneErr);
      toast.error(phoneErr);
      return;
    }

    if (!formData.message.trim()) {
      toast.error('Message is required.');
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
          phone: formData.phone.trim()
            ? `${selectedCountry.country} (${selectedCountry.code}) ${formData.phone.trim()}`
            : 'Not provided',
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
      setFormData({ name: '', email: '', phone: '', message: '' });
      setPhoneError(null);

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" />,
      url: 'https://www.linkedin.com/in/thalladachakri',
      bgHover: 'hover:bg-blue-600/20 hover:border-blue-500/60 hover:shadow-blue-500/20',
      textColor: 'text-blue-400',
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors flex-shrink-0" />,
      url: 'https://www.instagram.com/_chakri06_?igsh=MTZxdmR1cmN3M3cxMw==',
      bgHover: 'hover:bg-pink-600/20 hover:border-pink-500/60 hover:shadow-pink-500/20',
      textColor: 'text-pink-400',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors flex-shrink-0" />,
      url: 'https://github.com/thalladachakri0166',
      bgHover: 'hover:bg-purple-600/20 hover:border-purple-500/60 hover:shadow-purple-500/20',
      textColor: 'text-purple-400',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 scroll-mt-24">
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
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const isHovered = hoveredSocial === social.name;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.12, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`relative flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-gray-900 border border-gray-800 ${social.bgHover} transition-all duration-300 shadow-lg group cursor-pointer`}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.span
                          initial={{ opacity: 0, width: 0, x: -6 }}
                          animate={{ opacity: 1, width: 'auto', x: 0 }}
                          exit={{ opacity: 0, width: 0, x: -6 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className={`text-xs font-bold whitespace-nowrap overflow-hidden ${social.textColor}`}
                        >
                          {social.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.a>
                );
              })}
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
                Your Name <span className="text-rose-400 font-bold">*</span>
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
                Your Email <span className="text-rose-400 font-bold">*</span>
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
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Phone Number <span className="text-gray-500 text-[10px] font-normal normal-case ml-1">(Optional)</span>
              </label>

              <div className="flex gap-2">
                {/* Custom Country Selector Dropdown with Flag Images */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 h-full px-3 py-3 bg-gray-950/80 border border-gray-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-xs sm:text-sm transition-all hover:bg-gray-900 shadow-sm"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                      alt={selectedCountry.country}
                      className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm border border-white/10"
                      loading="lazy"
                    />
                    <span className="font-medium text-gray-200">{selectedCountry.code}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-72 max-h-72 bg-gray-950/95 border border-gray-800 rounded-2xl shadow-2xl backdrop-blur-xl z-50 p-2 flex flex-col"
                      >
                        {/* Search Input */}
                        <div className="relative mb-2 px-1 pt-1">
                          <Search className="w-3.5 h-3.5 absolute left-3.5 top-3 text-gray-500" />
                          <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search country or code..."
                            className="w-full pl-8 pr-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        {/* Country List */}
                        <div className="overflow-y-auto max-h-52 space-y-0.5 pr-1">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((c) => (
                              <button
                                key={`${c.iso}-${c.code}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsDropdownOpen(false);
                                  setSearchQuery('');
                                  setPhoneError(getPhoneValidationError(formData.phone, c));
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all ${
                                  selectedCountry.iso === c.iso
                                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                                    : 'text-gray-300 hover:bg-gray-900 hover:text-white'
                                }`}
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <img
                                    src={`https://flagcdn.com/w40/${c.iso}.png`}
                                    alt={c.country}
                                    className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm flex-shrink-0 border border-white/10"
                                    loading="lazy"
                                  />
                                  <span className="truncate">{c.country}</span>
                                </div>
                                <span className="text-gray-400 font-mono text-[11px] ml-2 flex-shrink-0">{c.code}</span>
                              </button>
                            ))
                          ) : (
                            <p className="text-center text-xs text-gray-500 py-3">No matching country found</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Phone Input */}
                <div className="flex-1">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={`e.g. ${'9'.repeat(Array.isArray(selectedCountry.digits) ? selectedCountry.digits[0] : selectedCountry.digits)}`}
                    className={`w-full px-4 py-3 bg-gray-950/80 border ${
                      phoneError
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-800 focus:border-blue-500 focus:ring-blue-500'
                    } rounded-xl focus:outline-none focus:ring-1 text-white placeholder-gray-600 transition-all text-sm`}
                  />
                </div>
              </div>

              {phoneError ? (
                <p className="text-red-400 text-xs mt-1 font-medium">{phoneError}</p>
              ) : (
                <p className="text-gray-500 text-[11px] mt-1 flex items-center gap-1.5">
                  <img
                    src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                    alt={selectedCountry.country}
                    className="w-3.5 h-2.5 object-cover rounded-[1px]"
                  />
                  <span>
                    Selected {selectedCountry.country} ({selectedCountry.code}) requires{' '}
                    {Array.isArray(selectedCountry.digits)
                      ? `${selectedCountry.digits[0]}-${selectedCountry.digits[1]}`
                      : selectedCountry.digits}{' '}
                    digits.
                  </span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Message <span className="text-rose-400 font-bold">*</span>
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