import React, { useState, useEffect } from "react";
import Filter from "../Filter/Filter";
import Search from "../Search/Search";
import MovieItem from "../MovieItem/MovieItem";
import { movieService } from "../service";
import Spinner from "react-bootstrap/Spinner";

import "./Movies.css";

const Movies = () => {
  const [movieKeyWord, setMovieKeyword] = useState("");
  const [plotLength, setPlotLength] = useState("short");
  const [loading, setLoading] = useState(false);

  const [movieList, setMovieList] = useState([]);
  const [movieCollectionList, setMovieCollectionList] = useState();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (movieKeyWord) {
          const movieListResponse = await movieService.getMovieByTitle(
            movieKeyWord,
            plotLength
          );
          setLoading(false);
          // console.info('[API Called]', movieListResponse);
          if (movieListResponse?.data?.Search?.length) {
            setMovieList(movieListResponse?.data?.Search.splice(0, 5));
          } else {
            setMovieList([]);
            setMovieCollectionList([]);
          }
        }
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    })();
  }, [movieKeyWord, plotLength]);

  useEffect(() => {
    try {
      if (movieList) {
        // console.log("[Movie List]", movieList)
        (async () => {
          let movieCollection = await Promise.all(
            movieList.map(async (i) => {
              setLoading(true);
              let movie = await movieService.getMovieDetails(
                i.imdbID,
                plotLength
              );
              return {
                movie,
              };
            })
          );
          setMovieCollectionList(movieCollection);
          setLoading(false);
        })();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [movieList, plotLength]);

  return (
    <div>
      <Search setMovieKeyword={setMovieKeyword} />
      <Filter setPlotLength={setPlotLength} plotLength={plotLength} />
      {movieKeyWord && !loading && (
        <>
          <h6>You Searched for : {movieKeyWord}</h6>
          {movieCollectionList?.length > 0 ? (
            <>
              {" "}
              <div role="list">
                {movieCollectionList.map((item) => {
                  return (
                    <MovieItem
                      movie={item?.movie?.data}
                      key={item?.movie?.data?.imdbID}
                    />
                  );
                })}{" "}
              </div>{" "}
            </>
          ) : (
            <p>No records found</p>
          )}
        </>
      )}
      {loading && <Spinner animation="border" variant="success" />}
    </div>
  );
};

export default Movies;
