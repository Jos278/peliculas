import React, { useState } from 'react';
import { searchMovies } from './Api';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="container">
      <h1 className="my-4">Buscador de Películas</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="col-md-4 mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
};

export default App;