import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Search.css";

const Search = ({ setMovieKeyword }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchMovies = async (e) => {
    setMovieKeyword(searchValue);
    setSearchValue("");
  };

  return (
    <Container>
      <Row>
        <Form className="d-flex justify-content-center p-2">
          <div className="pe-2">
            <Form.Label>Search: </Form.Label>
          </div>
          <InputGroup className="pe-2">
            <Form.Control
              aria-label="Text input with dropdown button"
              onChange={handleOnChangeInput}
              value={searchValue}
              placeholder="Search movies..."
            />
          </InputGroup>
          <Button
            variant="outline-success"
            onClick={handleSearchMovies}
            disabled={!searchValue.length}
          >
            Search
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Search;
