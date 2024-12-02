# 🍸 Cocktail Haven

Cocktail Haven is a comprehensive web platform for cocktail enthusiasts to explore, discover, and learn about cocktail recipes.

## 🌟 Project Overview
Cocktail Haven is designed to provide users with an engaging experience to explore cocktail recipes, learn mixology techniques, and discover new drink-making skills.

## ✨ Features
- **Home Page**: Features a hero section with a "Start Mixing" button that navigates to the Recipes page.
- **Recipes Page**: Includes alphabet-based filtering, cocktail card display, and RecipeModal integration with loading and error states.
- **Learn Page**: Provides mixology education sections with four main learning categories, a responsive design, and interactive UI elements.
- **Navigation**: Updated header and footer with links to Recipes and Learn pages, consistent styling across navigation components.

## 🛠️ Technical Stack
- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router

## 🔗 API Integrations
- **TheCocktailDB API**: For cocktail recipes
- **YouTube API**: For cocktail tutorial videos (Requires `VITE_YOUTUBE_API_KEY` in the `.env` file)

## ⚙️ Environment Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the project root and add your YouTube API key:
   ```
   VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
   ```
4. Run `npm run dev` to start the development server.

## 🗂️ Project Structure
```
src/
├── components/
│   ├── home/
│   ├── layout/
│   ├── learn/
│   └── recipes/
├── pages/
│   ├── HomePage.tsx
│   ├── RecipesPage.tsx
│   └── LearnPage.tsx
├── services/
│   ├── api.ts
│   └── youtube.ts
└── types/
    └── api.ts
```

## 📝 Development Notes
- Modular component design
- Separation of concerns
- Consistent styling approach
- Emphasis on user learning and discovery

## 🚀 Upcoming Improvements
- User authentication
- Favorites/saved recipes feature
- Enhanced recipe detail views
- Expanded learning resources

## 📜 License
This project is licensed under the MIT License.
