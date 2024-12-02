import { useState, useEffect } from 'react';
import { api } from '../services/api';

export function useCocktailFilters() {
  const [categories, setCategories] = useState<string[]>([]);
  const [glasses, setGlasses] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFilters() {
      try {
        const [categoriesRes, glassesRes, ingredientsRes] = await Promise.all([
          api.getCategories(),
          api.getGlasses(),
          api.getIngredients()
        ]);

        setCategories(categoriesRes.drinks.map(d => d.strCategory!));
        setGlasses(glassesRes.drinks.map(d => d.strGlass!));
        setIngredients(ingredientsRes.drinks.map(d => d.strIngredient1!));
      } catch (err) {
        setError('Failed to load filters');
      } finally {
        setLoading(false);
      }
    }

    fetchFilters();
  }, []);

  return { categories, glasses, ingredients, loading, error };
}