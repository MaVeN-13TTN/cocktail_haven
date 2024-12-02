import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { parseCocktail } from '../utils/cocktailParser';
import type { ParsedCocktail, CocktailFilters } from '../types/api';

export function useCocktails(searchQuery: string, filters: CocktailFilters = {}) {
  const [cocktails, setCocktails] = useState<ParsedCocktail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;
    const controller = new AbortController();

    async function fetchCocktails() {
      try {
        setLoading(true);
        setError(null);
        let response;

        if (searchQuery) {
          response = await api.searchCocktails(searchQuery);
        } else if (filters.ingredient) {
          response = await api.searchByIngredient(filters.ingredient);
        } else if (filters.alcoholic) {
          response = await api.filterByAlcoholic(filters.alcoholic);
        } else if (filters.category) {
          response = await api.filterByCategory(filters.category);
        } else if (filters.glass) {
          response = await api.filterByGlass(filters.glass);
        } else {
          // Load random cocktails if no filters or search query
          const randomCocktails = await Promise.all(
            Array(6).fill(null).map(() => api.getRandomCocktail())
          );
          
          if (!isActive) return;
          setCocktails(
            randomCocktails
              .map(response => response.drinks[0])
              .map(drink => parseCocktail(drink))
          );
          return;
        }
        
        if (!response?.drinks) {
          if (!isActive) return;
          setCocktails([]);
          return;
        }

        // For filtered results, we need to fetch full details
        const fullDetails = await Promise.all(
          response.drinks.slice(0, 20).map(drink => api.getCocktailById(drink.idDrink))
        );

        if (!isActive) return;
        setCocktails(
          fullDetails
            .map(response => response.drinks[0])
            .filter(Boolean)
            .map(drink => parseCocktail(drink))
        );
      } catch (err) {
        if (!isActive) return;
        setError('Failed to fetch cocktails');
      } finally {
        if (!isActive) return;
        setLoading(false);
      }
    }

    const timeoutId = setTimeout(fetchCocktails, 300);

    return () => {
      isActive = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [searchQuery, filters]);

  return { cocktails, loading, error };
}