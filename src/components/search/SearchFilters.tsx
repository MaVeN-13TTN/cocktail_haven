import React from 'react';
import { useSearch } from '../../context/SearchContext';
import { useCocktailFilters } from '../../hooks/useCocktailFilters';
import { Loader2 } from 'lucide-react';

export function SearchFilters() {
  const { filters, setFilters } = useSearch();
  const { categories, glasses, ingredients, loading, error } = useCocktailFilters();

  if (loading) {
    return (
      <div className="p-4 text-center">
        <Loader2 className="h-5 w-5 animate-spin mx-auto text-primary-accent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-ui-card/20">
      <div>
        <label className="block text-sm font-medium text-ui-text mb-2">Category</label>
        <select
          value={filters.category || ''}
          onChange={(e) => setFilters({
            ...filters,
            category: e.target.value || undefined
          })}
          className="w-full bg-ui-card/20 text-ui-text rounded-lg py-2 px-3 
                   border-0 focus:ring-2 focus:ring-primary-accent/50"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-ui-text mb-2">Glass Type</label>
        <select
          value={filters.glass || ''}
          onChange={(e) => setFilters({
            ...filters,
            glass: e.target.value || undefined
          })}
          className="w-full bg-ui-card/20 text-ui-text rounded-lg py-2 px-3 
                   border-0 focus:ring-2 focus:ring-primary-accent/50"
        >
          <option value="">All Glass Types</option>
          {glasses.map((glass) => (
            <option key={glass} value={glass}>{glass}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-ui-text mb-2">Main Ingredient</label>
        <select
          value={filters.ingredient || ''}
          onChange={(e) => setFilters({
            ...filters,
            ingredient: e.target.value || undefined
          })}
          className="w-full bg-ui-card/20 text-ui-text rounded-lg py-2 px-3 
                   border-0 focus:ring-2 focus:ring-primary-accent/50"
        >
          <option value="">All Ingredients</option>
          {ingredients.map((ingredient) => (
            <option key={ingredient} value={ingredient}>{ingredient}</option>
          ))}
        </select>
      </div>

      <div className="md:col-span-3">
        <label className="block text-sm font-medium text-ui-text mb-2">Type</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="alcoholic"
              checked={!filters.alcoholic}
              onChange={() => setFilters({
                ...filters,
                alcoholic: undefined
              })}
              className="text-primary-accent focus:ring-primary-accent/50 bg-transparent"
            />
            <span className="ml-2 text-ui-text">All</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="alcoholic"
              checked={filters.alcoholic === 'Alcoholic'}
              onChange={() => setFilters({
                ...filters,
                alcoholic: 'Alcoholic'
              })}
              className="text-primary-accent focus:ring-primary-accent/50 bg-transparent"
            />
            <span className="ml-2 text-ui-text">Alcoholic</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="alcoholic"
              checked={filters.alcoholic === 'Non_Alcoholic'}
              onChange={() => setFilters({
                ...filters,
                alcoholic: 'Non_Alcoholic'
              })}
              className="text-primary-accent focus:ring-primary-accent/50 bg-transparent"
            />
            <span className="ml-2 text-ui-text">Non-Alcoholic</span>
          </label>
        </div>
      </div>
    </div>
  );
}