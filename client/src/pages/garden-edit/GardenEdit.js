import React from "react";
import {Col, Row, Container} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



//create a new array of the selected plants from the (all) plants list.
//<List> component sends only the selected plants as plants to create the list/table component
//in Garden component, plants is equal to all plants on the planning garden page
// const selectedPlants = props.plants.filter(plant => plant.selected);

function GardenEdit() {
  return (
    <div>
      <Header />
        <Container />
            <Row />
            <Col />
                {/* <List plants={selectedPlants} /> */}
      <Footer />

    </div>
  );
}

export default GardenEdit;

