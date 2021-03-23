import React from "react";
import { Container, Row, Col  } from "react-bootstrap";  //{Grid?}
import Card from "../Card";
import "./style.css";


//grid is made up of individual plant cards with plant images
function CardContainer({garden_data, handleGardenSave}) {
        
        return (
                <Container>
                    <Row className="garden-row">
                      <Col>

                      {garden_data.map(cardState => (
                        <Card key={cardState._id}>
                        </Card>
                        ))}

                      </Col>
                    </Row>
                <button onClick={handleGardenSave}>Save Garden</button>
                </Container>         
         
        )

}

export default CardContainer;
