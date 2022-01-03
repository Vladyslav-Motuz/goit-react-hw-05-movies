import { useParams, Link, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import FetchAPI from '../../servise/FetchAPI';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsPage() {
    const [MovieDetails, setMovieDetails] = useState(null);
    const [MovieCast, setMovieCast] = useState(null); 
    const [MovieReviews, setMovieReviews] = useState(null);

    const {movieID} = useParams();      
    
    useEffect(() => {
        FetchAPI.FetchMovieDetails(movieID).then(data => {
            setMovieDetails(data);
        })
    }, [movieID]);

    useEffect(() => {
        FetchAPI.FetchMovieCredits(movieID).then(data => {
            setMovieCast(data);
        })
    }, [movieID]);

    useEffect(() => {
        FetchAPI.FetchMovieReviews(movieID).then(data => {
            setMovieReviews(data);
        })
    }, [movieID]);

    return (
        <>
            <button>Back to Home</button>
            {MovieDetails &&
                <>
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`}
                            alt={MovieDetails.title} />
                        <div>
                            <h2>{MovieDetails.title} ({MovieDetails.release_date})</h2>
                            <p>Rating: {MovieDetails.vote_average}</p>
                            <p>Overview: {MovieDetails.overview}</p>
                            <p>Genres:</p>
                            <ul>
                                {MovieDetails.genres &&
                                    MovieDetails.genres.map(ganre =>
                                        <li key={ganre.id}>{ganre.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </>}
            <hr />
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to={`/movies/${movieID}/cast`}>Cast</Link>
                </li>
                <li>
                    <Link to={`/movies/${movieID}/reviews`}>Reviews</Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/cast" element={<Cast MovieCast={MovieCast}/>} />
                <Route path="/reviews" element={<Reviews MovieReviews={MovieReviews}/>} />
            </Routes>
        </>
    );
}