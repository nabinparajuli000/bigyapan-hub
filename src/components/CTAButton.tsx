import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const CTAButton = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: CTAButtonProps) => {
  const buttonClasses = cn(
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-md overflow-hidden',
    'after:content-[""] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300',
    'hover:after:scale-x-100 hover:after:origin-left',
    {
      'bg-bigyapan-blue text-white hover:after:bg-black/10': variant === 'primary',
      'bg-bigyapan-accent text-bigyapan-blue hover:after:bg-black/5': variant === 'secondary',
      'text-sm px-4 py-2': size === 'sm',
      'text-base px-6 py-3': size === 'md',
      'text-lg px-8 py-4': size === 'lg',
    },
    className
  );
  
  if (href) {
    return (
      <a 
        href={href}
        className={buttonClasses}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }
  
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CTAButton;
