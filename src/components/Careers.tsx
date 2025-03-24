
import React from 'react';
import { ArrowUpRight, MapPin, Clock, DollarSign } from 'lucide-react';
import CTAButton from './CTAButton';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Front-end Developer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      description: 'We are looking for an experienced Front-end Developer to join our growing team and help create exceptional web experiences.'
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'Join our marketing team to plan and execute digital marketing campaigns across multiple channels.'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'On-site',
      type: 'Full-time',
      salary: '$70,000 - $95,000',
      description: 'We need a creative UI/UX Designer with a portfolio showcasing exceptional digital design work.'
    },
    {
      id: 4,
      title: 'Back-end Developer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$85,000 - $120,000',
      description: 'Seeking a skilled Back-end Developer with experience in building scalable and secure APIs.'
    }
  ];

  const benefits = [
    'Competitive salary and bonus structure',
    'Health insurance and wellness programs',
    'Flexible work arrangements',
    'Professional development opportunities',
    'Team retreats and social events',
    'Modern office with amenities'
  ];

  return (
    <section id="careers" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm md:text-base text-bigyapan-blue font-medium px-4 py-1.5 mb-4 rounded-full bg-bigyapan-accent">
            Join Our Team
          </span>
          
          <h2 className="heading-lg text-bigyapan-dark mb-6">
            Career Opportunities
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            We're always looking for talented individuals to join our team. Check out our open positions and benefits below.
          </p>
        </div>
        
        {/* Benefits */}
        <div className="bg-white rounded-xl p-8 mb-12 shadow-subtle">
          <h3 className="text-2xl font-semibold mb-6 text-bigyapan-dark">Why Work With Us</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-bigyapan-accent flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#0073e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Open positions */}
        <h3 className="text-2xl font-semibold mb-6 text-bigyapan-dark">Open Positions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {openPositions.map((position) => (
            <div key={position.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-subtle hover:shadow-card transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-semibold text-bigyapan-dark">{position.title}</h4>
                <a 
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-bigyapan-dark group-hover:bg-bigyapan-blue group-hover:text-white transition-colors"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
              
              <p className="text-gray-600 mb-4">{position.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={14} className="mr-1 text-bigyapan-blue" />
                  <span>{position.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={14} className="mr-1 text-bigyapan-blue" />
                  <span>{position.type}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign size={14} className="mr-1 text-bigyapan-blue" />
                  <span>{position.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Don't see a role that fits your skills? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          
          <CTAButton>
            Submit Your Application
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Careers;
