import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import pattern from "../assets/pattern.png";
import "./home.css";

const Home = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Container className="containerFluid">
      <div className="box">
        <h1
          style={{
            fontFamily: "'Concert One', cursive",
            fontWeight: "400",
            fontSize: "100px",
            color: "#8C8627",
            textAlign: "center",
          }}
        >
          Welcome to Garden State
        </h1>

        <h3 style={{ textAlign: "center" }}>
          Head over to design and lets get started!
        </h3>
      </div>
      <div id="bg">
        <img src={pattern} alt="" />
      </div>
      {/* <img className="hero-image" src={veggies} alt="hero" /> */}
    </Container>
  );
};

export default Home;
