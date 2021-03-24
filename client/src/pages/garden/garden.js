import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
// import axios from "axios";
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardContainer";
import ListGroup from "../../components/ListGroup";
import SearchForm from "../../components/SearchForm";
// import GardenForm from "../../components/Form";




function Garden() {
//setting state for plants table to load plants in List table
    const[plants, setPlants] = useState([])

//garden , set Garden updated in Form
    const[garden, setGarden] = useState({
        gardenName: " ",
        length: "",
        width: "",
        total_plots: 16,
        garden_data: {} //try JSON object //previously array// garden._plot
    })
  

// setting Card state context. 
//List can update cardstate with selected plant
//CardContainer can update cardstate with display depending on how many cards are displayed
    const[cardState, setCardState] = useState({ 
        plot_id: "", //how do we set card_id?  related to total_plots? //plot._id
        display: true,
        selected: false,
        plant_id: "",
        plantImg:"",
        onClick: (plant_id, plantImg, selected, display) => {
            setCardState({ ...cardState, plant_id, plantImg, selected, display });
            }
    }) 


//Load all plants into plants list when List on Garden page renders
    useEffect(() => {
        loadPlants()
    }, []);

    function loadPlants() {
        API.getPlants()
          .then(res => setPlants(res.data)) 
          .catch(err => console.log(err));
    };



//Load specific Garden (new Garden) when pages loads
        const {id} = useParams()
        useEffect(() => {
        API.getOneGarden(id)
            .then(res => setGarden(res.data))
            .catch(err => console.log(err));
        }, [])


//update CardState with selected plant from List checkbox //Add updated cardstate to garden.garden_data
//need to connect plants and cards in DB

    function handleSelectedPlant(event)  {
        event.setCardState(
            cardState.plant_id= plants.plant_id, 
            cardState.plantImg= plants.plantImg, 
            cardState.plot_id= plants.plot._id, //what is this?
            cardState.selected=true
            )
        .then(cardState => handleGardenUpdate(cardState))
        .catch(err => console.log(err));
    };   


//add new cardState info to garden_data array // should loadGarden? to reload the Garden
    function handleGardenUpdate(cardState) {
        setGarden(garden.garden_data=(garden.garden_data.push(cardState)))
        .catch(err => console.log(err));
    };



//when the user SAVES their garden, update saved garden
    function handleGardenSave(event) {
        event.preventDefault()
        API.updateGarden() //route to update new garden (save happens on loading page)
          .then(req=> setGarden(req.data)) //update state with new garden
          .catch(err => console.log(err));
    };




  return (
    <div>
      <Header />
      <Container />
            <Row>
                <Col>
                    <ListGroup 
                        plants={plants} 
                        onChange={handleSelectedPlant}
                    />
                </Col>
                <Col>
                    <CardContainer 
                        // data={garden.garden_data}
                        total_plots={garden.total_plots}
                        handleGardenUpdate={handleGardenUpdate}
                        onClick={handleGardenSave}
                    />
                </Col>
            </Row>
            <Row>
                <SearchForm>
                    {/* search={this.state.search} */}
                </SearchForm>
            </Row>        
      <Footer />

    </div>
  );
}


export default Garden;

// new garden should append here in list format. 