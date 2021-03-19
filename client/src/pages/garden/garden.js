import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Row from "../../components/Row/index";
import Col from "../../components/Col";
import Grid from "../../components/Grid";
import PlantData from "../../data/"; //need plant db


//set array to equal all plants data 
const plants = [];

function Garden() {
  return (
    <div>
      <Header />
      <Container />
            <Row>
                <Col>
                    <List plants={plants} 
                    />
                </Col>
                <Col>
                    <Grid 
                        plantImg={} 
                        length={}
                        width={}
                    />
                </Col>

            </Row>

            <Row>
                {/* searchform */}
            </Row>        
      <Footer />

    </div>
  );
}

export default Garden;

// new garden should append here in list format. 