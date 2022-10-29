import { useState, useEffect } from 'react';

import { fetchPopular } from 'components/helpres/popular';
import MovieList from 'components/MovieSearch/MovieList';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const result = await fetchPopular();

      setFilms(result);
    };

    getFilms();
  }, []);

  return (
    <>
      <h1>Trending this week</h1>
      <MovieList films={films} />
    </>
  );
}
