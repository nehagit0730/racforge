import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { BLOGS } from '../constants';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export function BlogList() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="relative h-[300px] flex items-center pt-20 bg-[#0a3651] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/blogs/1920/1080"
            alt="Blogs Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Our Blogs
          </motion.h1>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOGS.map((blog, idx) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <Link to={`/blogs/${blog.id}`} className="block aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center space-x-4 text-xs text-[#2c8498] font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {blog.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-1" /> Admin</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a3651] mb-4 group-hover:text-[#2c8498] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-[#0a3651] font-bold text-sm flex items-center hover:text-[#2c8498] transition-colors"
                  >
                    Read More <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function BlogPost() {
  const { id } = useParams();
  const blog = BLOGS.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0a3651] mb-4">Blog Not Found</h1>
          <Link to="/blogs" className="text-[#2c8498] font-bold hover:underline">Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/blogs" className="inline-flex items-center text-[#2c8498] font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="mr-2" size={20} /> Back to Blogs
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gray-50"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-8 md:p-16">
            <div className="flex items-center space-x-6 text-sm text-[#2c8498] font-bold uppercase tracking-widest mb-8">
              <span className="flex items-center"><Calendar size={18} className="mr-2" /> {blog.date}</span>
              <span className="flex items-center"><User size={18} className="mr-2" /> By RAC Forge Admin</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#0a3651] mb-12 leading-tight">
              {blog.title}
            </h1>
            <div className="prose prose-lg max-w-none prose-headings:text-[#0a3651] prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
