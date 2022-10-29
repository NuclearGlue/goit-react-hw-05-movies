import { fetchReviews } from 'components/helpres/reviewsRequest';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const filmReviews = async () => {
      const info = await fetchReviews(id);
      setReviews(info);
    };

    filmReviews();
  });

  return (
    <ul>
      {reviews.map(elem => (
        <li key={elem.id}>
          <h2>{elem.author}</h2>
          <p>{elem.content}</p>
        </li>
      ))}
    </ul>
  );
}
