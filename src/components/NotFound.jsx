import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 
import NotFoundImage from '../resources/404.png'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src={NotFoundImage} 
        alt="Página no encontrada"
        className="not-found-image"
      />
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">¡Oops! La página que buscas no existe.</p>
      <Link to="/" className="not-found-link">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;