// import { Suspense, lazy  } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';

// const AppBar = lazy(() => import('./components/AppBar/AppBar' /* webpackChunkName: "AppBar" */));
// const HomePage = lazy(() => import('./components/HomePage/HomePage' /* webpackChunkName: "HomePage" */));
// const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */));
// const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */));

function App() {
  return (
    <>
      <AppBar />
      {/* <Suspense fallback={<h1>Loading... ...</h1>}> */}
        <Routes>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieID/*" element={<MovieDetailsPage />} />
        </Routes>        
      {/* </Suspense> */}
    </>
  );
}

export default App;
