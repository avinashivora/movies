import Modal from "react-modal";

export default function MovieModal({ movie, isModalOpen, closeModal }) {
  return (
    <Modal
      contentLabel={movie.Title}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          <h3>&times;</h3>
        </span>
        <div className="modal-header">
          <img src={movie.Poster} alt={movie.Title}></img>
          <div className="modal-title">
            <h2>{movie.Title}</h2>
            <h4>{movie.Year}</h4>
          </div>
        </div>
        <div className="modal-body">
          <p>
            <br />
            <strong>Genre : </strong> {movie.Genre}
            <br />
            <strong>Duration of the Movie : </strong> {movie.Runtime}
            <br />
            <strong>Release Date of the Movie : </strong> {movie.Released}
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
    </Modal>
  );
}
