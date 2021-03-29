import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap";
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
      const id = event.currentTarget.value
      API.deleteGarden(id)
      .catch(err => console.log(err));
    };

        return (
          <div>
            <Container>
              <Row>
                <Col>

                     <h3>My Gardens </h3>
          
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

                </Col>
              </Row>
            </Container>      
          </div>
        );

}

export default MyGarden;

 