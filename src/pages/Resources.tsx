import React from 'react';
import { motion } from 'motion/react';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BLOG_POSTS = [
  {
    id: 'sterilization-validation',
    title: 'Sterilization Validation for Medical Devices',
    excerpt: 'Sterilization validation is a critical process in the medical device industry, ensuring that devices are safe for patient use.',
    image: 'https://picsum.photos/seed/sterilization/800/600',
    date: '12 Oct 2025',
    category: 'Technical'
  },
  {
    id: 'biocompatibility-testing',
    title: 'Biocompatibility Testing Strategies for Medical Devices',
    excerpt: 'Biocompatibility testing is a fundamental requirement for medical devices that come into contact with the human body.',
    image: 'https://picsum.photos/seed/biocompatibility/800/600',
    date: '11 Oct 2025',
    category: 'Testing'
  },
  {
    id: 'mastering-eu-mdr',
    title: 'Mastering EU MDR Technical Documentation',
    excerpt: 'The EU Medical Device Regulation (MDR) 2017/745 has significantly increased the requirements for technical documentation.',
    image: 'https://picsum.photos/seed/eumdr/800/600',
    date: '10 Oct 2025',
    category: 'Regulatory'
  },
  {
    id: 'navigating-usfda-510k',
    title: 'Navigating USFDA’s 510(k) Submission Process',
    excerpt: 'The 510(k) submission is the most common pathway for medical device clearance in the United States.',
    image: 'https://picsum.photos/seed/usfda/800/600',
    date: '10 Oct 2025',
    category: 'Regulatory'
  },
  {
    id: 'understanding-cdsco-rules',
    title: 'Understanding CDSCO’s Medical Devices Rules, 2017',
    excerpt: 'The Medical Devices Rules, 2017, represent a significant shift in the regulatory landscape for medical devices in India.',
    image: 'https://picsum.photos/seed/cdsco/800/600',
    date: '10 Oct 2025',
    category: 'Regulatory'
  }
];

export default function Resources() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Resources & Insights" 
        description="Stay updated with the latest regulatory news, technical articles, and insights from the medical device industry."
        canonical="/blogs/resources"
      />

      {/* Resources Hero */}
      <section className="relative h-[400px] flex items-center pt-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/resources-hero/1920/1080"
            alt="RAC Forge Resources"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Resources & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Expert perspectives on global medical device regulations and technical documentation.
          </motion.p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {BLOG_POSTS.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link to={`/blogs/${post.id}`} className="block">
                    <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-8 shadow-xl border border-gray-100">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-8 left-8 bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        {post.category}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-6 text-gray-500 text-sm font-bold uppercase tracking-widest">
                        <span className="flex items-center"><Calendar className="mr-2 w-4 h-4 text-brand-teal" /> {post.date}</span>
                        <span className="flex items-center"><User className="mr-2 w-4 h-4 text-brand-teal" /> RAC Forge Team</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep group-hover:text-brand-teal transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="pt-4 flex items-center text-brand-teal font-black text-lg uppercase tracking-widest">
                        Read Full Article <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-3 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Search */}
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h4 className="text-xl font-bold text-brand-deep mb-6">Search Resources</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                  />
                  <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h4 className="text-xl font-bold text-brand-deep mb-6">Categories</h4>
                <ul className="space-y-4">
                  {['Regulatory', 'Technical', 'Testing', 'Market Access', 'Quality Management'].map((cat) => (
                    <li key={cat}>
                      <Link to="#" className="flex items-center justify-between text-gray-600 hover:text-brand-teal font-bold transition-colors group">
                        <span>{cat}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-brand-deep p-10 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 skew-x-12 translate-x-1/4"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    Get the latest regulatory insights delivered directly to your inbox.
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all"
                    />
                    <button className="w-full bg-brand-teal text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-brand-deep transition-all shadow-lg shadow-brand-teal/20">
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
