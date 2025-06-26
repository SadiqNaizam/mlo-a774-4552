import React from 'react';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import OfferBanner from '@/components/OfferBanner';
import PackageCard, { PackageCardProps } from '@/components/PackageCard';

const offerPackages: PackageCardProps[] = [
  {
    slug: 'royal-rajasthan-summer-deal',
    imageUrl: 'https://images.unsplash.com/photo-1603294342269-1a982141c2c3?q=80&w=1974&auto=format&fit=crop',
    title: 'Royal Rajasthan: Off-Season Palace Tour',
    price: 29999,
    description: 'Explore the majestic forts and palaces of Rajasthan at an unbeatable price. A truly royal experience without the peak season crowds.',
    highlights: ['Heritage Hotel Stay', 'Udaipur Lake Tour', 'Jodhpur Fort Entry', 'Free Airport Transfers'],
  },
  {
    slug: 'kerala-monsoon-escape',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop',
    title: 'Magical Monsoon in Kerala\'s Backwaters',
    price: 22500,
    description: 'Witness the lush greenery of Kerala come alive in the monsoon. Enjoy a serene houseboat stay and complimentary ayurvedic spa sessions.',
    highlights: ['Premium Houseboat', 'Complimentary Spa Session', 'All Meals Included', 'Scenic Village Walks'],
  },
  {
    slug: 'goa-beach-bonanza',
    imageUrl: 'https://images.unsplash.com/photo-1590372728958-8a03293d3957?q=80&w=1974&auto=format&fit=crop',
    title: 'Goa Beach Bonanza - Limited Time Offer',
    price: 18999,
    description: 'Sun, sand, and savings! Grab this limited-time offer for a perfect beach getaway in Goa with exclusive resort benefits.',
    highlights: ['4-Star Beachfront Resort', 'Daily Breakfast Buffet', 'Watersports Voucher', 'Scooter Rental Included'],
  },
];

const OffersPage = () => {
  console.log('OffersPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AppHeader />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Main promotional banner */}
          <OfferBanner
            title="Seasonal Gateway Deals"
            description="Discover India's breathtaking landscapes with our handpicked seasonal offers. Book your dream vacation today and save up to 40%!"
            ctaText="Explore All Packages"
            ctaLink="/packages"
            imageUrl="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=2070&auto=format&fit=crop"
            glowColor="rgba(252, 165, 165, 0.5)" // A warm, inviting glow
          />

          {/* Section for all offer cards */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
                Hot Deals Right Now
              </h2>
              <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-600">
                Don't miss out on these exclusive, limited-time travel packages.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {offerPackages.map((pkg) => (
                <PackageCard key={pkg.slug} {...pkg} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
};

export default OffersPage;