import axios from "axios";

export async function getMovieByTitle(searchValue, plotLength) {
  let response;
  try {
    response = await axios.get(
      `https://www.omdbapi.com/?s=${searchValue}&plot=${plotLength}&apiKey=6c3a2d45`
    );
    console.log(response);
    return response;
  } catch (error) {
    response = error.response;
    throw new Error("Unable to reach the server");
  }
}

export async function getMovieDetails(imdbID, plotLength) {
  let response;
  try {
    response = await axios.get(
      `http://www.omdbapi.com/?i=${imdbID}&plot=${plotLength}&apikey=6c3a2d45`
    );
    return response;
  } catch (error) {
    response = error.response;
    throw new Error("Unable to reach the server");
  }
}

export const movieService = {
  getMovieByTitle,
  getMovieDetails,
};
