
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Digital Marketing Trends to Watch in 2023',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that will shape the industry in the coming year.',
      image: 'https://via.placeholder.com/600x400',
      date: 'June 15, 2023',
      author: 'Sarah Johnson',
      category: 'Digital Marketing'
    },
    {
      id: 2,
      title: 'How to Optimize Your Website for Better Conversion Rates',
      excerpt: 'Learn the key strategies and techniques to improve your website\'s conversion rate and drive more business.',
      image: 'https://via.placeholder.com/600x400',
      date: 'May 28, 2023',
      author: 'Michael Chen',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'The Impact of AI on Modern Software Development',
      excerpt: 'Discover how artificial intelligence is revolutionizing the software development process and what it means for businesses.',
      image: 'https://via.placeholder.com/600x400',
      date: 'April 10, 2023',
      author: 'Emily Rodriguez',
      category: 'Technology'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm md:text-base text-bigyapan-blue font-medium px-4 py-1.5 mb-4 rounded-full bg-bigyapan-accent">
            Our Blog
          </span>
          
          <h2 className="heading-lg text-bigyapan-dark mb-6">
            Latest Insights & Articles
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Stay updated with the latest trends, tips, and insights in digital marketing and software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/600x400?text=Blog+Image';
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-bigyapan-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-bigyapan-dark line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-bigyapan-blue hover:text-bigyapan-dark font-medium transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-100 hover:bg-gray-200 text-bigyapan-dark font-medium transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
