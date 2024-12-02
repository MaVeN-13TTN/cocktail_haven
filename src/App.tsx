import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/home/Hero';
import { CategoryNav } from './components/home/CategoryNav';
import { FilteredCocktails } from './components/home/FilteredCocktails';
import { SearchProvider } from './context/SearchContext';
import { SearchModal } from './components/search/SearchModal';
import { Footer } from './components/layout/Footer';
import { RecipesPage } from './pages/RecipesPage';
import { LearnPage } from './pages/LearnPage';

function App() {
  return (
    <SearchProvider>
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <CategoryNav />
              <FilteredCocktails />
            </>
          } />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/learn" element={<LearnPage />} />
        </Routes>
        <Footer />
        <SearchModal />
      </Layout>
    </SearchProvider>
  );
}

export default App;