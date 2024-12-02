import React, { useEffect, useRef } from 'react';
import { X, SlidersHorizontal, Search as SearchIcon } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { SearchFilters } from './SearchFilters';
import { SearchResults } from './SearchResults';

export function SearchModal() {
  const { isSearchOpen, toggleSearch, searchQuery, setSearchQuery } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm">
      <div className="min-h-screen px-4 flex flex-col">
        <div className="relative max-w-3xl w-full mx-auto mt-20">
          <div className="bg-primary-background rounded-t-xl p-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-ui-text/50" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search cocktails..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-ui-card/20 text-ui-text rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-primary-accent/50"
              />
              <button
                onClick={toggleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-text/50 
                          hover:text-primary-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="bg-primary-background/95 border-t border-ui-card/20">
            <div className="p-4 flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-primary-accent" />
              <span className="text-ui-text font-medium">Filters</span>
            </div>
            <SearchFilters />
          </div>

          <div className="bg-primary-background rounded-b-xl">
            <SearchResults />
          </div>
        </div>
      </div>
    </div>
  );
}