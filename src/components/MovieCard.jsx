import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      )}
    </div>
  );
};

export default MovieCard;