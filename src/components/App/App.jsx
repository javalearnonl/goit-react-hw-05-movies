import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SiteBar from 'components/SiteBar';
import Reviews from 'components/Reviews';
import Casts from 'components/Casts';
import css from './App.module.css';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<SiteBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
