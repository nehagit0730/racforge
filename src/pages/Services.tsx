import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, FileText, ClipboardList } from 'lucide-react';

const SERVICES = [
  {
    title: 'CDSCO India Regulatory Services',
    path: '/services/cdsco',
    desc: 'We provide end-to-end CDSCO regulatory support for medical devices in India, ensuring smooth approvals and compliance.',
    icon: <Globe size={48} />,
    color: 'bg-[#2c8498]'
  },
  {
    title: 'USFDA Regulatory Services',
    path: '/services/usfda',
    desc: 'We offer complete USFDA regulatory support to help you achieve fast and compliant market entry.',
    icon: <ShieldCheck size={48} />,
    color: 'bg-[#0a3651]'
  },
  {
    title: 'EU MDR CE Marking Services',
    path: '/services/eu-mdr',
    desc: 'We offer end-to-end EU MDR regulatory support to ensure smooth and compliant CE marking approvals.',
    icon: <FileText size={48} />,
    color: 'bg-[#2c8498]'
  },
  {
    title: 'Core Documentation Services',
    path: '/services/core-doc',
    desc: 'We provide comprehensive technical documentation support to ensure full regulatory compliance for medical devices.',
    icon: <ClipboardList size={48} />,
    color: 'bg-[#0a3651]'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[300px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/services/1920/1080"
            alt="Services Banner"
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
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all"
              >
                <Link to={service.path} className="block h-full">
                  <div className="p-10 flex flex-col h-full bg-white">
                    <div className={cn('w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-8 transition-transform group-hover:scale-110', service.color)}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0a3651] mb-4 group-hover:text-[#2c8498] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                      {service.desc}
                    </p>
                    <div className="flex items-center text-[#2c8498] font-bold">
                      Read more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
