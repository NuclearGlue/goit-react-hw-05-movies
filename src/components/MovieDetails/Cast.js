import { fetchCast } from 'components/helpres/castRequest';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filmCast = async () => {
      const info = await fetchCast(id);
      setCast(info);
    };

    filmCast();
  });

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <h2>{actor.name}</h2>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/` + actor.profile_path
                : 'https://www.abbeysurestart.com/wp-content/uploads/2021/03/blank-profile.png'
            }
            alt={actor.name}
          />
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
