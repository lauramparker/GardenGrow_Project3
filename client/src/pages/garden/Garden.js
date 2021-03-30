import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import API from "../../utils/API";
import CardContainer from "../../components/CardContainer";
import Table from "../../components/Table";
// import { useHistory } from "react-router-dom"; - for onsubmit
import "./Garden.css";
// import SearchForm from "../../components/SearchForm";

function Garden() {

  // let history = useHistory(); - for onsubmit
  //setting state for plants table to load plants in List table
  const [plants, setPlants] = useState([]); //must be array for map to work (array of objects)

  const [listObject, setListObject] = useState({
    //set as object
    id: "",
    name: "",
    spacing: "",
    harvest: "",
    image: "",
  });

  //garden , set Garden updated in Form
  //we can separate garden into the form property needs and the garden page data needs
  const [garden, setGarden] = useState({
    gardenName: " ",
    length: "",
    width: "",
    garden_data: [
      //must be array for map to work (array of listObjects)
    ],
  });

  //Load all plants and set to plants when Garden page renders
  useEffect(() => {
    API.getPlants()
      .then((res) => setPlants(res.data))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  //When user selects plant from plant list, update component state

  function handleSelectChange(event) {
    const value = event.currentTarget.value;
    setListObject({ name: value });
    // console.log(listObject);
    addGardenData(listObject);
  }

  //Adds selected plant data to garden_data.
  //Updated garden state passes to CardContainer (data) and re-renders the cards
  function addGardenData() {
    setGarden((prevGarden) => ({
      garden_data: [...prevGarden.garden_data, { listObject }],
    }));
    console.log(garden.garden_data);
  }


//NEW VERSION
    useEffect((id) => {
        API.updateGarden(id)
        .then(res =>setGarden(res.data));
     }, [garden.garden_data]);

    //OLD VERSION
//runs when garden container renders (like component did mount)
    // useEffect((garden) => {
    //    API.updateGarden({
    //         method: 'PUT',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({garden})
    //     })
    //         .then(res => res.json())
    //         .then(data =>setGarden(data));
    // }, []);


    

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



//when the user saves their garden, need to reroute to MyGardens
    function handleGardenSubmit(event) {
        event.preventDefault()
        alert("You planned your Garden! Want to start another?")
        .catch(err => console.log(err));
    };
  

  //when the user saves their garden, need to reroute to MyGardens
  function handleGardenSubmit(event) { 
    event.preventDefault();
    alert("You planned your Garden! Want to start another?")
    // history.push("/MyGarden"); -might need
  }


  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h3>{garden.gardenName}</h3>

            <CardContainer data={garden.garden_data} />
          </Col>

          <Col>
            <h3>Select Plants</h3>

            <Table
              plants={plants}
              handleSelectChange={handleSelectChange}
            ></Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="btn" id="saveBtn" onClick={handleGardenSubmit}>
              Save Garden
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Garden;

