import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Heart, Shield, Users, Lightbulb, Award, Zap } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[400px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://picsum.photos/seed/about/1920/1080"
            alt="About Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#2c8498] font-medium"
          >
            Strategic Regulatory Solutions for Market Success
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-[#2c8498] font-bold uppercase tracking-widest text-sm mb-4 block">Get to know us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651] mb-8">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                RAC Forge Pvt. Ltd. was founded with a clear goal: to provide expert regulatory consulting services that help medical device manufacturers successfully navigate complex global regulations. Our name reflects our commitment to building strong regulatory pathways through careful documentation and strategic support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#2c8498]">
                  <Target className="text-[#2c8498] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#0a3651] mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To empower medical device innovators with complete regulatory solutions that enable global market access while prioritizing patient safety.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#0a3651]">
                  <Eye className="text-[#0a3651] mb-4" size={32} />
                  <h3 className="text-xl font-bold text-[#0a3651] mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    To be the most trusted regulatory consulting partner for medical device manufacturers seeking market approval globally.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/team/800/600"
                alt="Our Team"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', desc: 'Commitment to high standards in regulatory documentation.', icon: <Award /> },
              { title: 'Integrity', desc: 'Transparent and ethical consulting practices.', icon: <Shield /> },
              { title: 'Expertise', desc: 'Strong knowledge of changing regulatory requirements.', icon: <Lightbulb /> },
              { title: 'Partnership', desc: 'Building Lasting Partnerships That Empower Client Growth.', icon: <Users /> },
              { title: 'Innovation', desc: 'Keeping up with regulatory updates and requirements.', icon: <Zap /> },
              { title: 'Reliability', desc: 'Delivering consistent, trustworthy regulatory support.', icon: <Heart /> }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-[#2c8498]/10 rounded-xl flex items-center justify-center text-[#2c8498] mb-6 group-hover:bg-[#2c8498] group-hover:text-white transition-colors">
                  {React.cloneElement(value.icon as React.ReactElement<{ size: number }>, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-[#0a3651] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651]">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#2c8498] border-b-2 border-[#2c8498] pb-2">CDSCO India</h3>
              <ul className="space-y-4">
                {[
                  'Indian MDR (Medical Devices Rules, 2017)',
                  'Knowledge across all 12 chapters and 8 schedules',
                  'Familiarity with over 40 MDR forms',
                  'Device classification (Class A, B, C, D)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0a3651] border-b-2 border-[#0a3651] pb-2">USFDA Requirements</h3>
              <ul className="space-y-4">
                {[
                  'Risk-based classification (Class I, II, III)',
                  '510(k), PMA, and De Novo pathways',
                  'Quality System Regulation (QSR/QMSR)',
                  'eSTAR submission skills'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <CheckCircle2 className="text-[#0a3651] mr-2 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#2c8498] border-b-2 border-[#2c8498] pb-2">EU MDR Compliance</h3>
              <ul className="space-y-4">
                {[
                  'CE Marking process under EU MDR 2017/745',
                  'Technical Documentation (Annex II & III)',
                  'Clinical Evaluation Report (CER) writing',
                  'Post-Market Surveillance and Vigilance'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <CheckCircle2 className="text-[#2c8498] mr-2 shrink-0 mt-1" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-[#0a3651] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              At RAC Forge Pvt. Ltd., we believe successful regulatory strategy starts with thorough documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Strategic Assessment', desc: 'Evaluating your device and identifying the best regulatory pathways.' },
              { title: 'Documentation Planning', desc: 'Developing detailed plans for technical file assembly.' },
              { title: 'Authoring Excellence', desc: 'Creating complete, submission-ready documents.' },
              { title: 'Submission Management', desc: 'Guiding you through the approval process.' },
              { title: 'Post-Market Support', desc: 'Ensuring ongoing compliance and monitoring.' },
              { title: 'Partnership Approach', desc: 'Supporting every stage from concept to approval.' }
            ].map((step, idx) => (
              <div key={step.title} className="flex space-x-4">
                <div className="text-[#2c8498] font-bold text-4xl opacity-50">0{idx + 1}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#0a3651] mb-6">Company Legal Status Confirmation</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Certifies that the company is a legally established entity with the right to conduct business activities as per Indian law.
              </p>
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <Shield className="text-[#2c8498]" />
                <span className="font-bold text-[#0a3651]">Verified Entity</span>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <img
                src="https://picsum.photos/seed/legal/400/400"
                alt="Legal Status"
                className="rounded-2xl shadow-lg w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
