
import React from 'react';
import { CheckCircle } from 'lucide-react';
import CTAButton from './CTAButton';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm md:text-base text-bigyapan-blue font-medium px-4 py-1.5 mb-4 rounded-full bg-bigyapan-accent">
              About Us
            </span>
            
            <h2 className="heading-lg text-bigyapan-dark mb-6">
              Empowering Businesses Through Digital Innovation
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              The Bigyapan & IT is a full-service digital marketing and software development agency focused on delivering exceptional results. With years of industry experience, we combine creativity and technical expertise to help businesses thrive in the digital landscape.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Experienced and dedicated team of professionals',
                'Customer-centric approach to every project',
                'Result-oriented strategies tailored to your business',
                'Continuous innovation and adoption of latest technologies'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bigyapan-blue flex-shrink-0 mt-0.5 mr-3" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <CTAButton>
              Learn More About Us
            </CTAButton>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-xl overflow-hidden shadow-card relative z-10">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-500 text-sm">About Us Image</span>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-6 -right-6 w-full h-full rounded-xl border-2 border-bigyapan-blue/20 -z-10"></div>
            
            {/* Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-5 z-20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-bigyapan-blue">500+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-bigyapan-blue">98%</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
