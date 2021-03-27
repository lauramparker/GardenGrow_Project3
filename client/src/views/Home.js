import React, { Fragment } from "react";
import GardenImage from "../assets/GardenGrow.jpeg";
import "./home.css";

const Home = () => (
	<Fragment>
		<img className="hero-image" src={GardenImage} alt="hero" />
	</Fragment>
);

export default Home;
