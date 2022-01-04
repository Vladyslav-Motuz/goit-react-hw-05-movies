export default function Cast({MovieCast}) {
    console.log(MovieCast);
    if (MovieCast.cast.length === 0) { return <h1>Введите запрос изображения</h1> }
    return (
        <h3>Cast</h3>
    )
};