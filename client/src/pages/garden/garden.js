import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardContainer";
import SearchForm from "../../components/SearchForm";



function Garden({plants}) {
//setting state for plants table to load plants in List
    const[plants, setPlants] = useState([])

//garden is an object of Card objects
//default 16 plots - 4 rows, 4 columns (this gets updated in Landing Page)   
    const[garden, setGarden] = useState({
        row: 4,
        col: 4,
        total_plots: 16,
        garden_data: [] //array of cardState objects (garden.garden_data).push(cardState)
    })

// setting Card state context. 
//List can update cardstate with selected Plant (theme Selected or notSelected changes color/image)
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


//update CardState with selected plant from List checkbox
//send updated card object to handleCardSubmit
//HOW to set card id? of use total plots?

    function handleSelectedPlant(event)  {
        event.setCardState(plant_id= this.plant_id, plantImg=this.plantImg, selected=true)
        .then(cardState => handleGardenUpdate(cardState))
        .catch(err => console.log(err));
    };   


//add new cardState to garden_data array & re-load the cards in Garden 
    function handleGardenUpdate(cardState) {
        // event.preventDefault;
        // axios.put("") //route to update garden id
        setGarden(garden_data=(garden_data.push(cardState)))
        .catch(err => console.log(err));
    };



//when the user saves their garden, post saved garden
    function handleGardenSubmit(event) {
        event.preventDefault;
        axios.post("") //route to post new garden
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
                        loadGarden={loadGarden}
                        total_plots={garden.total_plots}
                        handleGardenUpdate={handleGardenUpdate}
                        onClick={handleGardenSubmit}
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