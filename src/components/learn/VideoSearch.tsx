import { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { searchCocktailVideo, YouTubeVideo } from '../../services/youtube';

interface VideoSearchProps {
  onVideoFound: (video: YouTubeVideo) => void;
}

type ErrorType = {
  message: string;
  details?: string;
};

export function VideoSearch({ onVideoFound }: VideoSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearch = searchTerm.trim();
    
    if (!trimmedSearch) {
      setError({
        message: 'Please enter a cocktail name',
        details: 'The search field cannot be empty'
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const video = await searchCocktailVideo(trimmedSearch);
      if (video) {
        onVideoFound(video);
        setError(null);
      } else {
        setError({
          message: 'No video found',
          details: `We couldn't find any tutorial videos for "${trimmedSearch}". Try another cocktail name.`
        });
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError({
        message: 'Search failed',
        details: `Failed to search for video: ${errorMessage}. Please check your internet connection and try again.`
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (error) setError(null);
          }}
          placeholder="Search for a cocktail tutorial..."
          className="w-full px-4 py-3 bg-ui-card/30 text-ui-text rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-primary-accent/50
                   placeholder-ui-text/50"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2
                   text-ui-text hover:text-primary-accent transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </button>
      </form>
      {error && (
        <div className="mt-2 text-red-400">
          <p className="font-semibold">{error.message}</p>
          {error.details && (
            <p className="text-sm mt-1 text-red-400/80">{error.details}</p>
          )}
        </div>
      )}
    </div>
  );
}
