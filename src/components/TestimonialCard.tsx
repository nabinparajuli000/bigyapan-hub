
import React from 'react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
  isActive?: boolean;
}

const TestimonialCard = ({
  content,
  author,
  position,
  company,
  image,
  isActive = false
}: TestimonialCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-card transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
      <div className="mb-6">
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 4C15 1.79086 13.2091 0 11 0H4C1.79086 0 0 1.79086 0 4V11C0 13.2091 1.79086 15 4 15H8.5C9.32843 15 10 15.6716 10 16.5V20C10 20.5523 10.4477 21 11 21H14C14.5523 21 15 20.5523 15 20V4Z" fill="#0073e6" fillOpacity="0.2"/>
          <path d="M36 4C36 1.79086 34.2091 0 32 0H25C22.7909 0 21 1.79086 21 4V11C21 13.2091 22.7909 15 25 15H29.5C30.3284 15 31 15.6716 31 16.5V20C31 20.5523 31.4477 21 32 21H35C35.5523 21 36 20.5523 36 20V4Z" fill="#0073e6" fillOpacity="0.2"/>
        </svg>
      </div>
      
      <p className="text-gray-700 mb-6 line-clamp-4">{content}</p>
      
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src={image} 
              alt={author} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/48';
              }}
            />
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-bigyapan-dark">{author}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
