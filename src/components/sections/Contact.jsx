import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Facebook, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../SectionTitle';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
// using native alerts for simplicity (avoids extra dependency)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'bsateeshk@gmail.com', href: 'mailto:bsateeshk@gmail.com', color: '#ff6b6b' },
  { icon: MapPin, label: 'Location', value: 'Victoria, Canada', href: 'https://www.google.com/maps/search/?api=1&query=Victoria+BC+Canada', color: '#20c997' },
  { icon: Phone, label: 'Phone', value: '+1 (250) 884-3441', href: 'tel:+12508843441', color: '#1e3a5f' },
  { icon: Clock, label: 'Availability', value: 'Mon - Fri, 9AM - 6PM PST', href: null, color: '#f59e0b' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/boggarapusateeshkumar/', color: '#0077b5' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/sat33shgit', color: '#333333' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/bsateeshk', color: '#1877F2' },
  // WhatsApp - opens web.whatsapp.com or the native app on mobile
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/12508843441', color: '#25D366' },
];

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const NAME_MAX = 50;
  const SUBJECT_MAX = 100;
  const MESSAGE_MAX = 1000;

  const [errors, setErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ open: false, type: 'success', message: '' });

  function validateField(fieldName, value) {
    if (fieldName === 'name') {
      if (!value.trim()) return 'Name is required.';
      if (value.length > NAME_MAX) return `Name must be \u003c= ${NAME_MAX} characters.`;
      return '';
    }
    if (fieldName === 'email') {
      if (!value.trim()) return 'Email is required.';
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(value)) return 'Enter a valid email address.';
      return '';
    }
    if (fieldName === 'subject') {
      if (!value.trim()) return 'Subject is required.';
      if (value.length > SUBJECT_MAX) return `Subject must be \u003c= ${SUBJECT_MAX} characters.`;
      return '';
    }
    if (fieldName === 'message') {
      if (!value.trim()) return 'Message is required.';
      if (value.length > MESSAGE_MAX) return `Message must be \u003c= ${MESSAGE_MAX} characters.`;
      return '';
    }
    return '';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setIsSubmitting(true);

    // send to backend endpoint which will use SMTP (nodemailer)
    try {
      const apiBase = import.meta.env.VITE_API_URL || '';
      const resp = await fetch(`${apiBase}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject, message: formData.message })
      });

      const data = await resp.json();
      if (!resp.ok) {
        if (data && data.errors) {
          setErrors(prev => ({ ...prev, ...data.errors }));
        }
        setIsSubmitting(false);
        return;
      }

      setModal({ open: true, type: 'success', message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      if (import.meta.env.DEV) console.error(err);
      setModal({ open: true, type: 'error', message: 'Unable to send message. Please try again later.' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  function closeModal() {
    setModal({ open: false, type: 'success', message: '' });
  }

  return (
    <section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ff6b6b]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you!"
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-8">
              Let's create something amazing together
            </h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Whether you're looking to build a new website, improve your current platform, 
              or just have a chat about technology, I'm always open to discussing new projects 
              and creative ideas.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map((item, index) => {
                const isClickable = !!item.href;
                const Component = isClickable ? motion.a : motion.div;
                return (
                  <Component
                    key={item.label}
                    {...(isClickable ? {
                      href: item.href,
                      ...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})
                    } : {})}
                    onClick={isClickable ? undefined : (e) => { e.preventDefault(); e.stopPropagation(); }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={isClickable ? { y: -5 } : undefined}
                    className={`flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all ${isClickable ? 'cursor-pointer' : ''} group`}
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-[#1e3a5f]">{item.value}</p>
                    </div>
                  </Component>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 mb-4">Or connect with me on social media:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all cursor-pointer"
                    style={{ backgroundColor: `${social.color}15` }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name <span className="text-red-500">*</span></label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    maxLength={NAME_MAX}
                    aria-invalid={!!errors.name}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.name ? (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    ) : (
                      <span />
                    )}
                    <p className="text-sm text-gray-400">{formData.name.length}/{NAME_MAX}</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email <span className="text-red-500">*</span></label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  maxLength={SUBJECT_MAX}
                  aria-invalid={!!errors.subject}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.subject ? (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  ) : (
                    <span />
                  )}
                  <p className="text-sm text-gray-400">{formData.subject.length}/{SUBJECT_MAX}</p>
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  maxLength={MESSAGE_MAX}
                  aria-invalid={!!errors.message}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <p className="text-sm text-gray-400">{formData.message.length}/{MESSAGE_MAX}</p>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl text-lg font-medium disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeModal} />
          <div className="bg-white rounded-xl shadow-xl z-10 w-full max-w-md p-6">
            <h3 className={`text-lg font-semibold mb-3 ${modal.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
              {modal.type === 'error' ? 'Error' : 'Success'}
            </h3>
            <p className="text-gray-700 mb-6">{modal.message}</p>
            <div className="text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-[#1e3a5f] text-white rounded-lg hover:opacity-90"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}