
import React from 'react';
import ServiceCard from './ServiceCard';
import { Code, Globe, MessagesSquare, Activity, Users, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Strategic campaigns that increase your online visibility and drive targeted traffic to grow your business.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom-built websites and web applications designed to deliver exceptional user experiences.'
    },
    {
      icon: Activity,
      title: 'SEO Optimization',
      description: 'Data-driven strategies to improve your search engine rankings and attract organic traffic.'
    },
    {
      icon: MessagesSquare,
      title: 'Social Media Management',
      description: 'Engaging content creation and community management to build your brand presence online.'
    },
    {
      icon: Users,
      title: 'Branding & Identity',
      description: 'Cohesive branding solutions that communicate your values and resonate with your audience.'
    },
    {
      icon: Image,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive, enjoyable digital experiences.'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm md:text-base text-bigyapan-blue font-medium px-4 py-1.5 mb-4 rounded-full bg-bigyapan-accent">
            Our Services
          </span>
          
          <h2 className="heading-lg text-bigyapan-dark mb-6">
            Comprehensive Digital Solutions
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            We offer a full spectrum of digital marketing and software development services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
