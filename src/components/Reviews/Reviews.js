export default function Reviews({MovieReviews}) {  
    if (MovieReviews.length === 0) { return <h1>We don`t have any reviews for this movie.</h1> }
    return (
        <ul>
            {MovieReviews.map(({ author, content, id }) => {
                return (
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>                    
                );
            })}
        </ul>        
    );
};