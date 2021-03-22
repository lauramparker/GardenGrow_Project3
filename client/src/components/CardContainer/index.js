import React from "react";
import Card from "./Card";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";

//grid is made up of individual plant cards with plant images
//props.length and props.width to define number of rows and cols for Grid?
function CardContainer({plants, handleSelectedPlant, loadGarden, handleGardenUpdate, handleGardenSubmit}) {
        
        return (
            <div>
                {/* {card state or garden state maped to load cards?} */}
                <Grid>
                    <Row className="garden-row">
                      <Col>
                        <Card 
                        plants={plants}
                        handleSelectedPlant={handleSelectedPlant}
                        />
                      </Col>
                    </Row>
                    {/* <Row className="garden-row">
                    
                    </Row>
                    <Row className="garden-row">
                   
                    </Row>
                    <Row className="garden-row">
              
                    </Row> */}
                </Grid>
                <Button onClick={handleGardenSubmit}>Save Garden</Button>
            </div>
         
        )

}

export default CardContainer;
