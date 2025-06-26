import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import HeroSearch from '@/components/HeroSearch';
import OfferBanner from '@/components/OfferBanner';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

// Placeholder data for featured packages
const featuredPackages = [
  {
    id: 1,
    title: 'Golden Triangle Odyssey',
    description: 'Explore the iconic cities of Delhi, Agra, and Jaipur.',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop', // Taj Mahal
    price: '$999',
  },
  {
    id: 2,
    title: 'Kerala Backwater Bliss',
    description: 'Relax and unwind in the serene backwaters of Kerala.',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop', // Kerala Backwaters
    price: '$750',
  },
  {
    id: 3,
    title: 'Royal Rajasthan Adventure',
    description: 'Discover the majestic forts and palaces of Rajasthan.',
    imageUrl: 'https://images.unsplash.com/photo-1603787072331-3140b0c9551c?q=80&w=1974&auto=format&fit=crop', // Hawa Mahal, Jaipur
    price: '$1200',
  },
];

const HomePage: React.FC = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AppHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center text-white space-y-8">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                Discover Your India
              </h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                From majestic mountains to serene backwaters, your next adventure awaits.
              </p>
            </div>
            <HeroSearch />
          </div>
        </section>

        {/* Featured Packages Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Packages</h2>
              <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked journeys to the most breathtaking destinations in India.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                  <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-56 object-cover" />
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-2xl font-bold text-primary">{pkg.price} <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/booking">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/packages">
                  View All Packages <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Offer Banner Section */}
        <section className="container mx-auto px-4">
           <OfferBanner 
              title="Monsoon Magic"
              description="Get up to 20% off on packages to hill stations and lush green landscapes. Embrace the rain!"
              ctaLink="/offers"
              ctaText="See Monsoon Deals"
           />
        </section>

      </main>
      <AppFooter />
    </div>
  );
};

export default HomePage;