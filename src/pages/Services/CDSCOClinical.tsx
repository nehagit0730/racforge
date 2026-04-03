import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOClinical() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Clinical Investigation" 
        description="Expert guidance for CDSCO Clinical Investigation (MD-22, MD-23) protocols and permissions for medical devices in India."
        canonical="/services/cdsco-clinical-investigation"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/clinical/1920/1080"
            alt="CDSCO Clinical Investigation"
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
            CDSCO Clinical Investigation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating <InfoLink text="MD-22" /> and <InfoLink text="MD-23" /> pathways for medical device clinical studies in India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Overview of Clinical Investigations</h2>
                <p>
                  Clinical investigation is a systematic study in human subjects that is undertaken to assess the safety and performance of a medical device. Under the Medical Devices Rules, 2017, certain classes of devices require clinical data to support their approval for sale or distribution in India.
                </p>
                
                <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 my-12">
                  <h4 className="text-2xl font-bold text-brand-deep mb-6">Key Forms</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center text-lg"><CheckCircle2 className="text-brand-teal mr-4" size={24} /> Application: <InfoLink text="MD-22" /></li>
                    <li className="flex items-center text-lg"><CheckCircle2 className="text-brand-teal mr-4" size={24} /> Grant: <InfoLink text="MD-23" /></li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Key Requirements for Application</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Clinical Investigation Plan (CIP):</strong> A detailed protocol outlining the study's objectives, design, and methodology.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Investigator's Brochure (IB):</strong> A compilation of the clinical and non-clinical data on the device.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Ethics Committee Approval:</strong> Evidence of approval from a registered Ethics Committee.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Informed Consent Document (ICD):</strong> The document used to obtain consent from study participants.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Related CDSCO Services</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'Manufacturing License', path: '/services/cdsco-manufacturing-license' },
                      { name: 'Import License', path: '/services/cdsco-import-license' },
                      { name: 'Loan License', path: '/services/cdsco-loan-license' },
                      { name: 'Test License', path: '/services/cdsco-test-license' }
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
                      Our regulatory team has extensive experience in CDSCO clinical investigation protocols.
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
