import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file


import "./style.css";

function Form(props) {

          // state for garden form 
          const [form, setForm] = useState({
            length: "",
            width: "",
            gardenName: "",
            date:""
          });

          // state for date range pickr // component needs as []
          const [dateRange, setDateRange] = useState([
            {
              startDate: new Date(),
              endDate: null,
              key: "selection",
            }
          ]);

      //     this.state = {value: ''}; //??

      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);


  
  function  handleChange (e, date) {  //date??
        const { name, value } = e.target;
        setForm({...form, [name]: value,});
      };


      return (
        <div style={{ height: "325px" }}>
          <div>
            <form
              onSubmit={props.handleSubmit}
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
            >
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
                      value= {form.gardenName}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col size="6">
                    <label>Length</label>
                    <br></br>
                    <select
                      onChange={handleChange}
                      name="length"
                      value={form.length}  //setGarden
                    >
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
                      name="width"
                      value={form.width}
                    >
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
                    onClick={props.handleSubmit} ///
                  >
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

