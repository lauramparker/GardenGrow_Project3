import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";
import CardContainer from "../../components/CardContainer";
import Table from "../../components/Table";
// import SearchForm from "../../components/SearchForm";




function Garden() {
//setting state for plants table to load plants in List table
    const[plants, setPlants] = useState([]) //must be array for map to work (array of objects)

    const[listObject, setListObject] = useState({ //set as object 
        id: "",
        name: "",
        spacing: "",
        harvest: "",
        image: "",
    }) 


//garden , set Garden updated in Form
//values below are for testing, will be overwritten when garden(id) is called
    const[garden, setGarden] = useState({
        gardenName: "My Play Garden",
        length: 4,
        width: 6,
        plant_date: "",
        total_plots: 6,
        garden_data: [ //must be array for map to work (array of listObjects)
         
        ],      
    })


//Load all plants and set to plants when Garden page renders
    useEffect(() => {
        API.getPlants()
        .then(res => setPlants(res.data))
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])


//Load garden / setGarden after user inputs newly saved Garden fields
    useEffect(() => {
        const id = "605e6f230cdfe6b454d8e9d4"; //placeholder ID
        API.getOneGarden(id)
        .then(res => setGarden(res.data))
        // .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])

    

//When user selects plant from plant list, update component state 

    function handleSelectChange(event)  {
        const value = event.currentTarget.value
        console.log(value);
        setListObject({ ...listObject, name: value });
            console.log(listObject);
            addGardenData(listObject);
    };


//Adds selected plant data to garden_data.  
//Updated garden state passes to CardContainer (data) and re-renders the cards
    function addGardenData(listObject) {
        setGarden(prevGarden => ({
            garden_data: [...prevGarden.garden_data, {listObject}]  
        }))
        console.log(garden.garden_data);
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



//when the user saves their garden, need to reroute to MyGardens
    function handleGardenSubmit(event) {
        event.preventDefault()
        alert("You planned your Garden! Want to start another?")
        // .catch(err => console.log(err));
    };


  return (
    <div>
        <Container fluid>
            <Row>

                <Col>
                    <h3>Name: {garden.gardenName}</h3>
                    <p><small>Dimensions = {garden.length} ft long x {garden.width} ft wide</small></p>
                    <p><small>Contains #{garden.total_plots} 2ft x 2ft plots</small></p>

                    <CardContainer 
                        data={garden.garden_data}
                        length={garden.length}
                        width={garden.width}
                    />
                </Col>

                <Col>
                    <h3>Select Plants</h3>
        
                    <Table
                            plants={plants}
                            handleSelectChange={handleSelectChange}
                            >
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                <button className="btn" id="saveBtn" onClick={handleGardenSubmit}>Save Garden</button>
                </Col>
            </Row>
		</Container>
	</div>
		);
	
}


export default Garden;
