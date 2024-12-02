import type { Cocktail } from '../types/cocktail';

export const featuredCocktails: Cocktail[] = [
  {
    id: '1',
    name: 'Old Fashioned',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80',
    rating: 4.8,
    difficulty: 'Medium',
    category: 'Classics',
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
    category: 'Classics',
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
    category: 'Classics',
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