import axios from 'axios';

export const fetchPopular = async () => {
  const keyApi = '118505e52235e41031409ce523bcee9b';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/week';

  const popular = await axios
    .get(``, {
      params: {
        api_key: keyApi,
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

  return popular;
};

//  const returmMeStuff = async () => {
//   const result = await fetchPopular();
//   return result;
// };
