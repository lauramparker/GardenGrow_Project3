import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import "./style.css";

function GardenForm() {
  const { user } = useAuth0();
  const loggedInUser = localStorage.getItem("user") || "";
  let history = useHistory();


    const [garden, setGarden] = useState ({
        gardenName:"",
        length:"",
        width:"",
        plant_date: "",
        total_plots: ""
      })
    
 
  // state for date range pickr
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  

  console.log("user", user);
  if (!loggedInUser) {
    API.createUser({
      lastName: user.family_name,
      firstName: user.given_name,
      userName: user.nickname,
      email: user.email,
      profilePicture: user.picture,
    }).then((data) => {
      console.log("user created", data);
      localStorage.setItem("user", data._id);
    });
  }

  const handleChange = (e, date) => {
    const { name, value } = e.target;
    setGarden({
      ...garden,
      [name]: value,
    });
    console.log(date); // native Date object
  };


  //VERSION TWO
    const handleSubmit = (e) => {
      e.preventDefault();
      //saving new Garden to db
      history.push("/Garden");
        API.saveGarden({
          gardenName: garden.gardenName,
          length: garden.length,
          width: garden.width,
        }).then(res => setGarden({
          gardenName: res.data.gardenName,
          length: res.data.length,
          width: res.data.length,
        })
      )
      .catch((err) => console.log(err));
  };

            
  return (
    <div style={{ height: "325px" }}>
      <div>
        <form
          onSubmit={handleSubmit}
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
                  value={garden.gardenName}
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
                  value={garden.length} 
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
                  value={garden.width}
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
                setState([item.selection])
              }}
              moveRangeOnFirstSelection={false}
              ranges={state}
              date={new Date()}
              
            />
            <h1>{state.selection}</h1>
            </Row>
            <br></br>
            <Row className="form-group">
              <button
                className="btn btn-success"
                type="submit"
                // disabled={!(garden.gardenName && garden.length && garden.width)}
                onClick={handleSubmit}
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

export default withAuthenticationRequired(GardenForm, {
  onRedirecting: () => <Loading />,
});
