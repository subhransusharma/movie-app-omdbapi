import React from "react";
import "./MovieItem.css";
import Button from "react-bootstrap/Button";
import MoviesDetailsModal from "../MovieDetails/MovieDetails";

const MovieItem = ({ movie }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        <div>
          <img src={movie?.Poster} className="movie-poster" alt={movie?.Title} />
        </div>
        <div className="movie-name">
          <h6>{movie?.Title}</h6>
        </div>
      </Button>

      <MoviesDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        movie={movie}
      />
    </>
  );
};

export default MovieItem;
