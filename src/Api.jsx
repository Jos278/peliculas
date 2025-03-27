import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fa34ec30a85c018cca698bd41e5f71aa';

export const searchMoviesAndActors = async (query) => {
  try {
    const [movieResponse, actorResponse] = await Promise.all([
      axios.get(`${BASE_URL}/search/movie`, {
        params: {
          query,
          api_key: API_KEY,
          language: 'es-ES',
          page: 1,
        },
      }),
      axios.get(`${BASE_URL}/search/person`, {
        params: {
          query,
          api_key: API_KEY,
          language: 'es-ES',
          page: 1,
        },
      }),
    ]);

    const moviesFromActors = actorResponse.data.results.flatMap((actor) => actor.known_for || []);
    const moviesFromSearch = movieResponse.data.results;

    const allMovies = [...moviesFromSearch, ...moviesFromActors].reduce((acc, movie) => {
      if (!acc.some((m) => m.id === movie.id)) {
        acc.push(movie);
      }
      return acc;
    }, []);

    return allMovies;
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

