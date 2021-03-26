import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import API from "../../utils/API";

function GardenForm() {
  //[garden, setGarden] in garden.js
  const [garden, setGarden] = useState({
    gardenName: "",
    length: "",
    width: "",
  });
// state for date range picker
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleChange = (e) => {
    const value = e.target.value;
    setGarden({
      [e.target.length]: value,
      [e.target.width]: value,
      [e.target.gardenName]: value,
    });
    console.log(value);
  };

  const handleGardenSubmit = (e) => {
    e.preventDefault();
    API.saveGarden(); //saving new Garden to db
    console.log(onsubmit);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Garden Parameters</h2>
      </div>
      <form onSubmit={handleGardenSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Add garden name..."
                name="gardenName"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <label>
                Length
                <select
                  name="length"
                  value={garden.length} //changed from state.length
                  onChange={handleChange}
                >
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </label>
            </Col>
            <Col size="12">
              <select name="width" value={garden.width} onChange={handleChange}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
                width
              </select>
            </Col>
          </Row>
          <Row>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
          </Row>
          <Row className="form-group">
            <button
              className="btn btn-success"
              type="submit"
              onSubmit={handleChange}
            >
              Submit
            </button>
          </Row>
          
        </Container>
      </form>
    </div>
  );
}

export default GardenForm;
