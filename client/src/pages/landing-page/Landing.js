import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Form from "../../components/Form";





function Landing(props) {
  return (
    <div>
      <Container >
        <Form 
          garden={props.garden}
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
        />
        <Row />
        <Col />
      </ Container>
    </div>
  );

}

export default Landing;

// new garden should append here in list format. 