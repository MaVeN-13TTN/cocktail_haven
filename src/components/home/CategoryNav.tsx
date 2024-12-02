import React from 'react';
import { Martini, Wine, Beer, Coffee, Grape } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

const categories = [
  { id: 'Ordinary_Drink', name: 'Classics', icon: Martini },
  { id: 'Homemade_Liqueur', name: 'Wine & Liqueurs', icon: Wine },
  { id: 'Punch_/_Party_Drink', name: 'Party Drinks', icon: Beer },
  { id: 'Coffee_/_Tea', name: 'Coffee Cocktails', icon: Coffee },
  { id: 'Non_Alcoholic', name: 'Mocktails', icon: Grape },
];

export function CategoryNav() {
  const { setFilters, filters } = useSearch();

  const handleCategoryClick = (categoryId: string) => {
    if (filters.category === categoryId || (filters.alcoholic === categoryId)) {
      // If clicking the same category, clear the filter
      setFilters({});
    } else {
      // Set the new category filter
      // Special handling for Non_Alcoholic category
      if (categoryId === 'Non_Alcoholic') {
        setFilters({ alcoholic: 'Non_Alcoholic' });
      } else {
        setFilters({ category: categoryId });
      }
    }
  };

  return (
    <section className="py-12 bg-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map(({ id, name, icon: Icon }) => {
            const isSelected = id === 'Non_Alcoholic' 
              ? filters.alcoholic === id
              : filters.category === id;
            
            return (
              <button
                key={id}
                onClick={() => handleCategoryClick(id)}
                className={`group flex flex-col items-center p-6 rounded-xl 
                          transition-all duration-300
                          ${isSelected 
                            ? 'bg-gradient-cta text-white' 
                            : 'bg-ui-card/10 hover:bg-ui-card/20'}`}
              >
                <div className={`p-4 rounded-full transition-colors duration-300
                              ${isSelected 
                                ? 'bg-white/20' 
                                : 'bg-gradient-cta/10 group-hover:bg-gradient-cta/20'}`}>
                  <Icon className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-primary-accent'}`} />
                </div>
                <span className={`mt-4 font-medium
                               ${isSelected ? 'text-white' : 'text-ui-text'}`}>
                  {name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}