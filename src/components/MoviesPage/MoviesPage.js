import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import FetchAPI from '../../servise/FetchAPI';

function MoviesPage() {
    const [query, setQuery] = useState("");
    const [searchFilms, setSearchFilms] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event) => {
        setQuery(event.currentTarget.value.toLowerCase());        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query.trim() === "") {
            alert("Введите запрос фильма")
            return
        }
        navigate(`?query=${query}`);       
        resetForm();
    };

    const resetForm = () => {
        setQuery("");
    };

    const serchParams = new URLSearchParams(location.search);   
    const serchParamsName = serchParams.get('query');   

    useEffect(() => {
        if (serchParamsName === '') { return };
        FetchAPI.FetchSearchQuery(serchParamsName).then(({results}) => {
            setSearchFilms(results);
        })
    }, [serchParamsName]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={query}
                    placeholder="Search images and photos"
                />

                <button type="submit" >
                    <span >Search</span>
                </button>
            </form>
            <ul>
                {serchParamsName &&                
                    searchFilms.map(film => (
                        <li key={film.id}>
                            <Link to={`/movies/${film.id}`}>{film.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default MoviesPage