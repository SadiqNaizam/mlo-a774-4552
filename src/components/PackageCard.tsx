import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PackageCardProps {
  slug: string;
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  highlights: string[];
}

const PackageCard: React.FC<PackageCardProps> = ({
  slug,
  imageUrl,
  title,
  price,
  description,
  highlights,
}) => {
  console.log('PackageCard loaded for:', title);

  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image and Hover Overlay Container */}
      <CardHeader className="p-0">
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl}
              alt={`Image of ${title}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm p-6 flex flex-col justify-center items-start
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h4 className="text-lg font-semibold text-white mb-3">Key Inclusions</h4>
            <ul className="space-y-2 text-sm">
              {highlights.slice(0, 4).map((highlight, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-400 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardHeader>

      {/* Static Content */}
      <CardContent className="p-4 bg-white flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 flex-grow line-clamp-3">{description}</p>
        <div className="flex justify-between items-center mt-4 pt-4 border-t">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-2xl font-extrabold text-blue-600">
              ₹{price.toLocaleString('en-IN')}
            </p>
          </div>
          <Button asChild>
            <Link to={`/packages/${slug}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;