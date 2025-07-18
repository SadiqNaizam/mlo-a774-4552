import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import PackagesPage from "./pages/PackagesPage";
import TripCostEstimatorPage from "./pages/TripCostEstimatorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/trip-cost-estimator" element={<TripCostEstimatorPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
