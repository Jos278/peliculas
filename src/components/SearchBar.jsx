import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('movie');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query, searchType);
    }
  };

  return (
    <div className="input-group mb-3">
      <select
        className="form-select"
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="movie">Buscar por Película</option>
        <option value="actor">Buscar por Actor</option>
      </select>
      <input
        type="text"
        className="form-control"
        placeholder="Escribe el nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
