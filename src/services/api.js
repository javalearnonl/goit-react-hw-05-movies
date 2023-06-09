const KEY = '8713e7dcc5f5c60ac50dd8842d8bba9d';
const getTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`
  );
};
const getMovie = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  );
};
const getCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
};
const getReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
};
const searchMovie = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};
const API = {
  getTrending,
  getMovie,
  getCast,
  getReviews,
  searchMovie,
};
export default API;
