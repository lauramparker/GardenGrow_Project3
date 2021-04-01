import React, { useState, useContext } from "react";
import { GardenContext } from "../../Providers/GardenProvider";
import { Col, Row, Container } from "react-bootstrap";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./style.css";

const Form = ({ children }) => {


  // state for date range pickr // component needs as []
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    }
  ]);


 
  const { handleChange, handleSubmit, garden } = useContext(GardenContext); 



      return (
        <div style={{ height: "325px" }}>
          <div>
            <form
              onSubmit={handleChange}
              style={{
                width: "750",
                border: "2px solid",
                borderColor: "#73AD21",
                position: "absolute",
                top: "50%",
                left: "35%",
                transform: "translate(-25%, -25%)",
                borderRadius:"15px"
              }}
            >{children}
              <div className="mt-4" style={{ textAlign: "center" }}>
                <h3>Garden Parameters</h3>
              </div>
              <Container style={{ width: "550" }} className="mt-3 px-5">
                <Row className="form-group">
                  <Col size="6">
                    <input
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      placeholder="Add garden name..."
                      name="gardenName"
                      value= {garden.gardenName}
                    />{children}
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col size="6">
                    <label>Length</label>
                    <br></br>
                    <select
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="length"
                      value={garden.length || ""}  
                    >{children}
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                      <option value="10">10</option>
                    </select>
                  </Col>
                  <Col size="6">
                    <label>Width</label>
                    <br></br>
                    <select
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      name="width"
                      value={garden.width}
                    >{children}
                      <option value="2">2</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                      <option value="10">10</option>
                    </select>
                  </Col>
                </Row>
                <Row>
                  <DateRange
                  editableDateInputs={true}
                  onChange={(item) => {  console.log(item); 
                    setDateRange([item.selection])
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  date={new Date()}
                  
                />
                <h1>{dateRange.selection}</h1>
                </Row>
                <br></br>
                <Row className="form-group">
                  <button
                    className="btn btn-success"
                    type="submit"
                    onSubmit={handleChange}
                    onClick={handleSubmit} 
                  >{children}
                    Submit
                  </button>
                </Row>
              </Container>
            </form>
          </div>
        </div>
      );
    }

export default Form;

