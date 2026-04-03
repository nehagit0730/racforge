import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, FileText, ShieldCheck, Zap, Microscope, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InfoLink from '../../components/InfoLink';

export default function RDandSaMD() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="SaMD & R&D Strategy" 
        description="Expert technical documentation and regulatory strategy for Software as a Medical Device (SaMD) and R&D projects."
        canonical="/services/rd-and-samd"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/samd/1920/1080"
            alt="SaMD & R&D Strategy"
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
            SaMD & R&D Strategy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Technical documentation and regulatory strategy for Software as a Medical Device and innovative R&D projects.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <h2 className="text-3xl font-extrabold text-brand-deep mb-6">Overview of SaMD & R&D Strategy</h2>
                <p>
                  Software as a Medical Device (<InfoLink text="SaMD" />) is a rapidly growing sector with unique regulatory challenges. Our team combines deep technical expertise in software engineering with a thorough understanding of medical device regulations to provide comprehensive support for SaMD and innovative R&D projects.
                </p>
                
                <div className="bg-purple-50 p-10 rounded-[3rem] border border-purple-100 my-12">
                  <h4 className="text-2xl font-bold text-brand-deep mb-6">Key Standards</h4>
                  <p className="text-sm mb-6">SaMD compliance involves several critical standards:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> <InfoLink text="IEC 62304" /> Software Lifecycle.</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> <InfoLink text="IEC 62366-1" /> Usability Engineering.</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Cybersecurity and <InfoLink text="AI" />/ML Compliance.</li>
                    <li className="flex items-start text-lg"><CheckCircle2 className="text-brand-teal mr-4 shrink-0 mt-1" size={24} /> Risk Management (<InfoLink text="ISO 14971" />).</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-brand-deep mb-6">Key Requirements for Application</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Software Architecture:</strong> Detailed documentation of the software's design and structure.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Verification & Validation:</strong> Robust testing data demonstrating the software's safety and performance.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Cybersecurity:</strong> A comprehensive plan for protecting the software from cyber threats.</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-teal mr-4 shrink-0 mt-1" size={20} />
                    <span><strong>Post-Market Monitoring:</strong> A plan for monitoring the software's performance after it is marketed.</span>
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
                      { name: 'EU MDR Compliance', path: '/services/eu-mdr-compliance' },
                      { name: 'Anvisa Brazil', path: '/services/anvisa-brazil-approval' }
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
                      Our regulatory team has extensive experience in SaMD and innovative R&D projects.
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
