import { lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";


const Home = lazy(() =>
  import('./Home/Home' )
);
const SearchFilm = lazy(() =>
  import('./MovieSearch/SearchFilm' )
);
const MovieDetails = lazy(() =>
  import(
    './MovieDetails/MovieDetails' )
);
const Cast = lazy(() =>
  import('./MovieDetails/Cast' )
);
const Reviews = lazy(() =>
  import('./MovieDetails/Reviews')
);
const NotFound = lazy(() => import('./Home/NotFound'))

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to='/' style={{ margin: '15px' }}>Home</NavLink>
        <NavLink to='/movies'>Search for more</NavLink>
      </nav>
<Suspense>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<SearchFilm />} />
        <Route path="/movies/:id" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Routes >
        </Suspense>
    </div>
  );
};
