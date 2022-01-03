// список самых популярных фильмов на сегодня для создания коллекции на главной странице.
function FetchTrendingDay() {
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=0f7071e202153419eb1f1c3088d789f4`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(
                new Error(`Error`)
            );
        })
};

// поиск кинофильма по ключевому слову на странице фильмов.
function FetchSearchQuery(searchQuery) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=0f7071e202153419eb1f1c3088d789f4&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(
                new Error(`Error`)
            );
        });
};
// запрос полной информации о фильме для страницы кинофильма.
function FetchMovieDetails(movie_id) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=0f7071e202153419eb1f1c3088d789f4&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(
                new Error(`Error`)
            );
        });
};

// запрос информации о актёрском составе для страницы кинофильма.
function FetchMovieCredits(movie_id) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=0f7071e202153419eb1f1c3088d789f4&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(
                new Error(`Error`)
            );
        });
};

// запрос обзоров для страницы кинофильма.
function FetchMovieReviews(movie_id) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=0f7071e202153419eb1f1c3088d789f4&language=en-US&page=1`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return Promise.reject(
                new Error(`Error`)
            );
        });
};

const api = {
    FetchTrendingDay,
    FetchMovieDetails,
    FetchMovieCredits,
    FetchMovieReviews,
};
export default api;