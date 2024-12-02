import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { RecipeModal } from '../recipes/RecipeModal';

interface Cocktail {
  id: string;
  name: string;
  image: string;
  rating: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: string;
  ingredients: string[];
  instructions: string[];
}

const featuredCocktails: Cocktail[] = [
  {
    id: '1',
    name: 'Old Fashioned',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80',
    rating: 4.8,
    difficulty: 'Medium',
    prepTime: '5 mins',
    ingredients: [
      '2 oz Bourbon',
      '1 Sugar cube',
      '2-3 dashes Angostura bitters',
      'Orange peel',
    ],
    instructions: [
      'Place sugar cube in glass and saturate with bitters',
      'Add a splash of water and muddle until dissolved',
      'Add bourbon and stir',
      'Add ice and stir until well-chilled',
      'Garnish with orange peel',
    ],
  },
  {
    id: '2',
    name: 'Negroni',
    image: 'https://images.unsplash.com/photo-1582452737669-e2e0a6cfd6c4?auto=format&fit=crop&q=80',
    rating: 4.6,
    difficulty: 'Easy',
    prepTime: '3 mins',
    ingredients: [
      '1 oz Gin',
      '1 oz Campari',
      '1 oz Sweet vermouth',
      'Orange peel',
    ],
    instructions: [
      'Add all ingredients to a mixing glass with ice',
      'Stir until well-chilled',
      'Strain into a rocks glass over fresh ice',
      'Garnish with an orange peel',
    ],
  },
  {
    id: '3',
    name: 'Mojito',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80',
    rating: 4.7,
    difficulty: 'Easy',
    prepTime: '7 mins',
    ingredients: [
      '2 oz White rum',
      '1 oz Fresh lime juice',
      '0.75 oz Simple syrup',
      '6-8 Fresh mint leaves',
      'Soda water',
    ],
    instructions: [
      'Gently muddle mint leaves in a shaker',
      'Add rum, fresh lime juice, and simple syrup',
      'Fill with ice and shake well',
      'Strain into a highball glass with fresh ice',
      'Top with soda water and garnish with mint sprig',
    ],
  },
];

export function FeaturedCocktails() {
  const [selectedRecipe, setSelectedRecipe] = useState<Cocktail | null>(null);

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-ui-text mb-8">Featured Cocktails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCocktails.map((cocktail) => (
              <div
                key={cocktail.id}
                className="group relative overflow-hidden rounded-xl bg-ui-card/30 backdrop-blur-sm hover:bg-ui-card/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedRecipe(cocktail)}
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
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-primary-accent fill-current" />
                      <span className="ml-2 text-ui-text">{cocktail.rating}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      cocktail.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                      cocktail.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {cocktail.difficulty}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-accent/30 rounded-xl transition-all duration-300" />
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