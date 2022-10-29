import axios from 'axios';

export const fetchReviews = async filmId => {
  const keyApi = '118505e52235e41031409ce523bcee9b';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${filmId}/reviews`;

  const reviews = await axios
    .get(``, {
      params: {
        api_key: keyApi,
        page: 1,
      },
    })
    .then(result => {
      console.log(result.data.results);
      return result.data.results;
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.statusText);
        console.log(err.message);
        console.log(err.response.headers);
        console.log(err.response.data);
      }
    });

  return reviews;
};
