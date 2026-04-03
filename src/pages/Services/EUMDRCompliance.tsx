import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function EUMDRCompliance() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="EU MDR Compliance" 
        description="Expert guidance for EU Medical Device Regulation (MDR) 2017/745 compliance and CE Marking for medical devices in Europe."
        canonical="/services/eu-mdr-compliance"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/eumdr/1920/1080"
            alt="EU MDR Compliance"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            EU MDR Compliance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating the transition and compliance requirements for the EU Medical Device Regulation 2017/745.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Overview of EU MDR Compliance</h2>
                <p>
                  The EU Medical Device Regulation (MDR) 2017/745 has significantly increased the requirements for technical documentation, clinical evidence, and post-market surveillance. Compliance is mandatory for all medical devices marketed in the European Union.
                </p>
                
                <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 my-12">
                  <h4 className="text-2xl font-bold text-brand-deep mb-6">Key Requirements</h4>
                  <p className="text-sm mb-6">EU MDR compliance involves several critical components:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Technical Documentation (Annex II & III).</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> General Safety and Performance Requirements (<InfoLink text="GSPR" />).</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Clinical Evaluation Report (<InfoLink text="CER" />).</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Post-Market Surveillance (<InfoLink text="PMS" />) and <InfoLink text="PSUR" />.</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Key Requirements for Application</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Risk Management:</strong> A comprehensive risk management system according to <InfoLink text="ISO 14971" />.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Clinical Evaluation:</strong> Robust clinical evidence demonstrating the safety and performance of the device.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Quality Management System (QMS):</strong> Evidence of compliance with <InfoLink text="ISO 13485" />.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Unique Device Identification (UDI):</strong> Implementation of the <InfoLink text="UDI" /> system for traceability.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Related Services</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'USFDA Compliance', path: '/services/usfda-510k-submission' },
                      { name: 'Anvisa Brazil', path: '/services/anvisa-brazil-approval' },
                      { name: 'SaMD Strategy', path: '/services/rd-and-samd' }
                    ].map((link) => (
                      <li key={link.name}>
                        <Link to={link.path} className="text-gray-600 hover:text-brand-teal font-bold flex items-center group">
                          <ArrowRight className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-brand-deep p-10 rounded-[2.5rem] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 skew-x-12 translate-x-1/4"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4">Need Expert Help?</h4>
                    <p className="text-white/60 text-sm mb-8">
                      Our regulatory team has extensive experience in EU MDR transitions and compliance.
                    </p>
                    <Link to="/contact" className="block text-center bg-brand-teal text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-brand-deep transition-all">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
