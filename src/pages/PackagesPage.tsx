import React from 'react';

// Custom Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import PackageCard, { PackageCardProps } from '@/components/PackageCard';

// shadcn/ui Components
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination';

// Placeholder data for travel packages
const samplePackages: PackageCardProps[] = [
  {
    slug: 'golden-triangle-delight',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    title: 'Golden Triangle Delight',
    price: 45000,
    description: 'Explore the iconic cities of Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal, historic forts, and vibrant culture.',
    highlights: ['Visit Taj Mahal at Sunrise', 'Amber Fort Elephant Ride', 'Old Delhi Rickshaw Tour', '4-Star Hotel Stays'],
  },
  {
    slug: 'kerala-backwaters-escape',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935&auto=format&fit=crop',
    title: 'Kerala Backwaters Escape',
    price: 38000,
    description: 'Relax and unwind on a traditional houseboat as you cruise through the serene backwaters of Alleppey. A truly tranquil experience.',
    highlights: ['Overnight Houseboat Stay', 'Authentic Keralan Cuisine', 'Munnar Tea Gardens Visit', 'Kathakali Dance Show'],
  },
  {
    slug: 'rajasthan-royal-odyssey',
    imageUrl: 'https://images.unsplash.com/photo-1617498217319-f55a133f37b4?q=80&w=2070&auto=format&fit=crop',
    title: 'Rajasthan Royal Odyssey',
    price: 65000,
    description: 'Discover the land of kings with this tour of Jodhpur, Udaipur, and Jaisalmer. Stay in heritage hotels and explore majestic forts.',
    highlights: ['Mehrangarh Fort Tour', 'Udaipur Lake Palace View', 'Jaisalmer Desert Safari', 'Heritage Hotel Experience'],
  },
  {
    slug: 'himalayan-adventure-trek',
    imageUrl: 'https://images.unsplash.com/photo-1617839994193-4a3ee3f2628e?q=80&w=2070&auto=format&fit=crop',
    title: 'Himalayan Adventure Trek',
    price: 52000,
    description: 'Embark on a thrilling trek in the scenic foothills of the Himalayas. Perfect for adventure enthusiasts and nature lovers.',
    highlights: ['Guided Trekking with Porter', 'Camping Under the Stars', 'Visit to Shimla', 'River Rafting in Rishikesh'],
  },
  {
    slug: 'goa-beach-paradise',
    imageUrl: 'https://images.unsplash.com/photo-1590374585166-2923284f6c4c?q=80&w=1974&auto=format&fit=crop',
    title: 'Goa Beach Paradise',
    price: 28000,
    description: 'Soak up the sun on the famous beaches of Goa. Enjoy vibrant nightlife, delicious seafood, and Portuguese architecture.',
    highlights: ['North & South Goa Beaches', 'Water Sports Activities', 'Dudhsagar Falls Trip', 'Beachside Resort Stay'],
  },
    {
    slug: 'varanasi-spiritual-journey',
    imageUrl: 'https://images.unsplash.com/photo-1561361522-823a0153ea58?q=80&w=1974&auto=format&fit=crop',
    title: 'Varanasi Spiritual Journey',
    price: 32000,
    description: 'Experience the spiritual heart of India in Varanasi. Witness the Ganga Aarti ceremony and explore ancient temples.',
    highlights: ['Ganga Aarti Ceremony', 'Sunrise Boat Ride on Ganges', 'Sarnath Buddhist Site Visit', 'Old City Walking Tour'],
  },
];

const PackagesPage = () => {
  console.log('PackagesPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <AppHeader />

      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          {/* Page Title */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Explore Our Travel Packages</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Find your perfect Indian adventure, from serene backwaters to majestic mountains.</p>
          </section>

          {/* Filters & Sorting */}
          <section className="bg-white p-4 rounded-lg shadow-sm mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <h3 className="text-md font-semibold text-gray-700">Filter by:</h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="family" />
                <Label htmlFor="family" className="font-normal text-sm">Family Friendly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="adventure" />
                <Label htmlFor="adventure" className="font-normal text-sm">Adventure</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="honeymoon" />
                <Label htmlFor="honeymoon" className="font-normal text-sm">Honeymoon</Label>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Label htmlFor="sort" className="text-md font-semibold text-gray-700">Sort by:</Label>
              <Select defaultValue="price-asc">
                <SelectTrigger id="sort" className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Packages Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePackages.map((pkg) => (
              <PackageCard key={pkg.slug} {...pkg} />
            ))}
          </section>

          {/* Pagination */}
          <section className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>

        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default PackagesPage;