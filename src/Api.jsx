const url = 'https://api.themoviedb.org/3/account/21874933/rated/movies?language=en-US&page=1&sort_by=created_at.asc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTM0ZWMzMGE4NWMwMThjY2E2OThiZDQxZTVmNzFhYSIsIm5iZiI6MTc0MTcyNzQxOC41NjYwMDAyLCJzdWIiOiI2N2QwYTZiYWI1ZWUwZTM5N2M2MGE3NWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wxJc6VY3elKH2uoIPVbW5oOaujJ0OK5i7cy6yJAESho'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));