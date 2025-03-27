import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fa34ec30a85c018cca698bd41e5f71aa';

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        query,
        api_key: API_KEY,
        language: 'es-ES',
        page: 1,
      },
    });
    return data.results;
  } catch (error) {
    console.error('Error al buscar películas:', error);
    return [];
  }
};

export const searchMoviesByActor = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/person`, {
      params: {
        query,
        api_key: API_KEY,
        language: 'es-ES',
        page: 1,
      },
    });

    if (data.results.length > 0) {
      return data.results[0].known_for || [];
    }

    return [];
  } catch (error) {
    console.error('Error al buscar películas por actor:', error);
    return [];
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'es-ES',
      },
    });

    return data.cast.slice(0, 5);
  } catch (error) {
    console.error(`Error al obtener el reparto de la película ${movieId}:`, error);
    return [];
  }
};

