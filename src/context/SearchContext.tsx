import React, { createContext, useContext, useState, useCallback } from 'react';
import type { SearchFilters } from '../types/cocktail';

interface SearchContextType {
  searchQuery: string;
  filters: SearchFilters;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: SearchFilters) => void;
  isSearchOpen: boolean;
  toggleSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(prev => !prev);
  }, []);

  return (
    <SearchContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery, 
        filters, 
        setFilters,
        isSearchOpen,
        toggleSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}