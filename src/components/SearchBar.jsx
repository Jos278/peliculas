import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './SearchBar.css';

const MySwal = withReactContent(Swal);

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    const trimmedQuery = query.trim();
  
    if (trimmedQuery === '') {
      setQuery('');
      Swal.fire({
        icon: 'info',
        title: 'Campo vacío',
        text: 'Por favor, ingresa una película o actor.',
      });
      return;
    }
    const Simbolos = /^[^a-zA-Z0-9]+$/.test(trimmedQuery);
  
    if (Simbolos) {
      setQuery('');
      Swal.fire({
        icon: 'warning',
        title: 'Búsqueda no válida',
        text: 'No puedes buscar solo con símbolos. Intenta con un nombre válido.',
      });
      return;
    }
  
    setIsLoading(true);
    Swal.fire({
      title: 'Buscando...',
      text: 'Por favor espera mientras buscamos los resultados.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  
    try {
      await onSearch(trimmedQuery);
      Swal.close();
    } catch {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al realizar la búsqueda.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar película o actor..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch} disabled={isLoading}>
        {isLoading ? (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SearchBar;