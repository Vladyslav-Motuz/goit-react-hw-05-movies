import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './components/MoviesPage/MoviesPage';


function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/movies" element={<MoviesPage />} /> */}
        <Route path="/movies/:movieID/*"  element={<MovieDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
