import { fetchFilms } from 'components/helpres/request';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from './MovieList';

export default function SearchFilm() {
  const location = useLocation();

  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const getFilms = async () => {
      const result = await fetchFilms(search);
      setFilms(result);
    };

    getFilms();
  };

  const handleChange = event => {
    setSearch(event.currentTarget.value);
  };

  return (
    <>
      <form className="Search_Form" onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
      <MovieList films={films} state={{ from: location }} />
    </>
  );
}
