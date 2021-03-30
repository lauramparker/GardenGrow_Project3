import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
import API from "../../utils/API";

function GardenForm() {
  const { user } = useAuth0();
  const loggedInUser = localStorage.getItem('user') || '';
  console.log('user',JSON.parse(loggedInUser));
 

  //[garden, setGarden] in garden.js
    const [garden, setGarden] = useState ({
        name:"",
        length:"",
        width:"",
      })
    
  
  // state for date range pickr
  // const [state, setState] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);
 
  if(!loggedInUser) {
    API.createUser({
      lastName: user.family_name, 
      firstName: user.given_name,
      userName: user.nickname,
      email: user.email,
      profilePicture: user.picture
    }).then((res) => { 
      console.log('user created', res.data);
      localStorage.setItem('user', res.data._id)
    });
  }
 

  const handleChange = (e) => {
     const {name, value } = e.target;
     console.log('value', value);
     setGarden({
        ...garden,
        [name]: value,
      })
    };
    

  //VERSION TWO
    const handleSubmit = (e) => {
      e.preventDefault();
      //saving new Garden to db
        API.saveGarden({
          gardenName: garden.name,
          length: garden.length,
          width: garden.width,
        }).then(res => setGarden({
          gardenName: res.data.gardenName,
          length: res.data.length,
          width: res.data.length
        }))
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

  return (
    <div>
      <div className="mt-4">
        <h2>Garden Parameters</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
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
            <Col size="12">
              <label>
                Length
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
              </label>
            </Col>
            <Col size="12">
              <select onChange={handleChange} name="width" value={garden.width}>
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
            {/* <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            /> */}
          </Row>
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
  );
          }


export default withAuthenticationRequired(GardenForm, {
  onRedirecting: () => <Loading />,
});
