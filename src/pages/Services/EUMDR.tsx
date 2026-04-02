import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, ShieldCheck, ClipboardList, Activity, Search } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function EUMDR() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[300px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/eumdr/1920/1080"
            alt="EU MDR Banner"
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
            EU MDR CE Marking Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2c8498] font-medium max-w-2xl"
          >
            We offer end-to-end EU MDR regulatory support to ensure smooth and compliant CE marking approvals.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Documentation */}
            <motion.div {...fadeIn} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#0a3651] text-white rounded-2xl flex items-center justify-center">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a3651]">Technical Documentation</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Complete Technical File assembly per Annex II & III',
                  'Device description and specifications',
                  'Design and manufacturing information',
                  'GSPR checklist preparation',
                  'Benefit-risk analysis documentation'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-600">
                    <CheckCircle2 className="text-[#2c8498] mr-3 shrink-0 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quality Management */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-10 bg-[#0a3651] text-white rounded-[40px]">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold">Quality Management System</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'ISO 13485:2016 implementation support',
                  'QMS documentation development',
                  'Notified Body audit preparation',
                  'Process validation documentation'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle2 className="text-[#2c8498] mr-3 shrink-0 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Clinical Evaluation */}
            <motion.div {...fadeIn} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#2c8498] text-white rounded-2xl flex items-center justify-center">
                  <Search size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a3651]">Clinical Evaluation</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Clinical Evaluation Plan (CEP) development',
                  'Clinical Evaluation Report (CER) writing',
                  'Literature search and review',
                  'Clinical data analysis and synthesis',
                  'PMCF planning'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-600">
                    <CheckCircle2 className="text-[#2c8498] mr-3 shrink-0 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Risk Management */}
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#0a3651] text-white rounded-2xl flex items-center justify-center">
                  <Activity size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a3651]">Risk Management</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Complete Risk Management file per ISO 14971',
                  'Risk Analysis, evaluation, and control',
                  'Risk management plan and report',
                  'Residual risk assessment'
                ].map(item => (
                  <li key={item} className="flex items-start text-gray-600">
                    <CheckCircle2 className="text-[#2c8498] mr-3 shrink-0 mt-1" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
