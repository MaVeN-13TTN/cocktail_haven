import React from 'react';
import { X, Clock, Beaker, ChefHat, GlassWater } from 'lucide-react';
import type { ParsedCocktail } from '../../types/api';

interface RecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: ParsedCocktail;
}

export function RecipeModal({ isOpen, onClose, recipe }: RecipeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
          onClick={onClose}
        />
        
        <div className="relative bg-primary-background rounded-xl max-w-3xl w-full overflow-hidden shadow-xl transform transition-all">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-ui-text hover:text-primary-accent 
                     bg-black/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative h-64">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-background to-transparent" />
          </div>

          <div className="p-6 -mt-12 relative">
            <h2 className="text-3xl font-bold text-ui-text mb-4">{recipe.name}</h2>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center px-3 py-1 rounded-full bg-ui-card/20 text-ui-text">
                <GlassWater className="h-4 w-4 mr-2 text-primary-accent" />
                <span>{recipe.glass}</span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-full bg-ui-card/20 text-ui-text">
                <ChefHat className="h-4 w-4 mr-2 text-primary-accent" />
                <span>{recipe.category}</span>
              </div>
              <div className="flex items-center px-3 py-1 rounded-full bg-ui-card/20 text-ui-text">
                {recipe.isAlcoholic ? 'Alcoholic' : 'Non-Alcoholic'}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-ui-text mb-4 flex items-center">
                  <Beaker className="h-5 w-5 mr-2 text-primary-accent" />
                  Ingredients
                </h3>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-ui-text bg-ui-card/10 p-3 rounded-lg
                               hover:bg-ui-card/20 transition-colors"
                    >
                      <img
                        src={`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient.name)}-Small.png`}
                        alt={ingredient.name}
                        className="w-8 h-8 object-cover mr-3"
                      />
                      <span className="font-medium">{ingredient.name}</span>
                      {ingredient.measure && (
                        <span className="ml-auto text-ui-text/70">{ingredient.measure}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-ui-text mb-4">Instructions</h3>
                <div className="space-y-4 text-ui-text">
                  {recipe.instructions.split('.').filter(Boolean).map((instruction, index) => (
                    <div 
                      key={index}
                      className="flex items-start bg-ui-card/10 p-4 rounded-lg
                               hover:bg-ui-card/20 transition-colors"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-accent/20 
                                     flex items-center justify-center mr-3 mt-0.5 text-primary-accent font-medium">
                        {index + 1}
                      </span>
                      <p>{instruction.trim()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}