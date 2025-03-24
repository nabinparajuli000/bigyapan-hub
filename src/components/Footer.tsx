
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';

const Footer = () => {
  return (
    <footer id="contact" className="bg-bigyapan-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              <span className="text-white">The</span>
              <span className="text-bigyapan-blue"> Bigyapan & IT</span>
            </h3>
            
            <p className="text-gray-300 mb-6">
              Transforming businesses through innovative digital marketing and software development solutions.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-bigyapan-blue flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Digital Avenue, Tech Park, Business District</span>
              </li>
              
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-bigyapan-blue flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-bigyapan-blue flex-shrink-0" />
                <span className="text-gray-300">info@bigyapanit.com</span>
              </li>
            </ul>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            
            <ul className="space-y-3">
              {[
                { name: "About Us", url: "#about" },
                { name: "Services", url: "#services" },
                { name: "Portfolio", url: "#portfolio" },
                { name: "Blog", url: "#blog" },
                { name: "Contact", url: "#contact" },
                { name: "Careers", url: "#careers" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            
            <ul className="space-y-3">
              {[
                "Digital Marketing",
                "Web Development",
                "SEO Optimization",
                "Social Media Management",
                "Branding & Identity",
                "UI/UX Design"
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <NewsletterSignup />
            
            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-bigyapan-blue/20 transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Bigyapan & IT. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
