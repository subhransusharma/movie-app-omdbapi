import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Plot from "../Plot/Plot";
import { movieService } from "../service";
import "./Featured.css";
import {
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";

const predefinedMovies = [
  {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Batman",
    Year: "2022",
    imdbID: "tt1877830",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
  },
];

const directionButtons = (direction) => {
  if (direction === "Next") {
    return (
      <div className="next-icon">
        <ArrowRightCircleFill color="black" size={30} />
      </div>
    );
  }
  if (direction === "Previous") {
    return (
      <div className="prev-icon">
        <ArrowLeftCircleFill color="black" size={30} />
      </div>
    );
  }
};

const Featured = () => {
  const [movieCollectionList, setMovieCollectionList] = useState();

  useEffect(() => {
    (async () => {
      let movieFeatureListCollection = await Promise.all(
        predefinedMovies.map(async (i) => {
          return {
            movie: await movieService.getMovieDetails(i.imdbID),
          };
        })
      );
      setMovieCollectionList(movieFeatureListCollection);
    })();
  }, []);

  return (
    <Container fluid className="carousel-container">
      <h3>Featured Collection:</h3>
      <Carousel
        variant="light"
        indicators={false}
        nextIcon={directionButtons("Next")}
        prevIcon={directionButtons("Previous")}
      >
        {movieCollectionList?.map((movieCollection) => {
          return (
            <Carousel.Item key={movieCollection.movie.data.Poster}>
              <div className="">
                <div className="carousel-poster">
                  <img
                    height={200}
                    width={300}
                    src={movieCollection.movie.data.Poster}
                    alt={movieCollection.movie.data.alt}
                  />
                </div>
                <div className="carousel-description">
                  <h4>{movieCollection.movie.data.Title}</h4>
                  <p>
                    <b>Year: </b>
                    {movieCollection.movie.data.Year}
                  </p>
                  <Plot content={movieCollection.movie.data.Plot} limit={20} />
                  <p>
                    <b>Awards: </b>
                    {movieCollection.movie.data.Awards}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Featured;
