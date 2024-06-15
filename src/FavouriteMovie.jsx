export default function FavouriteMovie({ movie, removeFavourite, showModal }) {
  const handleRemove = (e) => {
    e.stopPropagation();
    removeFavourite(movie);
  };

  const handleShowModal = () => {
    showModal(movie);
  };

  return (
    <li onClick={handleShowModal}>
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </div>
      <button onClick={handleRemove}>Remove Movie</button>
    </li>
  );
}
