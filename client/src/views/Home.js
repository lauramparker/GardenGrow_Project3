import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import vegPattern from "../assets/vegPattern.png";
import "./home.css";

const Home = () => {

	useEffect(() => {
        localStorage.clear()
	},[]);

	return (
		<Container>
			<div>

			</div>
			<div id="bg">
  				<img src={vegPattern} alt=""/>
			</div>
				{/* <img className="hero-image" src={veggies} alt="hero" /> */}
		</Container>
	)
};

export default Home;
