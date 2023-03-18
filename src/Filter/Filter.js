import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Filter.css";

const Filter = ({ setPlotLength, plotLength }) => {
  const filterPlot = (event) => {
    setPlotLength(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Form className="d-flex justify-content-center p-2 gx-5">
          <div>
            <Form.Label>Show Plot: </Form.Label>
          </div>
          <div>
            <Form.Check
              inline
              label="Full"
              name="full"
              type={"radio"}
              value="full"
              onChange={(e) => filterPlot(e)}
              checked={plotLength === "full"}
            />
            <Form.Check
              inline
              label="Short"
              name="short"
              value="short"
              type={"radio"}
              onChange={(e) => filterPlot(e)}
              checked={plotLength === "short"}
            />
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default Filter;
