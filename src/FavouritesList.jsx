import FavouriteMovie from "./FavouriteMovie";

export default function FavouritesList(props) {
  return (
    <div>
      <h3>My Favourite Movies</h3>
      {props.favourites.length > 0 ? (
        <ul>
          {props.favourites.map((movie) => (
            <FavouriteMovie
              movie={movie}
              removeFavourite={props.removeFavourite}
            />
          ))}
        </ul>
      ) : (
        <p>You have not added any favourite movies Yet!</p>
      )}
    </div>
  );
}
