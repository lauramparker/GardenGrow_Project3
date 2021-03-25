import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardContainer";
import { ListGroup, Item } from "../../components/ListGroup";
import Table from "../../components/Table";
import SearchForm from "../../components/SearchForm";
import "./garden.css";




function Garden() {
//setting state for plants table to load plants in List table
    const[plants, setPlants] = useState([])

//garden , set Garden updated in Form
    const[garden, setGarden] = useState({
        gardenName: " ",
        length: "",
        width: "",
        total_plots: 16,
        garden_data: [ //try JSON object //has to be array for .map to work
            "plant a", 
            "plant b",
            "plant c",
            "plant d",
            "plant e",
            "plant f", 
        ],
             
    })
  

// setting Card state context. 
//List can update cardstate with selected plant
    const[cardState, setCardState] = useState({ 
        plant_name: "",
        plot_id: "", //how do we set plot_id?
        plant_id: "",
        plantImg:"",
        onClick: (plant_name, plantImg) => {
            setCardState({ ...cardState, plant_name, plantImg });
            }
    }) 


//Load all plants and set to plants when Garden page renders
    useEffect(() => {
        API.getPlants()
        .then(res => setPlants(res.data))
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])



//Load specific Garden (new Garden) when pages loads (will use - need to define id)
        const {id} = useParams()
        useEffect(() => {
        API.getOneGarden(id)
            .then(res => setGarden(res.data))
            .catch(err => console.log(err));
        }, [])


//update CardState with selected plant from List checkbox //Add updated cardstate to garden.garden_data
//need to connect plants and cards in DB

    function handleSelectedPlant(event, plant)  {
        event.setCardState(
            cardState.plant_name= plant.name, 
            cardState.plantImg= plant.plantImg, 
            cardState.plot_id= plant.plot._id,
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
      <Container id="main">
            <Row>

                <Col>
                    <h3>Plot Garden</h3>

                    <CardContainer 
                        data={garden.garden_data}
                        // total_plots={garden.total_plots}
                        handleGardenUpdate={handleGardenUpdate}
                        onClick={handleGardenSave}
                    />
                </Col>

                <Col>
                    <h3>Select Plants</h3>
                    <ListGroup>
                        {plants.map(plant => (
                            <Item 
                            key={plant._id}
                            plant={plant}
                            handleSelectedPlant={handleSelectedPlant}   
                            >                           
                        </Item>
                        ))}
                    </ListGroup>
                </Col>
            
            </Row>

                    <Row>
                      <h3>PLANT TABLE</h3>  
                      <Table
                        plants={plants}  
                        >
                        </Table> 
                    </Row> 
         

            <Row>
                <SearchForm>
                    {/* search={this.state.search} */}
                </SearchForm>
            </Row>  
        </Container>      
      <Footer />

    </div>
  );
}


export default Garden;

// new garden should append here in list format. 