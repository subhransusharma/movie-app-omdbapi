import React from "react";
import "./MovieItem.css";
import Button from "react-bootstrap/Button";
import MoviesDetailsModal from "../MovieDetails/MovieDetails";

const MovieItem = ({ movie }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        variant="light"
        onClick={() => setModalShow(true)}
        className="m-2"
      >
        <div className="movie-container">
          <div>
            <div>
              <img
                src={movie?.Poster}
                alt={movie?.Title}
                width={220}
                height={140}
              />
            </div>
            <div className="movie-name">
              <h6>{movie?.Title}</h6>
            </div>
          </div>
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
