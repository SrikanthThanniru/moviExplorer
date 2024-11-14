import React, { useState } from 'react';
import { searchMovies } from '../../services/api'; 
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar';
import './Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    setError(null);
    try {
      const result = await searchMovies(query);
      setMovies(result);  // Set the fetched movie list
      localStorage.setItem('movies', JSON.stringify(result)); // Store in localStorage
    } catch (err) {
      setError('Something went wrong while fetching the movies.');
    } finally {
      setLoading(false);
    }
  };

  // Retrieve movie list from localStorage if available
  React.useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  return (
    <div className="main-home">
      <h1>Movie Explorer</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
