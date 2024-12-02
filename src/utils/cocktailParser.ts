import type { Drink, ParsedCocktail } from '../types/api';

export function parseCocktail(drink: Drink): ParsedCocktail {
  const ingredients: Array<{ name: string; measure: string }> = [];

  // Extract ingredients and measurements
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}` as keyof Drink];
    const measure = drink[`strMeasure${i}` as keyof Drink];

    if (ingredient) {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure?.trim() || ''
      });
    }
  }

  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    category: drink.strCategory,
    isAlcoholic: drink.strAlcoholic === 'Alcoholic',
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    ingredients
  };
}