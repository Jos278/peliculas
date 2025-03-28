import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import './SearchBar.css';

const MySwal = withReactContent(Swal);

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      const trimmedQuery = query.trim();
      if (trimmedQuery === '') return;
      
      setIsLoading(true);
      try {
        await onSearch(trimmedQuery);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al realizar la búsqueda.',
        });
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchResults();
    }, 500); // Agrega un retraso para evitar demasiadas peticiones

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar película o actor..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isLoading && (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

