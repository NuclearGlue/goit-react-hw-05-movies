import axios from 'axios';

export const fetchFilmDetails = async filmId => {
  const keyApi = '118505e52235e41031409ce523bcee9b';
  axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${filmId}`;

  const filmDetail = await axios
    .get(``, {
      params: {
        api_key: keyApi,
      },
    })
    .then(result => {
      return result.data;
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

  return filmDetail;
};
