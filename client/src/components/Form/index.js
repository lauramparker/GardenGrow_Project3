import React, { useState, useEffect, useContext } from "react";
import { GardenContext } from "../../Providers/GardenProvider";
import { Col, Row, Container } from "react-bootstrap";
// import { DateRange } from "react-date-range";
// import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
import "./style.css";

const Form = ({ children }) => {
  // state for date range pickr // component needs as []
  // const [dateRange, setDateRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   }
  // ]);

  // hooks
  const { user } = useAuth0();

  const { garden, setGarden } = useContext(GardenContext);

  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [gardenData, setGardenData] = useState(null);

  //CREATE POST A new Garden w Name, Length, Width, Date
  const handleSubmit = (e) => {
    console.log("Handling submit");
    e.preventDefault();

    if (!name || !width || !length) {
      console.error("Whoops! something wasn't set", name, width, length);
    }

    setGardenData({
      gardenName: name,
      width,
      length,
      dateRangeMinimum: null,
      dateRangeMaximum: null,
    });
  };

  useEffect(() => {
    if (gardenData) {
      API.saveGarden({
        userId: user.email,
        ...gardenData,
      })
        .then((res) => {
          setGarden({
            gardenName: res.data.gardenName,
            length: res.data.length,
            width: res.data.width,
            dateRangeMinimum: null,
            dateRangeMaximum: null,
            plots: [],
            id: res.data._id,
          });
        })
        .catch((err) => console.log(err));
    } //end if
  }, [gardenData]);

  return (
    <div className="form-container" style={{ height: "325px" }}>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "450",
            border: "2px solid",
            borderColor: "#73AD21",
            position: "relative",
            borderRadius: "15px",
            backgroundColor: "rgba(255, 255, 255, 0.514)",
          }}
        >
          {children}
          <div className="mt-4">
            <h3
              style={{
                textAlign: "center",
                fontFamily: "'Concert One', cursive",
                fontWeight: "400",
                fontSize: "60px",
                color: "#8C8627",
              }}
            >
              Garden Parameters
            </h3>
          </div>
          <Container style={{ width: "550" }} className="mt-3 px-5">
            <Row className="form-group">
              <Col size="6">
                Name your Garden:
                <input
                  onChange={(event) => setName(event.target.value)}
                  className="form-control"
                  type="select-one"
                  placeholder="Add garden name..."
                  name="gardenName"
                  value={name}
                />
                {children}
              </Col>
            </Row>
            <Row className="form-group">
              <Col size="6">
                <label>Length (ft)</label>
                <br></br>
                <select
                  onChange={(event) => setLength(event.target.value)}
                  className="form-control"
                  type="select-one"
                  name="length"
                  value={length}
                >
                  {children}
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </Col>
              <Col size="6">
                <label>Width (ft)</label>
                <br></br>
                <select
                  onChange={(event) => setWidth(event.target.value)}
                  className="form-control"
                  type="text"
                  name="width"
                  value={width}
                >
                  {children}
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </Col>
            </Row>
            <br></br>
            <Row className="form-group">
              <button style={{backgroundColor:"#F2B199", color:"white"}} className="btn btn-success" type="submit">
                {children}
                Submit
              </button>
            </Row>
          </Container>
        </form>
      </div>
    </div>
  );
};

export default Form;
