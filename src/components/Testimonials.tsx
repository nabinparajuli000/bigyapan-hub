
import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      content: "The Bigyapan & IT team completely transformed our online presence. Their strategic approach to digital marketing has resulted in a 200% increase in qualified leads for our business.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechSolutions Inc.",
      image: "https://via.placeholder.com/48"
    },
    {
      content: "Working with The Bigyapan & IT on our website redesign was a game-changer. Their attention to detail and focus on user experience resulted in a 45% increase in conversion rates.",
      author: "Michael Chen",
      position: "CEO",
      company: "Innovate AI",
      image: "https://via.placeholder.com/48"
    },
    {
      content: "Their SEO expertise is unmatched. Within six months of implementing their recommendations, our organic traffic increased by 85% and we're now ranking on the first page for all our target keywords.",
      author: "Emily Rodriguez",
      position: "Digital Strategist",
      company: "Growth Partners",
      image: "https://via.placeholder.com/48"
    },
    {
      content: "The custom software solution they developed for our company has streamlined our operations and saved us countless hours. Their team was professional and delivered exactly what we needed.",
      author: "David Williams",
      position: "Operations Manager",
      company: "Logistics Plus",
      image: "https://via.placeholder.com/48"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (!sliderRef.current) return;
    
    // Update active index based on scroll position
    const itemWidth = sliderRef.current.offsetWidth;
    const newIndex = Math.round(sliderRef.current.scrollLeft / itemWidth);
    setActiveIndex(Math.max(0, Math.min(newIndex, testimonials.length - 1)));
  };
  
  useEffect(() => {
    // Auto-scroll testimonials
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  useEffect(() => {
    if (!sliderRef.current) return;
    
    // Scroll to active slide
    sliderRef.current.scrollTo({
      left: activeIndex * sliderRef.current.offsetWidth,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm md:text-base text-bigyapan-blue font-medium px-4 py-1.5 mb-4 rounded-full bg-bigyapan-accent">
            Testimonials
          </span>
          
          <h2 className="heading-lg text-bigyapan-dark mb-6">
            What Our Clients Say
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Don't just take our word for it. Hear from businesses we've helped transform through our digital marketing and software solutions.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div
            ref={sliderRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full p-4">
                  <TestimonialCard
                    content={testimonial.content}
                    author={testimonial.author}
                    position={testimonial.position}
                    company={testimonial.company}
                    image={testimonial.image}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-bigyapan-dark hover:text-bigyapan-blue transition-colors pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-bigyapan-dark hover:text-bigyapan-blue transition-colors pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-bigyapan-blue w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
