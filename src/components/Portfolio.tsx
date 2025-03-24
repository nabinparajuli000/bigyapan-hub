
import React, { useState } from 'react';
import CTAButton from './CTAButton';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'App Development' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Digital Marketing' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      thumbnail: 'https://via.placeholder.com/600x400',
      description: 'A fully responsive e-commerce platform with payment gateway integration.'
    },
    {
      id: 2,
      title: 'Real Estate Mobile App',
      category: 'app',
      thumbnail: 'https://via.placeholder.com/600x400',
      description: 'A feature-rich real estate listing app with property search and filtering.'
    },
    {
      id: 3,
      title: 'Corporate Rebrand',
      category: 'branding',
      thumbnail: 'https://via.placeholder.com/600x400',
      description: 'Complete rebranding project for a financial services company.'
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'marketing',
      thumbnail: 'https://via.placeholder.com/600x400',
      description: 'Multi-channel marketing campaign that increased leads by 150%.'
    },
    {
      id: 5,
      title: 'Educational Platform',
      category: 'web',
      thumbnail: 'https://via.placeholder.com/600x400',
      description: 'An interactive learning platform with course management system.'
    },
    {
      id: 6,
      title: 'Healthcare App',
      category: 'app',
      thumbnail: 'https://via.placeholder.com/600x400',
      description: 'Telehealth application with appointment scheduling and video consultations.'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm md:text-base text-bigyapan-blue font-medium px-4 py-1.5 mb-4 rounded-full bg-bigyapan-accent">
            Our Portfolio
          </span>
          
          <h2 className="heading-lg text-bigyapan-dark mb-6">
            Featured Projects
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Explore our selected projects showcasing our expertise in web development, branding, and digital marketing.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                activeFilter === category.id 
                  ? 'bg-bigyapan-blue text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-subtle transition-all duration-300 hover:-translate-y-2 hover:shadow-card">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/600x400?text=Project+Image';
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <a href="#" className="text-white font-medium hover:underline">View Project</a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-bigyapan-dark">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-bigyapan-blue px-3 py-1 bg-bigyapan-accent/50 rounded-full">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <CTAButton>
            View All Projects
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
