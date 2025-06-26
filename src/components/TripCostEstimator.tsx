import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, animate } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Plane, Hotel, Bus, Train, Car, Users, CalendarDays, Wallet } from 'lucide-react';

const TripCostEstimator: React.FC = () => {
  const navigate = useNavigate();

  // State for user inputs
  const [destination, setDestination] = useState('Goa');
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState(7);
  
  // State for service toggles
  const [includeFlights, setIncludeFlights] = useState(true);
  const [includeHotel, setIncludeHotel] = useState(true);
  const [includeBus, setIncludeBus] = useState(false);
  const [includeTrain, setIncludeTrain] = useState(false);
  const [includeCab, setIncludeCab] = useState(true);
  
  // State for service options
  const [hotelStars, setHotelStars] = useState([3]);

  // State for the calculated cost
  const [totalCost, setTotalCost] = useState(0);
  const costRef = useRef<HTMLSpanElement>(null);

  console.log('TripCostEstimator loaded');

  // Memoized calculation function
  const calculateTotalCost = useCallback(() => {
    let cost = 0;
    const dailyBaseCost = 50;
    const flightCostPerPerson = 150;
    const hotelCostPerStar = 25;
    const busCostPerDay = 10;
    const trainCostPerDay = 15;
    const cabCostPerDay = 30;

    // Base cost for travel and stay
    cost += travelers * duration * dailyBaseCost;

    // Add costs for selected services
    if (includeFlights) {
      cost += travelers * flightCostPerPerson;
    }
    if (includeHotel) {
      cost += travelers * duration * hotelStars[0] * hotelCostPerStar;
    }
    if (includeBus) {
        cost += travelers * duration * busCostPerDay;
    }
    if (includeTrain) {
        cost += travelers * duration * trainCostPerDay;
    }
    if (includeCab) {
        cost += duration * cabCostPerDay; // Cab cost usually per day, not per person
    }

    setTotalCost(cost);
  }, [travelers, duration, includeFlights, includeHotel, includeBus, includeTrain, includeCab, hotelStars]);

  // Effect to recalculate cost when inputs change
  useEffect(() => {
    calculateTotalCost();
  }, [calculateTotalCost]);

  // Effect for animating the cost display
  useEffect(() => {
    const node = costRef.current;
    if (node) {
      const controls = animate(Number(node.textContent?.replace(/,/g, '') || 0), totalCost, {
        duration: 0.7,
        ease: "easeOut",
        onUpdate(value) {
            node.textContent = Math.round(value).toLocaleString('en-US');
        },
      });
      return () => controls.stop();
    }
  }, [totalCost]);

  const handleFindPackages = () => {
    // We could pass the budget in the URL or state management in a real app
    navigate('/packages');
  };
  
  const ServiceToggle = ({ id, label, icon, checked, onCheckedChange }: { id: string, label: string, icon: React.ReactNode, checked: boolean, onCheckedChange: (checked: boolean) => void }) => (
    <div className="flex items-center justify-between p-3 rounded-lg border bg-gray-50/50 dark:bg-gray-800/50">
        <div className="flex items-center gap-3">
            {icon}
            <Label htmlFor={id} className="font-medium">{label}</Label>
        </div>
        <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl overflow-hidden border-2 border-primary/10">
      <CardHeader className="bg-muted/30 p-6">
        <CardTitle className="text-3xl font-bold text-center tracking-tight">Trip Cost Estimator</CardTitle>
        <CardDescription className="text-center text-lg">
          Plan your budget for an incredible journey across India.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Core Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-base font-semibold">Destination</Label>
              <Input id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g., Kerala, Rajasthan..." className="text-base" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="travelers" className="text-base font-semibold flex items-center gap-2"><Users className="w-4 h-4"/>Travelers</Label>
                <Input id="travelers" type="number" value={travelers} onChange={(e) => setTravelers(Math.max(1, Number(e.target.value)))} min="1" className="text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration" className="text-base font-semibold flex items-center gap-2"><CalendarDays className="w-4 h-4"/>Duration (days)</Label>
                <Input id="duration" type="number" value={duration} onChange={(e) => setDuration(Math.max(1, Number(e.target.value)))} min="1" className="text-base" />
              </div>
            </div>
            {/* Hotel Slider */}
            <div className={`space-y-3 transition-opacity duration-300 ${includeHotel ? 'opacity-100' : 'opacity-50'}`}>
                <Label className="text-base font-semibold">Hotel Quality</Label>
                <div className='flex items-center gap-4'>
                    <Slider
                        defaultValue={hotelStars}
                        onValueChange={setHotelStars}
                        max={5}
                        min={1}
                        step={1}
                        disabled={!includeHotel}
                    />
                    <span className="font-bold text-lg w-12 text-center">{hotelStars[0]}-Star</span>
                </div>
            </div>
          </div>
          
          {/* Right Column: Service Toggles */}
          <div className="space-y-4">
            <ServiceToggle id="flights" label="Flights" icon={<Plane className="w-5 h-5 text-blue-500" />} checked={includeFlights} onCheckedChange={setIncludeFlights} />
            <ServiceToggle id="hotel" label="Hotel" icon={<Hotel className="w-5 h-5 text-purple-500" />} checked={includeHotel} onCheckedChange={setIncludeHotel} />
            <ServiceToggle id="bus" label="Bus" icon={<Bus className="w-5 h-5 text-red-500" />} checked={includeBus} onCheckedChange={setIncludeBus} />
            <ServiceToggle id="train" label="Train" icon={<Train className="w-5 h-5 text-green-500" />} checked={includeTrain} onCheckedChange={setIncludeTrain} />
            <ServiceToggle id="cab" label="Local Cabs" icon={<Car className="w-5 h-5 text-yellow-500" />} checked={includeCab} onCheckedChange={setIncludeCab} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Wallet className="w-8 h-8 text-primary" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Estimated Total Cost</p>
            <p className="text-4xl font-extrabold tracking-tighter">
              $<span ref={costRef}>0</span>
            </p>
          </div>
        </div>
        <Button size="lg" className="w-full sm:w-auto text-lg" onClick={handleFindPackages}>
          Find Packages In Your Budget
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCostEstimator;