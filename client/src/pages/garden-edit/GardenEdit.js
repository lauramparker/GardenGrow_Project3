import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Row from "../../components/Row/index";
import Col from "../../components/Col";
import PlantData from "../../data/"; //need plant db


//set array to equal all plants data for specific garden
const plants = [];


//create a new array of the selected plants from the (all) plants list.
//<List> component sends only the selected plants as plants to create the list/table component
//in Garden component, plants is equal to all plants on the planning garden page
const selectedPlants = props.plants.filter(plant => plant.selected);

function GardenEdit() {
  return (
    <div>
      <Header />
        <Container />
            <Row />
            <Col />
                <List plants={selectedPlants} />
      <Footer />

    </div>
  );
}

export default GardenEdit;

// new garden should append here in list format. 