import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <div>


      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title.length > 15 ? `${movie.title.slice(0, 15)}...` : movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
