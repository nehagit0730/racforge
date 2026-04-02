import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a3651] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0a3651] font-bold text-xl">RF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none">RAC FORGE</span>
                <span className="text-[10px] tracking-widest font-medium text-white/80">PVT. LTD.</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Best Regulatory and Compliance consulting for medical device manufacturers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#2c8498] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#2c8498] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#2c8498] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#2c8498] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Info Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-[#2c8498] inline-block pb-1">Info</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-300 hover:text-[#2c8498] transition-colors">About</Link></li>
              <li><Link to="/blogs" className="text-gray-300 hover:text-[#2c8498] transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#2c8498] transition-colors">Contact</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#2c8498] transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 border-b-2 border-[#2c8498] inline-block pb-1">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-[#2c8498] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider text-gray-400">Email Address</p>
                    <a href="mailto:info@racforge.com" className="text-gray-300 hover:text-[#2c8498]">info@racforge.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-[#2c8498] mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider text-gray-400">Phone Number</p>
                    <a href="tel:+916239699077" className="text-gray-300 hover:text-[#2c8498]">+91-62396 99077</a>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#2c8498] mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-gray-400">Locations</p>
                  <p className="text-gray-300">
                    RAC FORGE PRIVATE LIMITED 11, 1 village Nanehar, Thural, Kangra, Jaisinghpur Kangra - 176107, Himachal Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Copyrights by racforge</p>
        </div>
      </div>
    </footer>
  );
}
