import Modal from "react-modal";

export default function MovieModal({ movie, isModalOpen, closeModal }) {
  return (
    <Modal
      contentLabel={movie.Title}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
    >
      <div>
        <span onClick={closeModal}>&times;</span>
        <div>
          <img src={movie.Poster} alt={movie.Title}></img>
          <div>
            <h2>{movie.Title}</h2>
            <p>
              {movie.Released}
              <br />
              <strong>Genre : </strong> {movie.Genre}
              <br />
              <strong>Duration of the Movie : </strong> {movie.Runtime}
              <br />
              <strong>imDb Rating : </strong> {movie.imdbRating}
              <br />
              <strong>Movie Plot : </strong> {movie.Plot}
              <br />
              <strong>Actors : </strong> {movie.Actors}
              <br />
              <strong>Writer : </strong> {movie.Writer}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
