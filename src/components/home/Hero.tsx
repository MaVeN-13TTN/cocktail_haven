import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80"
          alt="Cocktail atmosphere"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#F5F5F5] mb-6">
            Discover the Art of
            <span className="text-[#FF8A00] block">Craft Cocktails</span>
          </h1>
          <p className="text-lg text-[#F5F5F5]/90 mb-8">
            Explore hundreds of premium cocktail recipes, expert tips, and master the craft of mixology.
          </p>
          <Link to="/recipes" className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] rounded-full text-[#F5F5F5] font-semibold hover:shadow-lg hover:shadow-[#FF8A00]/20 transition-all duration-300">
            Start Mixing
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}