export default function Cast({MovieCast}) {
    console.log(MovieCast);
    if (MovieCast.length === 0) { return <h1>Введите запрос изображения</h1> }
    return (        
        <ul>
            {MovieCast.map(({ name, profile_path, id }) => {
                return (
                    <li key={id}>
                        <h3>{name}</h3>
                        <div>
                            <img
                                width={100}
                                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                                alt={name} />
                        </div>                        
                    </li>
                );
            })}
        </ul>
    )
};