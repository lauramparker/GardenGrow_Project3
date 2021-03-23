import React, { useState } from "react";
import {Col, Row, Container} from "react-bootstrap";

function GardenForm() {
    const [state, setState] = useState({
      gardenName: " ",
      length: " ",
      width: " "
  });

  const handleChange = (e) => {

    const value = e.target.type === e.target.value
    setState({ state, [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(onsubmit)

  };


    return (
        <div>
          <div className="mt-4">
            <h2>Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit}>
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
                  <select
                    name="length"
                    value={state.length}
                    onChange={handleChange}
                  >
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                </Col>
              </Row>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </Container>
          </form>
        </div>
      );
    }
  
 

export default GardenForm;



