import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';

export default function MovieList({ films }) {
  const location = useLocation();

  return (
    <div>
      {films && (
        <ul>
          {films.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};
