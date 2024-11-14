import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;  
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  try {
    if (!API_KEY) {
      throw new Error("API Key is missing. Please check your .env file.");
    }

    // Encoding the query to ensure it works correctly in the URL
    const encodedQuery = encodeURIComponent(query);

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodedQuery}`;
    console.log("Request URL: ", url);  // Log the request URL for debugging

    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);  // Log the error for debugging
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    if (!API_KEY) {
      throw new Error("API Key is missing. Please check your .env file.");
    }

    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    console.log("Request URL: ", url);  

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);  
    return null;
  }
};
