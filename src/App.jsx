import React, { useState } from 'react';

import { searchMovies } from './Api';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <h1>Buscador de Películas</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
};

export default App;