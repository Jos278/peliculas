import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fa34ec30a85c018cca698bd41e5f71aa';

export const searchMoviesAndActors = async (query, genreId = null) => {
  try {
    const params = {
      api_key: API_KEY,
      language: 'es-ES',
      page: 1,
    };

    if (query) {
      params.query = query;
    }

    if (genreId) {
      params.with_genres = genreId;
    }

    const endpoint = query ? `${BASE_URL}/search/movie` : `${BASE_URL}/discover/movie`;
    const movieResponse = await axios.get(endpoint, { params });

    return movieResponse.data.results;
  } catch (error) {
    console.error('Error al buscar películas:', error);
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

