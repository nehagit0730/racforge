import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Globe, Zap, BarChart3 } from 'lucide-react';
import { BLOGS } from '../constants';
import ImageGenerator from '../components/ImageGenerator';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a3651]">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/medical/1920/1080?blur=10"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Expert Medical Device Regulatory Consulting for <span className="text-[#2c8498]">Global Market Access</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Navigating CDSCO, USFDA, and EU MDR Compliance with Precision and Expertise. We forge your path to regulatory success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link
                to="/contact"
                className="bg-[#2c8498] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0a3651] transition-all flex items-center justify-center group shadow-lg shadow-[#2c8498]/20"
              >
                Get Regulatory Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0a3651] transition-all flex items-center justify-center"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <span className="text-[#2c8498] font-bold uppercase tracking-widest text-sm mb-4 block">Who we are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651] mb-8 leading-tight">
                Your Global Medical Device Regulatory Partner
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                RAC Forge Pvt. Ltd. is a leading regulatory consultancy that focuses on Medical Devices compliance in major global markets. We provide strategic guidance and thorough documentation services to help manufacturers successfully navigate complex regulations in India, the United States, and the European Union.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our expertise lies in crafting the detailed technical documentation needed for regulatory approvals while ensuring compliance with CDSCO's Indian MDR (Medical Devices Rules 2017), USFDA requirements, and the EU MDR 2017/745.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/consulting/800/600"
                alt="Consulting"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#2c8498] p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">100%</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Compliance Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2c8498] font-bold uppercase tracking-widest text-sm mb-4 block">Our</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651]">Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'CDSCO India',
                icon: <Globe className="w-10 h-10 text-[#2c8498]" />,
                items: [
                  'Manufacturing License Applications (MD-3, MD-5, MD-7, MD-9)',
                  'Import License for Commercial Sale (MD-14, MD-15)',
                  'Loan License Applications (MD-4, MD-6, MD-8, MD-10)',
                  'Test License Permissions and Novel Device Approvals (MD-16, MD-17)'
                ],
                path: '/services/cdsco'
              },
              {
                title: 'USFDA',
                icon: <ShieldCheck className="w-10 h-10 text-[#2c8498]" />,
                items: [
                  '510K USFDA Premarket Notifications with eSTAR',
                  'PMA (Premarket Approval) Applications',
                  'FDA De Novo Classification Requests',
                  'Quality System Regulation Compliance (ISO 13485)'
                ],
                path: '/services/usfda'
              },
              {
                title: 'EU MDR',
                icon: <FileText className="w-10 h-10 text-[#2c8498]" />,
                items: [
                  'Manufacturing License Applications (MD-3, MD-5, MD-7, MD-9)',
                  'Import License for Commercial Sale (MD-14, MD-15)',
                  'Loan License Applications (MD-4, MD-6, MD-8, MD-10)',
                  'Test License Permissions and Novel Device Approvals (MD-16, MD-17)'
                ],
                path: '/services/eu-mdr'
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#0a3651] mb-6">{service.title}</h3>
                <ul className="space-y-4 mb-8 flex-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#2c8498] mr-2 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to={service.path} className="text-[#2c8498] font-bold flex items-center hover:text-[#0a3651] transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2c8498] font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651]">RAC Forge Pvt. Ltd.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'In-depth Regulatory Knowledge', desc: 'Strong understanding of CDSCO, USFDA, and EU MDR requirements.', icon: <Zap /> },
              { title: 'Documentation Quality', desc: 'Specialized in creating submission-ready technical documents, including Risk Analysis.', icon: <FileText /> },
              { title: 'Strategic Focus', desc: 'Planning regulatory pathways and managing risks through robust Risk Management.', icon: <BarChart3 /> },
              { title: 'Proven Success', desc: 'Successful submissions across all device categories, from Class A to Class D.', icon: <ShieldCheck /> },
              { title: 'Client-Focused Service', desc: 'Customized support throughout the regulatory process.', icon: <Globe /> },
              { title: 'Global Reach', desc: 'Expertise in harmonizing documentation for multiple markets simultaneously.', icon: <Zap /> }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-[#0a3651] hover:text-white transition-all group"
              >
                <div className="w-12 h-12 bg-[#2c8498]/10 rounded-xl flex items-center justify-center text-[#2c8498] mb-6 group-hover:bg-white/10 group-hover:text-white">
                  {React.cloneElement(item.icon as React.ReactElement<{ size: number }>, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-[#0a3651] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What Makes Us Different</h2>
            <div className="h-1 w-20 bg-[#2c8498] mx-auto mb-8"></div>
            <h3 className="text-2xl font-bold mb-6 text-[#2c8498]">Strategic Regulatory Consulting Without Physical Testing</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              We specialize in strategic regulatory consulting and creating documentation packages to meet every Essential Requirement without conducting physical product testing.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2c8498] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2c8498] opacity-10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </section>

      {/* Image Generator Section */}
      <ImageGenerator />

      {/* Blog Slider */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#2c8498] font-bold uppercase tracking-widest text-sm mb-4 block">Direct from the blog</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a3651]">News & Articles</h2>
            </div>
            <Link to="/blogs" className="text-[#2c8498] font-bold hover:text-[#0a3651] transition-colors hidden sm:flex items-center">
              View All Posts <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.slice(0, 3).map((blog, idx) => (
              <motion.div
                key={blog.id}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/blogs/${blog.id}`}>
                  <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-xs font-bold text-[#0a3651]">
                      {blog.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3651] group-hover:text-[#2c8498] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[#2c8498] font-bold uppercase tracking-widest text-sm mb-2 block">Company Info</span>
              <h3 className="text-2xl font-bold text-[#0a3651]">RAC FORGE PRIVATE LIMITED</h3>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Globe className="text-[#2c8498]" />
              <p className="text-sm">11, 1 village Nanehar, Thural, Kangra, Jaisinghpur Kangra - 176107, Himachal Pradesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
