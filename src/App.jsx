import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { searchMovies } from './Api';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import NotFound from './components/NotFound'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
    setHasSearched(true);
  };

  return (
    <Router>
      <div className="container">
        <h1 className="my-4 text-center anton-regular">Pro_Pelis</h1>
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={handleSearch} />
                <div className="row">
                  {movies.length > 0 ? (
                    movies.map((movie) => (
                      <div className="col-md-4 mb-4" key={movie.id}>
                        <MovieCard movie={movie} />
                      </div>
                    ))
                  ) : hasSearched ? (
                    <p className="text-center">No se encontraron resultados</p>
                  ) : null}
                </div>
              </>
            }
          />

          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
