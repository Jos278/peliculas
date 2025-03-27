import React, { useEffect, useState } from 'react';
import { getMovieCast } from '../Api';
import placeholderImage from '../resources/No_img.jpg';

const MovieCard = ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const castData = await getMovieCast(movie.id);
      setCast(castData);
    };

    fetchCast();
  }, [movie.id]);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : placeholderImage;

  return (
    <div className="card shadow-lg">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={movie.title || 'Sin título'}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderImage;
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title || 'Sin título'}</h5>
        <p className="card-text">{movie.overview || 'Descripción no disponible.'}</p>
        {cast.length > 0 && (
          <p><strong>Reparto:</strong> {cast.map(actor => actor.name).join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;