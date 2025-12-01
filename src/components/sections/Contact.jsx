import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, Clock } from 'lucide-react';
import SectionTitle from '../SectionTitle';
// using native alerts for simplicity (avoids extra dependency)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@bsk.dev', href: 'mailto:hello@bsk.dev', color: '#ff6b6b' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#', color: '#20c997' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567', color: '#1e3a5f' },
  { icon: Clock, label: 'Availability', value: 'Mon - Fri, 9AM - 6PM PST', href: '#', color: '#f59e0b' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0077b5' },
  { icon: Github, label: 'GitHub', href: 'https://github.com', color: '#333' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: '#1da1f2' },
];

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Notify user (simple fallback to avoid external toast dependency)
    try { window.alert('Message sent successfully! I\'ll get back to you soon.') } catch(e){}
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
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
                </motion.a>
              ))}
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-12 rounded-xl border border-gray-200 px-3 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-12 rounded-xl border border-gray-200 px-3 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] w-full"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="h-12 rounded-xl border border-gray-200 px-3 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] w-full"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="rounded-xl border border-gray-200 px-3 py-2 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] resize-none w-full"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-[#1e3a5f] hover:bg-[#2d5a87] text-white rounded-xl text-lg font-medium cursor-pointer transition-all duration-300 hover:shadow-lg disabled:opacity-50 flex items-center justify-center"
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
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}