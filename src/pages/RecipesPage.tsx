import { useState, useEffect } from 'react';
import { GlassWater, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import { RecipeModal } from '../components/recipes/RecipeModal';
import type { DrinksResponse, ParsedCocktail, Drink } from '../types/api';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function RecipesPage() {
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [cocktails, setCocktails] = useState<DrinksResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<ParsedCocktail | null>(null);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.searchCocktailsByLetter(selectedLetter);
        setCocktails(data);
      } catch {
        setError('Failed to fetch cocktails. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [selectedLetter]);

  if (loading) {
    return (
      <section className="py-12 bg-primary-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary-accent" />
          <p className="mt-4 text-ui-text">Loading cocktails...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-primary-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-400">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  const parseCocktail = (drink: Drink): ParsedCocktail => ({
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    glass: drink.strGlass || 'Not specified',
    category: drink.strCategory || 'Not specified',
    isAlcoholic: drink.strAlcoholic === 'Alcoholic',
    instructions: drink.strInstructions || 'No instructions available',
    ingredients: Array.from({ length: 15 }, (_, i) => i + 1)
      .map(i => {
        const name = drink[`strIngredient${i}` as keyof Drink];
        const measure = drink[`strMeasure${i}` as keyof Drink];
        return {
          name: name?.toString() || '',
          measure: measure?.toString() || ''
        };
      })
      .filter(ing => ing.name !== '')
  });

  return (
    <>
      <section className="py-12 bg-primary-background min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-ui-text mb-8">Cocktail Recipes</h1>
          
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {alphabet.slice(0, 13).map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 w-12
                    ${selectedLetter === letter 
                      ? 'bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white' 
                      : 'bg-ui-card/30 text-ui-text hover:bg-ui-card/40'}`}
                >
                  {letter}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {alphabet.slice(13).map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 w-12
                    ${selectedLetter === letter 
                      ? 'bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white' 
                      : 'bg-ui-card/30 text-ui-text hover:bg-ui-card/40'}`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cocktails?.drinks?.map((drink) => {
              const cocktail = parseCocktail(drink);
              return (
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
              );
            })}
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
