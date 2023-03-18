import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Plot from "../Plot/Plot";
import "./MovieDetails.css";

function MoviesDetailsModal(props) {
  const { movie, onHide, show } = props;
  const actorsList = movie?.Actors.split(", ");
  const genreList = movie?.Genre.split(", ");
  const writerList = movie?.Writer.split(", ");
  const directorList = movie?.Director.split(", ");
  return (
    <Modal {...props} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {movie?.Title} ({movie?.Released})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={4}>
              <img src={movie?.Poster} className="movie-poster" />
            </Col>
            <Col xs={12} md={12} lg={8}>
              <div className="movie-description">
                <b>Plot: </b>
                <Plot content={movie?.Plot} limit={200} />
                <hr></hr>
                <div className="movie-detail-list">
                  <div>
                    <ul>
                      <b>Actors:</b>
                      {actorsList?.map((actor, index) => {
                        return <li key={index}>{actor}</li>;
                      })}
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <b>Genre:</b>
                      {genreList?.map((genre, index) => {
                        return <li key={index}>{genre}</li>;
                      })}
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <b>Director: </b>
                      {directorList?.map((director, index) => {
                        return <li key={index}>{director}</li>;
                      })}
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <b>Writer: </b>
                      {writerList?.map((writer, index) => {
                        return <li key={index}>{writer}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="movie-detail-list text-muted">
              <div>
                <b>Type:</b>
                {movie?.Type}
              </div>
              <div>
                <b>Year:</b>
                {movie?.Year}
              </div>
              <div>
                <b>Awards:</b>
                {movie?.Awards}
              </div>
            </div>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
export default MoviesDetailsModal;
