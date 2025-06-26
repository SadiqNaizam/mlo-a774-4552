import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CalendarDays, Users, Search, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

const HeroSearch = () => {
  console.log('HeroSearch loaded');

  const [destination, setDestination] = useState('');
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [guests, setGuests] = useState({ adults: 2, children: 0 });

  const handleGuestChange = (type: 'adults' | 'children', operation: 'increment' | 'decrement') => {
    setGuests(prev => {
      const currentValue = prev[type];
      const newValue = operation === 'increment' ? currentValue + 1 : Math.max(type === 'adults' ? 1 : 0, currentValue - 1);
      return { ...prev, [type]: newValue };
    });
  };

  const totalGuests = guests.adults + guests.children;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 items-center">
          
          {/* Destination Input */}
          <div className="relative md:col-span-4">
            <Label htmlFor="destination" className="text-xs font-semibold text-gray-500 absolute -top-2 left-3 bg-white/90 dark:bg-black/80 px-1">Destination</Label>
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="destination"
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Date Picker */}
          <div className="md:col-span-3">
             <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarDays className="mr-2 h-5 w-5 text-gray-400" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests Selector */}
          <div className="md:col-span-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full h-12 justify-start text-left font-normal">
                  <Users className="mr-2 h-5 w-5 text-gray-400" />
                  <span>{totalGuests} guest{totalGuests > 1 ? 's' : ''}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60 p-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="adults" className="font-normal">Adults</Label>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => handleGuestChange('adults', 'decrement')}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-6 text-center">{guests.adults}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => handleGuestChange('adults', 'increment')}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="children" className="font-normal">Children</Label>
                     <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => handleGuestChange('children', 'decrement')}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-6 text-center">{guests.children}</span>
                      <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => handleGuestChange('children', 'increment')}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Search Button */}
          <div className="md:col-span-2">
            <Button asChild size="lg" className="w-full h-12 text-lg">
              <Link to="/packages">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSearch;