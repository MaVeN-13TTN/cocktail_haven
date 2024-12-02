export interface Cocktail {
  id: string;
  name: string;
  image: string;
  rating: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: string;
  ingredients: string[];
  instructions: string[];
  category: string;
}

export type SearchFilters = {
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  category?: string;
  minRating?: number;
};