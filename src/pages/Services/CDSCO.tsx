import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, Globe, ShieldCheck, ClipboardList } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CDSCO() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[300px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/cdsco/1920/1080"
            alt="CDSCO Banner"
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
            CDSCO India Regulatory Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2c8498] font-medium max-w-2xl"
          >
            We provide end-to-end CDSCO regulatory support for medical devices in India, ensuring smooth approvals and compliance.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold text-[#0a3651] mb-6">Manufacturing License Applications</h2>
                <p className="text-gray-600 mb-8">We handle complete application dossiers for Indian manufacturers:</p>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#2c8498]">
                    <h3 className="text-xl font-bold text-[#0a3651] mb-4">Class A & B Devices</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-600 text-sm">
                        <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                        MD-3 Application for Manufacturing License
                      </li>
                      <li className="flex items-start text-gray-600 text-sm">
                        <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                        MD-5 Manufacturing License for sale or distribution
                      </li>
                      <li className="flex items-start text-gray-600 text-sm">
                        <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                        Full technical documentation assembly
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-[#0a3651]">
                    <h3 className="text-xl font-bold text-[#0a3651] mb-4">Class C & D Devices</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-600 text-sm">
                        <CheckCircle2 className="text-[#0a3651] mr-2 shrink-0 mt-1" size={16} />
                        MD-7 Application for Manufacturing License
                      </li>
                      <li className="flex items-start text-gray-600 text-sm">
                        <CheckCircle2 className="text-[#0a3651] mr-2 shrink-0 mt-1" size={16} />
                        MD-9 Manufacturing License for sale or distribution
                      </li>
                      <li className="flex items-start text-gray-600 text-sm">
                        <CheckCircle2 className="text-[#0a3651] mr-2 shrink-0 mt-1" size={16} />
                        Comprehensive Risk Management documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold text-[#0a3651] mb-6">Loan License Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-[#2c8498] mb-4">Class A & B</h4>
                    <p className="text-sm text-gray-600">MD-4 Application & MD-6 License</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <h4 className="font-bold text-[#2c8498] mb-4">Class C & D</h4>
                    <p className="text-sm text-gray-600">MD-8 Application & MD-10 License</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold text-[#0a3651] mb-6">Import License Services</h2>
                <div className="space-y-6">
                  <div className="p-8 bg-[#0a3651] text-white rounded-3xl">
                    <h3 className="text-xl font-bold mb-4">Commercial Import (MD-14, MD-15)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-300 text-sm">
                        <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                        Acting as Authorized Indian Agent
                      </li>
                      <li className="flex items-start text-gray-300 text-sm">
                        <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                        Complete Import License application management
                      </li>
                      <li className="flex items-start text-gray-300 text-sm">
                        <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                        Technical documentation assembly per Fourth Schedule
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'MD-16', desc: 'Import for clinical investigations' },
                      { id: 'MD-17', desc: 'Import for testing small quantities' },
                      { id: 'MD-18', desc: 'Import for patient treatment' },
                      { id: 'MD-20', desc: 'Import for personal use' }
                    ].map(item => (
                      <div key={item.id} className="p-4 bg-gray-50 rounded-xl">
                        <span className="font-bold text-[#2c8498] block mb-1">{item.id}</span>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold text-[#0a3651] mb-6">Novel Device Approvals</h2>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-[#2c8498]/10 rounded-xl flex items-center justify-center text-[#2c8498] mr-4">
                      <ClipboardList size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a3651]">MD-26 & MD-27</h4>
                      <p className="text-xs text-gray-500">Devices without Predicate</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                    <div className="w-12 h-12 bg-[#0a3651]/10 rounded-xl flex items-center justify-center text-[#0a3651] mr-4">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0a3651]">MD-28 & MD-29</h4>
                      <p className="text-xs text-gray-500">New In Vitro Diagnostic Devices</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Market */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0a3651] mb-12">Post-Market Surveillance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'PMS Plan development',
              'PSUR preparation',
              'Vigilance reporting systems',
              'Market surveillance'
            ].map(item => (
              <div key={item} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 font-bold text-[#0a3651]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
