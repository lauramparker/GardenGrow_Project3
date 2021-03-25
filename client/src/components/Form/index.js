import React, { useState } from "react";
import {Col, Row, Container} from "react-bootstrap";
import API from "../../utils/API";

function GardenForm() {
  //[garden, setGarden] in garden.js
    const [garden, setGarden] = useState({
      gardenName: "",
      length: "",
      width: ""
  });

  const handleChange = (e) => {

    const value = e.target.type === e.target.value
    setGarden({ garden, [e.target.name]: value,
    
    });
  };

  const handleGardenSubmit = (e) => {
    e.preventDefault();
    API.saveGarden();  //saving new Garden to db
    console.log(onsubmit)

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
                {/* <Col size="12">
                  <select
                    name="width"
                    value={garden.width}
                    onChange={handleChange}
                  >
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                </Col> */}
              </Row>
              <Row className="form-group">

              </Row>
              <button className="btn btn-success" type="submit"onSubmit={handleChange}>
                Submit
              </button>
            </Container>
          </form>
        </div>
      );
    }
  
 

export default GardenForm;



