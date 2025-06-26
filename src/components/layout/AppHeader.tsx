import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Mountain, Menu } from 'lucide-react';

const AppHeader: React.FC = () => {
  console.log('AppHeader loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
    }`;

  const navItems = [
    { href: '/packages', label: 'Packages' },
    { href: '/offers', label: 'Offers' },
    { href: '/trip-cost-estimator', label: 'Trip Cost Estimator' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo and Brand Name */}
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block">Incredible India Planner</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Desktop Auth Buttons */}
          <div className="hidden items-center space-x-2 md:flex">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu using Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 pt-6">
                  <Link to="/" className="flex items-center space-x-2">
                     <Mountain className="h-6 w-6 text-primary" />
                     <span className="font-bold">Incredible India Planner</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                         <NavLink to={item.href} className={({ isActive }) => `text-lg font-medium ${isActive ? 'text-primary' : ''}`}>
                          {item.label}
                        </NavLink>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-2 pt-4 border-t">
                     <SheetClose asChild>
                        <Button variant="outline" asChild><Link to="/login">Login</Link></Button>
                     </SheetClose>
                     <SheetClose asChild>
                        <Button asChild><Link to="/signup">Sign Up</Link></Button>
                     </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;