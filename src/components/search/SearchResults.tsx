import React, { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { Star, Loader2, GlassWater } from 'lucide-react';
import { useCocktails } from '../../hooks/useCocktails';
import { RecipeModal } from '../recipes/RecipeModal';
import type { ParsedCocktail } from '../../types/api';

export function SearchResults() {
  const { searchQuery, filters } = useSearch();
  const { cocktails, loading, error } = useCocktails(searchQuery, filters);
  const [selectedRecipe, setSelectedRecipe] = useState<ParsedCocktail | null>(null);

  if (loading) {
    return (
      <div className="p-8 text-center text-ui-text">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary-accent" />
        <p className="mt-2">Searching for cocktails...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  if (!searchQuery && !Object.keys(filters).length) {
    return (
      <div className="p-8 text-center text-ui-text">
        <GlassWater className="h-12 w-12 mx-auto text-primary-accent mb-4" />
        <p className="text-lg">Start typing to search for cocktails</p>
        <p className="text-sm opacity-70 mt-2">Or use filters to browse by category</p>
      </div>
    );
  }

  if (cocktails.length === 0) {
    return (
      <div className="p-8 text-center text-ui-text">
        <p>No cocktails found matching your criteria.</p>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
        {cocktails.map((cocktail) => (
          <div
            key={cocktail.id}
            onClick={() => setSelectedRecipe(cocktail)}
            className="flex items-center space-x-4 p-4 rounded-lg bg-ui-card/20 
                     hover:bg-ui-card/30 transition-all duration-200 cursor-pointer
                     border border-transparent hover:border-primary-accent/30
                     transform hover:scale-[1.02]"
          >
            <img
              src={cocktail.image}
              alt={cocktail.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-ui-text font-medium truncate">{cocktail.name}</h3>
              <div className="flex items-center mt-1 text-sm">
                <span className="text-ui-text opacity-60 truncate">{cocktail.category}</span>
                <span className="mx-2 text-ui-text opacity-40">•</span>
                <span className="text-ui-text opacity-60">
                  {cocktail.isAlcoholic ? 'Alcoholic' : 'Non-Alcoholic'}
                </span>
              </div>
              <div className="mt-2 text-sm text-ui-text opacity-60 flex items-center">
                <GlassWater className="h-4 w-4 mr-1 text-primary-accent" />
                {cocktail.glass}
              </div>
            </div>
          </div>
        ))}
      </div>

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