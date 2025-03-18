const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'fa34ec30a85c018cca698bd41e5f71aa'; 

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM0ZWMzMGE4NWMwMThjY2E2OThiZDQxZTVmNzFhYSIsIm5iZiI6MTc0MTcyNzQxOC41NjYwMDAyLCJzdWIiOiI2N2QwYTZiYWI1ZWUwZTM5N2M2MGE3NWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wxJc6VY3elKH2uoIPVbW5oOaujJ0OK5i7cy6yJAESho',
  },
};

export const searchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error al buscar películas');
    }
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error(error);
    return [];
  }
};