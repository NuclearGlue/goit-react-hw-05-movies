import axios from 'axios';

export const fetchFilms = async searchQuery => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';

  const keyApi = '118505e52235e41031409ce523bcee9b';

  const films = await axios
    .get(``, {
      params: {
        api_key: keyApi,
        page: 1,
        query: searchQuery,
      },
    })
    .then(result => {
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

  return films;
};
