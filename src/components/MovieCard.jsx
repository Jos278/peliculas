import React from 'react';

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
  : 'https://dummyimage.com/200x300/cccccc/ffffff.png&text=No+Image';


  const description = movie.overview && movie.overview.trim() !== ''
    ? movie.overview
    : 'Descripción no disponible.';

   

  return (
    <div className="card shadow-lg ">
      <img
        src={imageUrl}
        className="card"
        alt={movie.title || 'Sin título'}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/200x300.png?text=No+Image';
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title || 'Sin título'}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;