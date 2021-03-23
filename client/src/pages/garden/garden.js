import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardContainer";
import SearchForm from "../../components/SearchForm";
import GardenForm from "../../components/Form";
import routes from "../../../../routes";



function Garden({plants}) {
//setting state for plants table to load plants in List table
    const[plants, setPlants] = useState([])

//garden , set Garden updated in Form
    const[garden, setGarden] = useState({
        gardenName: " ",
        length: "",
        width: "",
        total_plots: 16,
        garden_data: [] //array of cardState objects
    })
  

// setting Card state context. 
//List can update cardstate with selected plant
//CardContainer can update cardstate with display depending on how many cards are displayed
    const[cardState, setCardState] = useState({ 
        card_id: "", //how do we set card_id?  related to total_plots?
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
        axios.get(" ")
          .then(res => setPlants(res.data)) 
          .catch(err => console.log(err));
    };



//Load empty Cards when CardContainer Garden page renders
//This has to come from user initiating creation of new Garden on Landing Page
    useEffect(() => {
        loadGarden()
    }, []);

    function loadGarden() {
        axios.get(" ") //route of new garden id
        .then(res => setGarden(res.data)) 
        .catch(err => console.log(err));
    };


//update CardState with selected plant from List checkbox //Add updated cardstate to garden.garden_data

    function handleSelectedPlant(event)  {
        event.setCardState(plant_id= this.plant_id, plantImg=this.plantImg, selected=true)
        .then(cardState => handleGardenUpdate(cardState))
        .catch(err => console.log(err));
    };   


//add new cardState info to garden_data array // should loadGarden? to reload the Garden
    function handleGardenUpdate(cardState) {
        // axios.put("") //route to update garden id
        setGarden(garden_data=(garden_data.push(cardState)))
        .catch(err => console.log(err));
    };



//when the user SAVES their garden, update saved garden
    function handleGardenSave(event) {
        event.preventDefault;
        axios.put("") //route to update new garden
          .then(req=> setGarden(req.data)) //update state with new garden
          .catch(err => console.log(err));
    };




  return (
    <div>
      <Header />
      <Container />
            <Row>
                <Col>
                    <List 
                        loadPlants={loadPlants}
                        plants={plants} 
                        onChange={handleSelectedPlant}
                    />
                </Col>
                <Col>
                    <CardContainer 
                        garden_data={garden.garden_data}
                        total_plots={garden.total_plots}
                        handleGardenUpdate={handleGardenUpdate}
                        onClick={handleGardenSave}
                    />
                </Col>
            </Row>
            <Row>
                <SearchForm>
                    search={this.state.search}
                </SearchForm>
            </Row>        
      <Footer />

    </div>
  );
}


export default Garden;

// new garden should append here in list format. 