import React from "react";
import { Container, Row, Col  } from "react-bootstrap";  //{Grid?}
import Card from "../Card";
import "./style.css";


//grid is made up of individual plant cards with plant images
function CardContainer({props}) {
        
        return (
                <Container>
                    <Row className="garden-row">
                      <Col>

                      {props.data.map(cardState => (
                        <Card key={cardState._id}>
                        </Card>
                        ))}

                      </Col>
                    </Row>
                <button onClick={props.handleGardenSave}>Save Garden</button>
                </Container>         
         
        )

}

export default CardContainer;
