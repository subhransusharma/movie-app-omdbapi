import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Movies from "./Movies";
import { movieService } from "../service";
import { act } from "react-dom/test-utils";

xtest("should show no records found when no results are retrieved", async function () {
  jest.spyOn(movieService, "getMovieDetails").mockImplementation(() =>
    Promise.resolve({
      Title: "Batman Returns",
      Year: "1992",
      Rated: "PG-13",
      Released: "19 Jun 1992",
      Runtime: "126 min",
      Genre: "Action, Crime, Fantasy",
      Director: "Tim Burton",
      Writer: "Bob Kane, Daniel Waters, Sam Hamm",
      Actors: "Michael Keaton, Danny DeVito, Michelle Pfeiffer",
      Plot: "While Batman deals with a deformed man calling himself the Penguin wreaking havoc across Gotham with the help of a cruel businessman, a female employee of the latter becomes the Catwoman with her own vendetta.",
      Language: "English",
      Country: "United States, United Kingdom",
      Awards: "Nominated for 2 Oscars. 2 wins & 29 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "7.1/10",
        },
        {
          Source: "Rotten Tomatoes",
          Value: "81%",
        },
        {
          Source: "Metacritic",
          Value: "68/100",
        },
      ],
      Metascore: "68",
      imdbRating: "7.1",
      imdbVotes: "310,598",
      imdbID: "tt0103776",
      Type: "movie",
      DVD: "22 Aug 1997",
      BoxOffice: "$162,924,631",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    })
  );

  jest.spyOn(movieService, "getMovieByTitle").mockImplementation(() =>
    Promise.resolve({
      Search: [
        {
          Title: "Batman Begins",
          Year: "2005",
          imdbID: "tt0372784",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          Title: "Batman v Superman: Dawn of Justice",
          Year: "2016",
          imdbID: "tt2975590",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
          Title: "The Batman",
          Year: "2022",
          imdbID: "tt1877830",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
        },
        {
          Title: "Batman",
          Year: "1989",
          imdbID: "tt0096895",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg",
        },
        {
          Title: "Batman Returns",
          Year: "1992",
          imdbID: "tt0103776",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
        },
        {
          Title: "Batman & Robin",
          Year: "1997",
          imdbID: "tt0118688",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
        },
        {
          Title: "Batman Forever",
          Year: "1995",
          imdbID: "tt0112462",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        },
        {
          Title: "The Lego Batman Movie",
          Year: "2017",
          imdbID: "tt4116284",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
        },
        {
          Title: "Batman: The Animated Series",
          Year: "1992–1995",
          imdbID: "tt0103359",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
        },
        {
          Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
          Year: "2016",
          imdbID: "tt18689424",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
        },
      ],
      totalResults: "526",
      Response: "True",
    })
  );

  await act(async () => {
    render(<Movies />);
  });

  await act(async () => {
    userEvent.type(screen.getByRole("textbox"), "Batman");
    userEvent.click(screen.getByText("Search"));
  });

  await waitFor(() => {
    screen.getByRole("list");
  });

  screen.debug();

  expect(screen.getByText("No records found")).toBeInTheDocument();
});

test("should show no records found when no results are retrieved", async function () {
  jest
    .spyOn(movieService, "getMovieByTitle")
    .mockImplementation(() =>
      Promise.resolve({ Response: "False", Error: "Too many results." })
    );
  await act(async () => {
    render(<Movies />);
  });

  await act(async () => {
    userEvent.type(screen.getByRole("textbox"), "Batman");
    userEvent.click(screen.getByText("Search"));
  });
  // await userEvent.keyboard('Batman');
  screen.debug();

  expect(screen.getByText("No records found")).toBeInTheDocument();
});
