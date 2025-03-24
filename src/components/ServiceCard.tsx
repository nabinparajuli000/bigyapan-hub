
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card-hover bg-white rounded-xl p-6 border border-gray-100 shadow-subtle">
      <div className="w-12 h-12 mb-5 rounded-md bg-bigyapan-accent flex items-center justify-center text-bigyapan-blue">
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-bigyapan-dark">{title}</h3>
      
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
