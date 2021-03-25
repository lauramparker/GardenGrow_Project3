import React, {Component} from "react";
import {Row, Container} from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlantList from "../../components/PlantList";
import API from "../../utils/API";


class GardenEdit extends Component {

state = {  
  plants: [],
};


//When the component mounts, request the data from Random User in Utils/API, 
componentDidMount() {
  this.getPlantsList()
};


getPlantsList = () => {
  API.getPlants()
  .then(({ data }) => {
      const plants = data.results.map(plant => {
          return {
              name: plant.name
          }
      });
      //sets both state arrays (employees & filterResults equal to same original API call)
      this.setState({plants: [...plants]})
  }).catch(err => console.error(err));
};


        render() {
          return (
            <div>
              <Header />
                <Container />
                    <Row>
                      <h3>PLANT TABLE</h3>
                      <PlantList 
                        plants={this.state.plants}
                      />
                    </Row>  
              <Footer />

            </div>
          )
        }
};

export default GardenEdit;

