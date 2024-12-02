import { GlassWater, Search } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { Link } from 'react-router-dom';

export function Header() {
  const { toggleSearch } = useSearch();

  return (
    <header className="fixed w-full backdrop-blur-md bg-black/20 z-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <GlassWater className="h-8 w-8 text-primary-accent" />
            <Link to="/" className="ml-2 text-ui-text text-xl font-semibold">
              Cocktail Haven
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 ml-auto">
            <Link
              to="/recipes"
              className="text-ui-text hover:text-primary-accent transition-colors duration-200"
            >
              Recipes
            </Link>
            <Link
              to="/learn"
              className="text-ui-text hover:text-primary-accent transition-colors duration-200"
            >
              Learn
            </Link>
            <button 
              onClick={toggleSearch}
              className="p-2 text-ui-text hover:text-primary-accent transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}