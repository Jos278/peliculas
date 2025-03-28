import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { searchMoviesAndActors } from './Api';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NoEncontrar from './resources/No_encontrar.png';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query, genreId) => {
    const results = await searchMoviesAndActors(query, genreId);
    setMovies(results);
    setHasSearched(true);
  };

  return (
    <Router>
      <div className="container">
        <h1 className="my-4 text-center anton-regular">Pro_Pelis</h1>
        <Routes>
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
                    <div className="text-center">
                      <img
                        src={NoEncontrar}
                        alt="No encontrado"
                        className="img-fluid"
                        style={{ maxWidth: '400px', marginBottom: '10px' }} 
                      />
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000'}}>Lo sentimos, no encontramos ninguna película</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#000'}}>Intenta buscar algo más</p>
                    </div>
                  ) : null}
                </div>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;