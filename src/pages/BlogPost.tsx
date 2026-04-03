import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';

const BLOG_CONTENT: Record<string, { title: string; date: string; category: string; image: string; content: string }> = {
  'sterilization-validation': {
    title: 'Sterilization Validation for Medical Devices',
    date: '12 Oct 2025',
    category: 'Technical',
    image: 'https://picsum.photos/seed/sterilization/1200/600',
    content: `
# Sterilization Validation for Medical Devices

Sterilization validation is a critical process in the medical device industry, ensuring that devices are safe for patient use. This process involves demonstrating that the sterilization method consistently achieves the required sterility assurance level (SAL).

## Why Sterilization Validation Matters

The primary goal of sterilization validation is to protect patients from healthcare-associated infections. A failure in the sterilization process can lead to severe complications, regulatory non-compliance, and product recalls.

## Key Methods of Sterilization

1. **Ethylene Oxide (EO):** A common gas-based method for heat-sensitive devices.
2. **Gamma Irradiation:** Uses ionizing radiation to sterilize products in their final packaging.
3. **Steam Sterilization (Autoclaving):** Uses high-pressure saturated steam.
4. **Electron Beam (E-Beam):** A high-energy electron beam for rapid sterilization.

## The Validation Process

The validation process typically follows the ISO 11135 (for EO) or ISO 11137 (for radiation) standards. It involves:

- **Installation Qualification (IQ):** Verifying that the equipment is installed correctly.
- **Operational Qualification (OQ):** Ensuring the equipment operates within specified limits.
- **Performance Qualification (PQ):** Demonstrating that the process consistently sterilizes the product.

## Conclusion

Sterilization validation is not just a regulatory hurdle; it is a fundamental pillar of patient safety. Partnering with experts like RAC Forge can help you navigate the complexities of sterilization standards and ensure your devices meet global requirements.
    `
  },
  'biocompatibility-testing': {
    title: 'Biocompatibility Testing Strategies for Medical Devices',
    date: '11 Oct 2025',
    category: 'Testing',
    image: 'https://picsum.photos/seed/biocompatibility/1200/600',
    content: `
# Biocompatibility Testing Strategies

Biocompatibility testing is a fundamental requirement for medical devices that come into contact with the human body. It assesses the biological risk of the materials used in the device.

## ISO 10993 Standards

The ISO 10993 series provides the framework for biological evaluation of medical devices. The most critical part is ISO 10993-1, which outlines the general principles and the evaluation process.

## Key Tests

- **Cytotoxicity:** Assessing the effect on cell growth and viability.
- **Sensitization:** Checking for allergic reactions.
- **Irritation:** Evaluating the potential for skin or mucosal irritation.
- **Systemic Toxicity:** Looking for adverse effects on the whole body.
- **Hemocompatibility:** Testing the interaction with blood.

## A Risk-Based Approach

Modern biocompatibility evaluation focuses on a risk-based approach, starting with chemical characterization of materials. This can often reduce the need for animal testing while providing more robust safety data.

## How RAC Forge Can Help

Our experts can help you develop a Biological Evaluation Plan (BEP) and manage the testing process with accredited laboratories, ensuring your device meets the highest safety standards.
    `
  }
};

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? BLOG_CONTENT[id] : null;

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-brand-deep">Article Not Found</h1>
        <Link to="/blogs/resources" className="text-brand-teal hover:underline mt-4 inline-block">Back to Resources</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title={post.title} 
        description={post.content.substring(0, 160)} 
        canonical={`/blogs/${id}`}
      />

      {/* Post Header */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs/resources" className="inline-flex items-center text-brand-teal font-bold mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="mr-2" size={20} /> Back to Resources
          </Link>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="bg-brand-teal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm font-bold uppercase tracking-widest">
                <Calendar className="mr-2 w-4 h-4 text-brand-teal" /> {post.date}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-brand-deep leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <div className="w-12 h-12 bg-brand-deep rounded-full flex items-center justify-center text-white font-bold">
                RF
              </div>
              <div>
                <div className="font-bold text-brand-deep">RAC Forge Team</div>
                <div className="text-sm text-gray-500">Regulatory Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl border border-gray-100">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Social Share Sidebar */}
            <div className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <div className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-4">Share</div>
                <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            {/* Markdown Content */}
            <div className="lg:col-span-11">
              <div className="markdown-body prose prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              <div className="mt-20 pt-10 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-brand-deep mb-6">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {['Medical Devices', 'Regulatory', 'Compliance', 'R&D', 'Quality'].map((tag) => (
                    <span key={tag} className="bg-gray-50 text-gray-600 px-6 py-2 rounded-full text-sm font-bold border border-gray-100 hover:border-brand-teal transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-deep mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Add related posts here if needed */}
          </div>
        </div>
      </section>
    </div>
  );
}
