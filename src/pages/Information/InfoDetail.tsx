import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

const INFO_DATA: Record<string, { title: string; content: string }> = {
  'md-16': {
    title: 'Form MD-16',
    content: 'Form MD-16 is the application for a license to import medical devices for the purposes of clinical investigations, testing, evaluation, demonstration, or training under the Medical Devices Rules, 2017.'
  },
  'md-17': {
    title: 'Form MD-17',
    content: 'Form MD-17 is the license granted by the Central Licensing Authority to import medical devices for the purposes of clinical investigations, testing, evaluation, demonstration, or training.'
  },
  'md-3': {
    title: 'Form MD-3',
    content: 'Form MD-3 is the application for a license to manufacture for sale or for distribution of Class A or Class B medical devices.'
  },
  'md-5': {
    title: 'Form MD-5',
    content: 'Form MD-5 is the license to manufacture for sale or for distribution of Class A or Class B medical devices.'
  },
  'md-7': {
    title: 'Form MD-7',
    content: 'Form MD-7 is the application for a license to manufacture for sale or for distribution of Class C or Class D medical devices.'
  },
  'md-9': {
    title: 'Form MD-9',
    content: 'Form MD-9 is the license to manufacture for sale or for distribution of Class C or Class D medical devices.'
  },
  'md-14': {
    title: 'Form MD-14',
    content: 'Form MD-14 is the application for a license to import medical devices into India.'
  },
  'md-15': {
    title: 'Form MD-15',
    content: 'Form MD-15 is the license to import medical devices into India.'
  },
  'class-a': {
    title: 'Class A Medical Device',
    content: 'Class A medical devices are categorized as low-risk devices under the CDSCO classification system. Examples include surgical dressings, alcohol swabs, and mechanical wheelchairs.'
  },
  'class-b': {
    title: 'Class B Medical Device',
    content: 'Class B medical devices are categorized as low-moderate risk devices. Examples include hypodermic needles, suction equipment, and blood pressure monitors.'
  },
  'class-c': {
    title: 'Class C Medical Device',
    content: 'Class C medical devices are categorized as moderate-high risk devices. Examples include hemodialyzers, bone cements, and infusion pumps.'
  },
  'class-d': {
    title: 'Class D Medical Device',
    content: 'Class D medical devices are categorized as high-risk devices. Examples include cardiac stents, heart valves, and implantable defibrillators.'
  },
  'eu-mdr': {
    title: 'EU MDR (Medical Device Regulation)',
    content: 'The EU Medical Device Regulation (2017/745) is the regulatory framework for medical devices in the European Union, focusing on safety, performance, and clinical evidence.'
  },
  'usfda': {
    title: 'USFDA (U.S. Food and Drug Administration)',
    content: 'The USFDA is the federal agency responsible for protecting public health by ensuring the safety, efficacy, and security of medical devices in the United States.'
  },
  'cdsco': {
    title: 'CDSCO (Central Drugs Standard Control Organization)',
    content: 'CDSCO is India\'s national regulatory body for pharmaceuticals and medical devices, operating under the Ministry of Health and Family Welfare.'
  },
  'samd': {
    title: 'SaMD (Software as a Medical Device)',
    content: 'SaMD is software intended to be used for one or more medical purposes that perform these purposes without being part of a hardware medical device.'
  }
};

export default function InfoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? INFO_DATA[slug.toLowerCase()] : null;

  if (!data) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-brand-deep">Information Not Found</h1>
        <Link to="/" className="text-brand-teal hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <SEO 
        title={data.title} 
        description={data.content.substring(0, 160)} 
        canonical={`/information/${slug}`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-brand-teal font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="mr-2" size={20} /> Back to Home
        </Link>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <h1 className="text-4xl font-extrabold text-brand-deep mb-8">{data.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{data.content}</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-brand-deep mb-4">Need Regulatory Assistance?</h3>
            <p className="text-gray-600 mb-6">Our experts at RAC Forge can help you navigate the complexities of {data.title} and other regulatory requirements.</p>
            <Link to="/contact" className="inline-block bg-brand-deep text-white px-8 py-3 rounded-full font-bold hover:bg-brand-teal transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
