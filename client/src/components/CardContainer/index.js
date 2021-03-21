import React from "react";
import Card from "./Card";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";

//grid is made up of individual plant cards with plant images
//props.length and props.width to define number of rows and cols for Grid?
function CardContainer({plants, handleCardSubmit}) {
        
        return (
            <div>
                <Grid>
                    <Row className="garden-row">
                      <Col>
                        <Card 
                        plants={plants}
                        handleCardSubmit={handleCardSubmit}
                        />
                        <Card 
                        plants={plants}
                        handleCardSubmit={handleCardSubmit}
                        />
                        <Card 
                        plants={plants}
                        handleCardSubmit={handleCardSubmit}
                        />
                        <Card 
                        plants={plants}
                        handleCardSubmit={handleCardSubmit}
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
