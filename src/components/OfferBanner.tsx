import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface OfferBannerProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  glowColor?: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  title = "Limited Time Offer",
  description = "Discover amazing destinations with our exclusive deals. Book now and save!",
  ctaText = "Explore Packages",
  ctaLink = "/packages",
  imageUrl = "https://images.unsplash.com/photo-1532375836242-2d93d57715b4?q=80&w=2070&auto=format&fit=crop",
  glowColor = 'rgba(22, 163, 74, 0.5)', // A green glow to match the "Incredible India" theme
}) => {
  console.log('OfferBanner loaded');

  // The glow effect is applied using a custom box-shadow.
  // Using an inline style allows for dynamic color from props.
  const glowStyle = {
    boxShadow: `0 0 20px 5px ${glowColor}`,
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden p-8 md:p-12 my-8 transition-all duration-500 ease-in-out hover:scale-[1.02] group"
      style={glowStyle}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 -z-10"
      />
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 to-black/40 -z-10" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white space-y-4 md:space-y-6">
        <h2 
          className="text-4xl md:text-6xl font-black tracking-tight uppercase" 
          style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.8)' }}
        >
          {title}
        </h2>
        <p className="max-w-3xl text-lg md:text-xl text-neutral-200 font-light" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
          {description}
        </p>
        <Button asChild size="lg" className="mt-4 bg-white text-emerald-800 font-bold hover:bg-neutral-200 transition-all duration-300 scale-100 hover:scale-105 shadow-lg hover:shadow-xl">
          <Link to={ctaLink}>
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OfferBanner;