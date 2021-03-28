import React, {useState, useEffect} from "react";
// import {Col, Row, Container} from "react-bootstrap";
import API from "../../utils/API";
import {ListGroup, Item} from "../../components/ListGroup";


function MyGarden() {


      const[gardens, setGardens] = useState([])

      useEffect(() => {
        API.getGardens()
        .then(res => setGardens(res.data))
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])


    function handleDelete(event) {
      event.preventDefault()
      API.deleteGarden()
      .catch(err => console.log(err));
    };

        return (
          <div>
            {/* <Container>
                <Row>
                <Col> */}

                     <h3>List Gardens </h3>
                     <ul>
                        {gardens.map(garden => (

                        <li key={garden._id}>
                            <p> {garden.gardenName}</p>

                            </li>
                        ))}
                      </ul>
                      <ListGroup>
                          {gardens.map(garden => (
                              <Item
                              key={garden._id}
                              garden={garden}
                              handleDelete={handleDelete}
                              >
                              </Item>
                          ))}
                      </ListGroup>
                            
          </div>
        );

}

export default MyGarden;

 