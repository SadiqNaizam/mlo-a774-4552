import React from 'react';

// Import custom layout and form components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import BookingForm from '@/components/BookingForm';

/**
 * BookingPage Component
 * 
 * This page facilitates the final booking process for the user. It presents a
 * clean, multi-step form for collecting personal details, confirming the
 * itinerary, and handling payment. The layout is structured to be simple and
 * distraction-free, guiding the user through to completion.
 */
const BookingPage: React.FC = () => {
  console.log('BookingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* Application Header */}
      <AppHeader />

      {/* Main Content Area */}
      <main className="flex-grow container py-8 md:py-12">
        {/* The BookingForm is a self-contained multi-step component */}
        <BookingForm />
      </main>

      {/* Application Footer */}
      <AppFooter />
    </div>
  );
};

export default BookingPage;