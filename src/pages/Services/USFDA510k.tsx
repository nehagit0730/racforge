import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function USFDA510k() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="USFDA 510(k) Submission" 
        description="Expert guidance for USFDA 510(k) Premarket Notification for medical devices in the United States."
        canonical="/services/usfda-510k-submission"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/usfda510k/1920/1080"
            alt="USFDA 510(k) Submission"
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
            USFDA 510(k) Submission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Navigating the Premarket Notification process to demonstrate substantial equivalence for the U.S. market.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Overview of 510(k) Submission</h2>
                <p>
                  A 510(k) is a premarket submission made to the FDA to demonstrate that the device to be marketed is at least as safe and effective, that is, substantially equivalent, to a legally marketed device (predicate device) that is not subject to premarket approval (PMA).
                </p>
                
                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 my-12">
                  <h4 className="text-2xl font-bold text-brand-deep mb-6">Substantial Equivalence</h4>
                  <p className="text-sm mb-6">A device is substantially equivalent if, in comparison to a predicate, it:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Has the same intended use.</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Has the same technological characteristics.</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Does not raise new questions of safety and effectiveness.</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Key Requirements for Application</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Device Description:</strong> Detailed information about the device's design, materials, and intended use.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Predicate Device Comparison:</strong> A thorough analysis of how the device compares to the chosen predicate.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Performance Testing:</strong> Bench testing, biocompatibility, and clinical data (if required).</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Software Documentation:</strong> For devices containing software, detailed documentation according to FDA guidance.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Related USFDA Services</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'PMA Application', path: '/services/usfda-pma-application' },
                      { name: 'De Novo Classification', path: '/services/usfda-de-novo-classification' }
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
                      Our regulatory team has a proven track record in successful USFDA 510(k) submissions.
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
