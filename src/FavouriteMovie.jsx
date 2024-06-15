export default function FavouriteMovie({movie}){
    return(
        <li>
            <img src={movie.Poster} alt={movie.Title} />
            <div>
                <h4>{movie.Title}</h4>
                <p>{movie.Year}</p>
            </div>
        </li>
    )
}