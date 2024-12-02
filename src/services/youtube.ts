const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

export interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  viewCount: string;
}

export async function searchCocktailVideo(cocktailName: string): Promise<YouTubeVideo | null> {
  try {
    const query = `how to make a ${cocktailName} cocktail`;
    const searchResponse = await fetch(
      `${YOUTUBE_API_URL}/search?part=snippet&q=${encodeURIComponent(
        query
      )}&type=video&maxResults=1&order=viewCount&key=${YOUTUBE_API_KEY}`
    );

    const searchData = await searchResponse.json();
    
    if (!searchData.items?.length) {
      return null;
    }

    const videoId = searchData.items[0].id.videoId;
    
    // Get video statistics to sort by view count
    const statsResponse = await fetch(
      `${YOUTUBE_API_URL}/videos?part=statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
    );
    
    const statsData = await statsResponse.json();

    return {
      id: videoId,
      title: searchData.items[0].snippet.title,
      thumbnail: searchData.items[0].snippet.thumbnails.high.url,
      viewCount: statsData.items[0].statistics.viewCount
    };
  } catch (error) {
    console.error('Error searching YouTube:', error);
    return null;
  }
}
