import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function CDSCOImport() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="CDSCO Import License" 
        description="Expert guidance for obtaining CDSCO Import Licenses (MD-14, MD-15) for medical devices in India."
        canonical="/services/cdsco-import-license"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/import/1920/1080"
            alt="CDSCO Import License"
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
            CDSCO Import License
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating <InfoLink text="MD-14" /> and <InfoLink text="MD-15" /> pathways for medical device imports into India.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Overview of Import Licenses</h2>
                <p>
                  Any entity wishing to import medical devices into India for sale or distribution must obtain an import license from the Central Licensing Authority (CDSCO). The process involves demonstrating that the device is already approved in its country of origin and meets Indian safety and performance standards.
                </p>
                
                <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 my-12">
                  <h4 className="text-2xl font-bold text-brand-deep mb-6">Key Forms</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center text-lg"><CheckCircle2 className="text-brand-teal mr-4" size={24} /> Application: <InfoLink text="MD-14" /></li>
                    <li className="flex items-center text-lg"><CheckCircle2 className="text-brand-teal mr-4" size={24} /> Grant: <InfoLink text="MD-15" /></li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Key Requirements for Application</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Free Sale Certificate (FSC):</strong> Proof of approval and sale in the country of origin.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Plant Master File (PMF):</strong> Detailed documentation of the foreign manufacturing facility.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Device Master File (DMF):</strong> Technical documentation for each device, including design, materials, and validation data.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Performance Evaluation:</strong> Reports demonstrating the safety and effectiveness of the device.</span>
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
                      { name: 'Loan License', path: '/services/cdsco-loan-license' },
                      { name: 'Test License', path: '/services/cdsco-test-license' },
                      { name: 'Clinical Investigation', path: '/services/cdsco-clinical-investigation' }
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
                      Our regulatory team has a 100% success rate in CDSCO import license applications.
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
