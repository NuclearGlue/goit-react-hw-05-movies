import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchFilms } from 'components/helpres/request';
import MovieList from './MovieList';
import Searchbar from './Searchbar';

export default function SearchFilm() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  let queueName = searchParams.get('search') ?? '';

  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (queueName) {
      getFilms(queueName);
      setSearch(queueName);
    }
    return;
  }, [queueName]);

  const getFilms = async searchQueue => {
    const result = await fetchFilms(searchQueue);
    setFilms(result);
  };

  const handleSubmit = event => {
    event.preventDefault();
    getFilms(search);
    setSearchParams({ search });
  };

  const updateQueryString = queue => {
    setSearch(queue);
  };

  return (
    <>
      <form className="Search_Form" onSubmit={handleSubmit}>
        <Searchbar value={search || ''} onChange={updateQueryString} />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>

      <MovieList films={films} state={{ from: location }} />
    </>
  );
}
