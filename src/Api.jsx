import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fa34ec30a85c018cca698bd41e5f71aa';

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        query: query,
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
