
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const NewsletterSignup = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className={cn('w-full max-w-md', className)}>
      <h3 className="text-lg font-medium mb-3">Subscribe to our newsletter</h3>
      <p className="text-sm text-gray-100/80 mb-5">
        Get the latest news, updates and tips delivered directly to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="w-full py-3 px-4 pr-36 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-bigyapan-blue/40"
          disabled={isSubmitting || isSuccess}
        />
        
        <button
          type="submit"
          className={`absolute right-1.5 top-1.5 py-1.5 px-4 bg-bigyapan-blue rounded-md text-sm font-medium transition-all ${
            isSubmitting || isSuccess
              ? 'bg-opacity-70'
              : 'hover:bg-opacity-90'
          }`}
          disabled={isSubmitting || isSuccess}
        >
          {isSubmitting ? 'Subscribing...' : isSuccess ? 'Subscribed!' : 'Subscribe'}
        </button>
      </form>
      
      {error && (
        <p className="mt-2 text-sm text-red-400">{error}</p>
      )}
      
      {isSuccess && (
        <p className="mt-2 text-sm text-green-400">
          Thank you for subscribing!
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;
