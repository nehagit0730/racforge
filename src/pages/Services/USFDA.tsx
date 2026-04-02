import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, FileText, BarChart3, Settings, Globe } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function USFDA() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[300px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/usfda/1920/1080"
            alt="USFDA Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            USFDA Regulatory Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2c8498] font-medium max-w-2xl"
          >
            We offer complete USFDA regulatory support to help you achieve fast and compliant market entry.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 510(k) */}
            <motion.div {...fadeIn} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0a3651] mb-6">Premarket Notification (510(k))</h3>
              <ul className="space-y-3">
                {[
                  'Predicate device identification',
                  'Full 510(k) submission preparation',
                  'Mandatory eSTAR implementation',
                  'Performance testing data assembly',
                  'Labeling & User Manual review'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-600 text-sm">
                    <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* PMA */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-8 bg-[#0a3651] text-white rounded-3xl">
              <div className="w-14 h-14 bg-white text-[#0a3651] rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Premarket Approval (PMA)</h3>
              <ul className="space-y-3">
                {[
                  'IDE application management',
                  'Clinical trial design & protocol',
                  'Complete PMA application assembly',
                  'Clinical data analysis',
                  'Manufacturing facility info prep'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-300 text-sm">
                    <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* De Novo */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0a3651] mb-6">De Novo Classification</h3>
              <ul className="space-y-3">
                {[
                  'Novel device classification strategy',
                  'Risk-benefit analysis documentation',
                  'Clinical & technical evidence assembly',
                  'Regulatory pathway justification'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-600 text-sm">
                    <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quality System */}
            <motion.div {...fadeIn} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-14 h-14 bg-[#0a3651] text-white rounded-2xl flex items-center justify-center mb-6">
                <Settings size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0a3651] mb-6">Quality System Compliance</h3>
              <ul className="space-y-3">
                {[
                  'QMS implementation guidance',
                  'QMSR/ISO 13485 support',
                  'Pre-audit preparation',
                  'Gap analysis & CAPA systems'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-600 text-sm">
                    <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Post-Market */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 lg:col-span-2">
              <div className="w-14 h-14 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#0a3651] mb-6">Post-Market Compliance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Establishment registration & listing',
                  'Unique Device Identification (UDI)',
                  'Medical Device Reporting (MDR)',
                  'Annual reporting & maintenance'
                ].map(item => (
                  <div key={item} className="flex items-center p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle2 className="text-[#2c8498] mr-3 shrink-0" size={18} />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
