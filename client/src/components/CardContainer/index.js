import React from "react";
import Card from "./Card";
import "./style.css";
import { Grid, Row, Col } from "react-bootstrap";

//grid is  made up of individual plant cards with plant images
//props.length and props.width to define number of rows and cols for Grid?
//need to consider maximum size - 6 x 6 plots? what about mobile? maybe 4 x 8? each plot is 2 x 2 sq ft?
function CardContainer(props) {
        
        return (
            <div>
                <Grid>
                    
                    <Row className="garden-row">
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                    </Row>
                    <Row className="garden-row">
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                    </Row>
                    <Row className="garden-row">
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                    </Row>
                    <Row className="garden-row">
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                        <Col xs={1}> <Card /> </Col>
                    </Row>
    
                </Grid>
            </div>
         
        )

}

export default CardContainer;
