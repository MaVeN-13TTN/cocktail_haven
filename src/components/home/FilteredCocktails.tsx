import React, { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useCocktails } from '../../hooks/useCocktails';
import { GlassWater, Loader2 } from 'lucide-react';
import { RecipeModal } from '../recipes/RecipeModal';
import type { ParsedCocktail } from '../../types/api';

export function FilteredCocktails() {
  const { filters } = useSearch();
  const { cocktails, loading, error } = useCocktails('', filters);
  const [selectedRecipe, setSelectedRecipe] = useState<ParsedCocktail | null>(null);

  // Check for either category or alcoholic filter
  if (!filters.category && !filters.alcoholic) {
    return null;
  }

  if (loading) {
    return (
      <section className="py-12 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary-accent" />
          <p className="mt-4 text-ui-text">Loading cocktails...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-400">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-12 bg-primary-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cocktails.map((cocktail) => (
              <div
                key={cocktail.id}
                onClick={() => setSelectedRecipe(cocktail)}
                className="group relative overflow-hidden rounded-xl bg-ui-card/30 
                         backdrop-blur-sm hover:bg-ui-card/40 transition-all duration-300 
                         cursor-pointer transform hover:scale-[1.02]"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ui-text mb-2">{cocktail.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-ui-text">
                      <GlassWater className="h-5 w-5 mr-2 text-primary-accent" />
                      {cocktail.glass}
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary-accent/20 text-primary-accent">
                      {cocktail.isAlcoholic ? 'Alcoholic' : 'Non-Alcoholic'}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent 
                              group-hover:border-primary-accent/30 rounded-xl 
                              transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedRecipe && (
        <RecipeModal
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          recipe={selectedRecipe}
        />
      )}
    </>
  );
}