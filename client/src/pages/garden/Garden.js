import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
// import axios from "axios";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardContainer";
import { ListGroup, Item } from "../../components/ListGroup";
import SearchForm from "../../components/SearchForm";
// import GardenForm from "../../components/Form";




function Garden() {
//setting state for plants table to load plants in List table
    const[plants, setPlants] = useState([])

    const[listObject, setListObject] = useState([])

//garden , set Garden updated in Form
    const[garden, setGarden] = useState({
        gardenName: " ",
        length: "",
        width: "",
        total_plots: "", //use for length and width of garden
        garden_data: [ //try JSON object //has to be array for .map to work
            "plant a", 
            "plant b",
            "plant c",
            "plant d",
            "plant e",
            "plant f", 
        ],
             
    })
  


//Load all plants and set to plants when Garden page renders
    useEffect(() => {
        API.getPlants()
        .then(res => setPlants(res.data))
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])


//Load specific Garden one time (NEW Garden) when pages loads !!!!!! NEED to attach id!
        const {id} = useParams()
        useEffect(() => {
        API.getOneGarden(id)
            .then(res => setGarden(res.data))
            .catch(err => console.log(err));
        }, [])



//When user selects plant from plant list, update component state

    function handleSelectChange(event)  {
        const { name, value } = event.target; //name = plant.name of params.id
        setListObject({...listObject, [name]: value});
        addGardenData(listObject);
    };


//Adds selected plant data to garden_data and reloads garden list
    function addGardenData() {
        setGarden({...garden, garden_data: garden_data.push(listObject)}); //!!!!!!!!
        loadGarden(); ///!!!!!!!!!
    }    
        


//when the user saves their garden, an update/put request is made 
//(initial post on create garden)
    function handleGardenSubmit(event) {
        event.preventDefault()
        API.updateGarden(id) 
          .catch(err => console.log(err));
    };




  return (
    <div>
      <Container fluid>
            <Row>

                <Col>
                    <h3>Plot Garden</h3>

                    <CardContainer 
                        data={garden.garden_data}
                        // total_plots={garden.total_plots}
                        handleGardenUpdate={handleGardenUpdate}
                        onClick={handleGardenSubmit}
                    />
                </Col>

                <Col>
                    <h3>Select Plants</h3>
                    <ListGroup>
                        {plants.map(plant => (
                            <Item 
                            key={plant._id}
                            plant={plant}
                            handleSelectChange={handleSelectChange}  
                            >                              
                        </Item>
                        ))}
                    </ListGroup>
                </Col>
            
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