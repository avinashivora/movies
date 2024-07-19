import FavouriteMovie from "./FavouriteMovie";

export default function FavouritesList(props) {
  return (
    <div className="favourites-container">
      <h3>My Favourite Movies</h3>
      {props.favourites.length > 0 ? (
        <ul className="favourites-list">
          {props.favourites.map((movie) => (
            <FavouriteMovie
              movie={movie}
              removeFavourite={props.removeFavourite}
              showModal={props.showModal}
            />
          ))}
        </ul>
      ) : (
        <p>You have not added any favourite movies Yet!</p>
      )}
    </div>
  );
}
