import React, { useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { GardenContext } from "../../Providers/GardenProvider";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";
import CardContainer from "../../components/CardContainer";
import Table from "../../components/Table";
import "./Garden.css";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading"

function Garden() {
  const { garden, setGarden, plants, handleSave } = useContext(GardenContext)
  const { id } = useParams();

  // When user selects plant from plant list, update component state 
  const handleSelectChange = (e) => {
    const value = e.currentTarget.value;
    let selectedPlant = plants.filter(plant => plant.Name === value);

    selectedPlant = selectedPlant[0];
    console.log("You selected this plant: " + selectedPlant.Name);

    return setGarden(prevGarden => ({
      ...prevGarden,
      plots: [...prevGarden.plots, selectedPlant],  //  add plant data to garden.plots, send to 
    }))
  };

useEffect(() => {
  API.getOneGarden(id)
  .then(res => setGarden(res.data))
  .catch(err => console.error(err));
}, [id, setGarden]);
  

  if (!garden) return <Loading />;
  else {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h3>Design Garden: {garden.gardenName}</h3>
            <small>Each Garden Plot = 2 ft x 2 ft (4 sq.ft)</small>
            <CardContainer />
          </Col>
          <Col>
            <h3>Select Plants</h3>
            <small>Scroll for more...</small>
            <Table
              handleSelectChange={handleSelectChange}
            ></Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <button style={{ backgroundColor: "#F2B199", color: "white" }} className="btn" id="saveBtn" onClick={handleSave}>
              Save Garden
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Garden;
