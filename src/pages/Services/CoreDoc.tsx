import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, FileText, ClipboardList, Shield, Activity, Search, Zap } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CoreDoc() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[300px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/coredoc/1920/1080"
            alt="Core Documentation Banner"
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
            Core Documentation Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2c8498] font-medium max-w-2xl"
          >
            We provide comprehensive technical documentation support to ensure full regulatory compliance for medical devices.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Risk Management File (ISO 14971)',
                icon: <Shield />,
                items: [
                  'Risk Management plan development',
                  'Hazard identification and Risk Analysis',
                  'Risk control measures documentation',
                  'Overall residual risk evaluation',
                  'Complete risk management report'
                ]
              },
              {
                title: 'DMF & Plant Master File (PMF)',
                icon: <ClipboardList />,
                items: [
                  'Comprehensive DMF assembly for CDSCO',
                  'Manufacturing process documentation',
                  'Quality control procedures',
                  'Facility and equipment information',
                  'Supplier and material controls'
                ]
              },
              {
                title: 'Essential Principles/GSPR Checklist',
                icon: <FileText />,
                items: [
                  'Master compliance checklist',
                  'Requirement-by-requirement justification',
                  'Evidence mapping and traceability',
                  'Harmonized standards compliance'
                ]
              },
              {
                title: 'Clinical Evaluation Report (CER)',
                icon: <Search />,
                items: [
                  'Clinical evaluation strategy development',
                  'Systematic literature review',
                  'Clinical data evaluation and synthesis',
                  'CER writing per MEDDEV 2.7/1 rev 4',
                  'PMCF planning and evaluation'
                ]
              },
              {
                title: 'Biocompatibility Documentation',
                icon: <Activity />,
                items: [
                  'Biological Evaluation planning per ISO 10993-1',
                  'Material characterization and chemical analysis',
                  'Test strategy development',
                  'Biological Evaluation report writing'
                ]
              },
              {
                title: 'Sterilization Validation',
                icon: <Zap />,
                items: [
                  'Sterilization validation protocol development',
                  'IQ/OQ/PQ documentation assembly',
                  'Sterility assurance level (SAL) validation',
                  'Final validation report preparation'
                ]
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-[#0a3651] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2c8498] transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement<{ size: number }>, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold text-[#0a3651] mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map(item => (
                    <li key={item} className="flex items-start text-gray-600 text-sm">
                      <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
