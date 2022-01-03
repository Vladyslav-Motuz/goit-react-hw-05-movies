import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import FetchAPI from '../../servise/FetchAPI';
const HomePage = () => {
    const [data, setData] = useState(null);    
    useEffect(() => {
        FetchAPI.FetchTrendingDay().then(data => {            
            setData([...data.results]);
        })
    }, []);    
    return (
        <>
            <h1>Films TrendingDay</h1>
            <ul>
                {data && data.map(film => (
                    <li key={film.id}>
                        <Link to={`/movies/${film.id}`}>{film.title}</Link>
                    </li>
                ))}
            </ul>
      
        </>
    );
};

export default HomePage;