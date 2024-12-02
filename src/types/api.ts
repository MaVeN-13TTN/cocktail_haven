export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
}

export interface DrinkResponse {
  drinks: Drink[];
}

export interface DrinksResponse {
  drinks: Drink[] | null;
}

export interface ListResponse {
  drinks: Array<{
    strCategory?: string;
    strGlass?: string;
    strIngredient1?: string;
    strAlcoholic?: string;
  }>;
}

export interface ParsedCocktail {
  id: string;
  name: string;
  image: string;
  category: string;
  isAlcoholic: boolean;
  glass: string;
  instructions: string;
  ingredients: Array<{
    name: string;
    measure: string;
  }>;
}

export interface CocktailFilters {
  category?: string;
  glass?: string;
  alcoholic?: 'Alcoholic' | 'Non_Alcoholic';
  ingredient?: string;
}