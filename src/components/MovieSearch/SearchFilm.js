import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchFilms } from 'components/helpres/request';
import MovieList from './MovieList';
import Searchbar from './Searchbar';

export default function SearchFilm() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  let queueName = searchParams.get('queue') ?? '';

  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (queueName !== '') {
      getFilms();
    }
  }, []);

  const getFilms = async () => {
    const result = await fetchFilms(queueName);
    setFilms(result);
  };

  const handleSubmit = event => {
    event.preventDefault();
    getFilms();
  };

  const updateQueryString = queue => {
    const nextParams = queue !== '' ? { queue } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <form className="Search_Form" onSubmit={handleSubmit}>
        <Searchbar value={queueName} onChange={updateQueryString} />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
      <MovieList films={films} state={{ from: location }} />
    </>
  );
}
