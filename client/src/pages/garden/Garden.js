import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Footer from "../../components/Footer";
import CardContainer from "../../components/CardContainer";
import { ListGroup, Item } from "../../components/ListGroup";
// import SearchForm from "../../components/SearchForm";




function Garden() {
//setting state for plants table to load plants in List table
    const[plants, setPlants] = useState([]) //must be array for map to work (array of objects)

    const[listObject, setListObject] = useState({ //set as object 
        name: "",
        spacing: "",
        harvest: "",
        image: ""
    }) 

//garden , set Garden updated in Form
//we can separate garden into the form property needs and the garden page data needs
    const[garden, setGarden] = useState({
        gardenName: " ",
        length: "",
        width: "",
        total_plots: "", //use for length and width of garden
        garden_data: [ //must be array for map to work (array of listObjects)
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
        }, [id])


//When user selects plant from plant list, update component state 

    function handleSelectChange(event)  {
        const value = event.target.id //!!!!!!! returning undefined no matter what goes here . use bind??
        console.log(id);
        setListObject({ name: value }); // !!!!!!!!!!
        addGardenData(listObject);
    };


//Adds selected plant data to garden_data.  
//Updated garden state passes to CardContainer (data) and re-renders the cards
    function addGardenData() {
        setGarden(prevGarden => ({
            garden_data: [...prevGarden.garden_data, {listObject}]  //! this seems to be working (no value from listObject, but it's saving)
        }));
    };

//runs when garden container renders (like component did mount)
    useEffect((garden) => {
       API.updateGarden({
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({garden})
        })
            .then(res => res.json())
            .then(data =>setGarden(data));
    }, []);



//when the user saves their garden, need to reroute to MyGardens or LandingPage
//don't need to post as Garden is consistantly updated above
function handleGardenSubmit(event) {
    event.preventDefault()
    alert("You planned your Garden! Want to start another?")
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
                {/* <SearchForm>
                  
                </SearchForm> */}
					</Row>
				</Container>
				<Footer />

			</div>
		);
	
}


export default Garden;
