export default function Reviews({MovieReviews}) {    
    console.log(MovieReviews);

    if (MovieReviews.results.length === 0) { return <h1>We don`t have any reviews for this movie.</h1> }
    return (
        <>            
            <ul>
                {MovieReviews.results.map(({ author, content, id }) => {
                    return (
                        <>
                            <li key={id}>
                                <h3>{author}</h3>
                                <p>{content}</p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </>
    );
};