
import React, { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = heroRef.current;
      
      // Calculate percent moved
      const xPercent = (clientX / offsetWidth - 0.5) * 2; // -1 to 1
      const yPercent = (clientY / offsetHeight - 0.5) * 2; // -1 to 1
      
      // Apply subtle parallax effect to elements with data-depth
      const parallaxElements = heroRef.current.querySelectorAll('[data-depth]');
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const depth = parseFloat(element.getAttribute('data-depth') || '0');
        const moveX = xPercent * depth;
        const moveY = yPercent * depth;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      id="hero"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating gradient shape 1 */}
        <div 
          data-depth="20"
          className="absolute top-[10%] right-[15%] w-96 h-96 rounded-full bg-bigyapan-blue/5 filter blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        ></div>
        
        {/* Floating gradient shape 2 */}
        <div 
          data-depth="30"
          className="absolute bottom-[15%] left-[10%] w-64 h-64 rounded-full bg-bigyapan-blue/10 filter blur-2xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>
      
      {/* Main content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center stagger-animation">
          <span className="inline-block text-sm md:text-base text-bigyapan-blue font-medium px-4 py-1.5 mb-6 rounded-full bg-bigyapan-accent">
            Digital Marketing & Software Solutions
          </span>
          
          <h1 className="heading-xl text-bigyapan-dark mb-6">
            Transforming Businesses Through Digital Excellence
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            We blend creativity with technology to deliver exceptional digital marketing and software development solutions tailored to elevate your business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <CTAButton size="lg">
              Schedule a Consultation
            </CTAButton>
            
            <a 
              href="#services" 
              className="text-bigyapan-dark hover:text-bigyapan-blue transition-colors duration-300 font-medium"
            >
              Explore Our Services
            </a>
          </div>
          
          {/* Trusted by section */}
          <div className="mt-16 sm:mt-24">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
              Trusted by innovative companies
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map((brand, index) => (
                <div 
                  key={index}
                  className="h-8 w-24 bg-gray-200 rounded-md flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span className="text-xs text-gray-500">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center animate-pulse-subtle">
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <div className="w-6 h-9 border-2 border-gray-400 rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
