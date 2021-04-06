import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
import { GardenContext } from "../../Providers/GardenProvider";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";
import CardContainer from "../../components/CardContainer";
import Table from "../../components/Table";
import "./Garden.css";

function Garden() {  //{children}???
  const { garden, setGarden, plants, handleSave } = useContext(GardenContext)
  
  // When user selects plant from plant list, update component state 
  const handleSelectChange = (e) => {
    const value = e.currentTarget.value;  
    let selectedPlant = plants.filter(plant => plant.Name === value);
    selectedPlant = selectedPlant[0];
    console.log("You selected this plant: " + selectedPlant.Name);
    return setGarden(prevGarden => ({
      plots: [...prevGarden.plots, selectedPlant]  //  add plant data to garden.plots, send to 
    }))
  };

  return (
      <Container fluid>
        <Row>
          <Col>
            <h3>{garden.gardenName}</h3>
            <CardContainer data={garden.garden_data} />
          </Col>
          <Col>
            <h3>Select Plants</h3>
            <Table
              handleSelectChange={handleSelectChange}
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
  );
}

export default Garden;
