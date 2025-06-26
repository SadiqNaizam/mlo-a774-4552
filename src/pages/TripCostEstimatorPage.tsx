import React from 'react';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import TripCostEstimator from '@/components/TripCostEstimator';

const TripCostEstimatorPage: React.FC = () => {
  console.log('TripCostEstimatorPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Site Header */}
      <AppHeader />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* The TripCostEstimator is the star of this page */}
        <TripCostEstimator />
      </main>

      {/* Site Footer */}
      <AppFooter />
    </div>
  );
};

export default TripCostEstimatorPage;