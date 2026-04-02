import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Twitter, Instagram, Linkedin, Youtube, Send, Loader2, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[300px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/contact/1920/1080"
            alt="Contact Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <motion.div {...fadeIn} className="bg-gray-50 p-10 rounded-3xl text-center group hover:bg-[#0a3651] hover:text-white transition-all">
              <div className="w-16 h-16 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-[#2c8498] transition-colors">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Anytime</h3>
              <a href="tel:+916239699077" className="text-[#2c8498] font-bold text-lg group-hover:text-white transition-colors">+91-62396 99077</a>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-gray-50 p-10 rounded-3xl text-center group hover:bg-[#0a3651] hover:text-white transition-all">
              <div className="w-16 h-16 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-[#2c8498] transition-colors">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Send Email</h3>
              <a href="mailto:info@racforge.com" className="text-[#2c8498] font-bold text-lg group-hover:text-white transition-colors">info@racforge.com</a>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-gray-50 p-10 rounded-3xl text-center group hover:bg-[#0a3651] hover:text-white transition-all">
              <div className="w-16 h-16 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-[#2c8498] transition-colors">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Office</h3>
              <p className="text-sm font-medium opacity-80">RAC FORGE PRIVATE LIMITED, Himachal Pradesh</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div {...fadeIn} className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50">
              <h2 className="text-3xl font-bold text-[#0a3651] mb-8">Send us a Message</h2>
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a3651] mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-[#2c8498] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0a3651] uppercase tracking-wider">Full Name</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2c8498] outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0a3651] uppercase tracking-wider">Email Address</label>
                      <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2c8498] outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a3651] uppercase tracking-wider">Subject</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2c8498] outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0a3651] uppercase tracking-wider">Message</label>
                    <textarea required className="w-full h-40 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2c8498] outline-none resize-none" />
                  </div>
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-[#0a3651] text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#2c8498] transition-all disabled:opacity-50 shadow-lg"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Social & Map */}
            <div className="space-y-12">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold text-[#0a3651] mb-8">Connect with Us</h2>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Twitter />, link: '#' },
                    { icon: <Instagram />, link: '#' },
                    { icon: <Linkedin />, link: '#' },
                    { icon: <Youtube />, link: '#' },
                    { icon: <Mail />, link: 'mailto:info@racforge.com' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      className="w-14 h-14 bg-gray-50 text-[#0a3651] rounded-2xl flex items-center justify-center hover:bg-[#2c8498] hover:text-white transition-all shadow-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeIn} className="aspect-video bg-gray-100 rounded-[40px] overflow-hidden shadow-xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.3!2d76.5!3d32.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCMDYnMDAuMCJOIDc2wrAzMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale opacity-80"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
