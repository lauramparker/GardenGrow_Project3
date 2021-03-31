import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";
import CardContainer from "../../components/CardContainer";
import Table from "../../components/Table";
// import { useHistory } from "react-router-dom"; - for onsubmit
import "./Garden.css";
// import SearchForm from "../../components/SearchForm";

function Garden(props) {

  //setting state for plants table to load plants in List table
  const [plants, setPlants] = useState([]); //must be array for map to work (array of objects)

  // const [listObject, setListObject] = useState({
  //   //set as object
  //   id: "",
  //   name: "",
  //   spacing: "",
  //   harvest: "",
  //   image: "",
  // });


  //Load all plants and set to plants when Garden page renders
  useEffect(() => {
    API.getPlants()
      .then((res) => setPlants(res.data))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);


//   useEffect(() => {
//     API.getOneGarden(garden.id)
//     .then((res) => setGarden(res.data))
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
//   }, []);


// //NEW VERSION
//     useEffect((id) => {
//         API.updateGarden(id)
//         .then(res =>setGarden(res.data));
//      }, [garden.garden_data]);

  




  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h3>{props.garden.gardenName}</h3>

            <CardContainer data={props.garden.garden_data} />
          </Col>

          <Col>
            <h3>Select Plants</h3>

            <Table
              plants={plants}
              handleSelectChange={props.handleSelectChange}
            ></Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="btn" id="saveBtn" onClick={props.handleGardenSubmit}>
              Save Garden
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Garden;

