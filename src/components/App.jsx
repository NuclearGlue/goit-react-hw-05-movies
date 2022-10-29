import { lazy, Suspense } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// const createAsyncComponent = (path) => lazy(() => import(path));
// const Home = createAsyncComponent('./Home/Home')
// const SearchFilm = createAsyncComponent('./SearchFilm/SearchFilm')
// const MovieDetails = createAsyncComponent('./MovieDetails/MovieDetails')
// const Cast = createAsyncComponent('./MovieDetails/Cast')
// const Reviews = createAsyncComponent('./MovieDetails/Reviews')

const Home = lazy(() =>
  import('./Home/Home' /* webpackChunkName: "home-page" */)
);
const SearchFilm = lazy(() =>
  import('./MovieList/SearchFilm' /* webpackChunkName: "movies-page" */)
);
const MovieDetails = lazy(() =>
  import(
    './MovieDetails/MovieDetails' /* webpackChunkName: "movie-detalis-page" */
  )
);
const Cast = lazy(() =>
  import('./MovieDetails/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('./MovieDetails/Reviews' /* webpackChunkName: "reviews" */)
);

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
        <Route path="/movies/:id/*" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
       </Route>
        </Routes >
        </Suspense>
    </div>
  );
};
