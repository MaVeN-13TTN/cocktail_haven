import axios from 'axios';
import type { DrinkResponse, DrinksResponse, ListResponse } from '../types/api';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const api = {
  searchCocktails: async (query: string): Promise<DrinksResponse> => {
    const response = await axios.get(`${BASE_URL}/search.php?s=${query}`);
    return response.data;
  },

  getCocktailById: async (id: string): Promise<DrinkResponse> => {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data;
  },

  getRandomCocktail: async (): Promise<DrinkResponse> => {
    const response = await axios.get(`${BASE_URL}/random.php`);
    return response.data;
  },

  searchByIngredient: async (ingredient: string): Promise<DrinksResponse> => {
    const response = await axios.get(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`);
    return response.data;
  },

  filterByAlcoholic: async (type: 'Alcoholic' | 'Non_Alcoholic'): Promise<DrinksResponse> => {
    const response = await axios.get(`${BASE_URL}/filter.php?a=${encodeURIComponent(type)}`);
    return response.data;
  },

  filterByCategory: async (category: string): Promise<DrinksResponse> => {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`);
    return response.data;
  },

  filterByGlass: async (glass: string): Promise<DrinksResponse> => {
    const response = await axios.get(`${BASE_URL}/filter.php?g=${encodeURIComponent(glass)}`);
    return response.data;
  },

  getCategories: async (): Promise<ListResponse> => {
    const response = await axios.get(`${BASE_URL}/list.php?c=list`);
    return response.data;
  },

  getGlasses: async (): Promise<ListResponse> => {
    const response = await axios.get(`${BASE_URL}/list.php?g=list`);
    return response.data;
  },

  getIngredients: async (): Promise<ListResponse> => {
    const response = await axios.get(`${BASE_URL}/list.php?i=list`);
    return response.data;
  },

  getAlcoholicFilters: async (): Promise<ListResponse> => {
    const response = await axios.get(`${BASE_URL}/list.php?a=list`);
    return response.data;
  },

  searchCocktailsByLetter: async (letter: string): Promise<DrinksResponse> => {
    const response = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
    return response.data;
  },
};