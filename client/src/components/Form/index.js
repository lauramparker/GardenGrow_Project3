import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading";
// import { DateRange,} from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
import API from "../../utils/API";
import { useHistory } from "react-router-dom";
import "./style.css";

function GardenForm() {
  const { user } = useAuth0();
  const loggedInUser = localStorage.getItem("user") || "";
  let history = useHistory();

  //[garden, setGarden] in garden.js
  const [garden, setGarden] = useState({
    gardenName: "",
    length: "",
    width: "",
  });

  // state for date range pickr
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);

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
    })
      .then((res) =>
        setGarden({
          gardenName: res.data.gardenName,
          length: res.data.length,
          width: res.data.length,
        })
      )
      .catch((err) => console.log(err));
  };

  // VERSION ONE TO TEST
  // const handleSubmit = (e) => {
  //   alert(this.state.value);
  //   e.preventDefault();

  //     API.saveGarden({
  //       gardenName: garden.name,
  //       length: garden.length,
  //       width: garden.width
  //     }).then (() => setGarden({
  //       gardenName:"",
  //       length:"",
  //       width:""
  //     }))
  //     .catch((err) => console.log(err));
  //    //saving new Garden to db
  //   console.log(onsubmit);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //     API.saveGarden({
  //       gardenName: garden.name,
  //       length: garden.length,
  //       width: garden.width
  //     }).then (res => setGarden({
  //       gardenName: res.data.gardenName,
  //       length: res.data.legth,
  //       width: res.data.width
  //     }))
  //     .catch((err) => console.log(err));
  //    //saving new Garden to db

  // };

  return (
    <div style={{ height: "325px" }}>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "550px",
            border: "2px solid",
            borderColor: "#73AD21",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius:"15px"
          }}
        >
          <div className="mt-4" style={{ textAlign: "center" }}>
            <h3>Garden Parameters</h3>
          </div>
          <Container style={{ width: "550px" }} className="mt-3 px-5">
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
                  value={garden.length} //changed from state.length
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
              {/* <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              date={new Date()}
              
            /> */}
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
