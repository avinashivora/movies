import FavouriteMovie from "./FavouriteMovie";

export default function FavouritesList(props){
    return(
        <div>
            <h3>My Favourite Movies</h3>
            <ul>
                {props.favourites.map(movie => (
                    <FavouriteMovie movie={movie}/>
                ))}
            </ul>
        </div>
    )
}