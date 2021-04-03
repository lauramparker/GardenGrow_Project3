import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GardenContext } from "../../Providers/GardenProvider";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";
import CardContainer from "../../components/CardContainer";
import Table from "../../components/Table";
import "./Garden.css";



function Garden() {   //{children}??

  //setting state for plants table to load plants in List table

  const [plants, setPlants] = useState([]);

  const { garden, handleSave } = useContext(GardenContext);



  //Load all plants and set to plants when Garden page renders
  useEffect(() => {
    API.getPlants()
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }, []);



  // send user to api/garden/:id after Garden state updates
  useEffect(() => {
    const id = garden.id
    // if (garden.id !==0) {
    //   window.location.assign("/Garden/" + id);
    // }
  }, [garden.id]);


   
//delete this....
  // function handleGardenSubmit(event) { 
  //   event.preventDefault();
  //   useHistory.push("/MyGarden");  //reroute to MyGarden page
  // };


  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h3>{garden.gardenName}</h3>

            <CardContainer data={garden.garden_data} />
          </Col>

          <Col>
            <h3>Select Plants</h3>

            <Table
              plants={plants}
            ></Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="btn" id="saveBtn" onClick={handleSave}>
              Save Garden
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Garden;
