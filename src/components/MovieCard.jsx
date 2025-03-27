import React, { useEffect, useState } from 'react';
import { getMovieCast } from '../Api';
import Noimage from '../resources/No_img.jpg';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const castData = await getMovieCast(movie.id);
      setCast(castData);
    };

    fetchCast();
  }, [movie.id]);

  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : Noimage;

  return (
    <div className="card movie-card shadow-lg">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={movie.title || 'Sin título'}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = Noimage;
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title || 'Sin título'}</h5>
        <p className="card-text">{movie.overview || 'Descripción no disponible.'}</p>
        <p>
          <strong>Reparto: </strong>
          {cast.length > 0 ? cast.map((actor) => actor.name).join(', ') : 'No disponible.'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;