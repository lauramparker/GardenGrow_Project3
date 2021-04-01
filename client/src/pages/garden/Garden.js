import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GardenContext } from "../../Providers/GardenProvider";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";
import CardContainer from "../../components/CardContainer";
import Loading from "../../components/Loading";
import Table from "../../components/Table";
import "./Garden.css";



function Garden() {   //{children}??

  //setting state for plants table to load plants in List table

  const [plants, setPlants] = useState([]);


  const { garden, setGarden } = useContext(GardenContext);


  //Load all plants and set to plants when Garden page renders
  useEffect(() => {
    API.getPlants()
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }, []);



 
  // useParams(); ///
  useEffect(() => {
    API.getOneGarden() //coming from new Garden State after form submission (id) or (garden._id)
    .then((res) => setGarden(res.data)) //setGarden??
    .catch((err) => console.log(err));
  }, []);



  
  function handleGardenSubmit(event) { 
    event.preventDefault();
    useHistory.push("/MyGarden");  //reroute to MyGarden page
  };


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
            <button className="btn" id="saveBtn" onClick={handleGardenSubmit}>
              Save Garden
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withAuthenticationRequired(Garden, {
  onRedirecting: () => <Loading />,
});

