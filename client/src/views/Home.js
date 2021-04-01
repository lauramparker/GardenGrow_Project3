import React, { Fragment, useEffect } from "react";
import GardenImage from "../assets/GardenGrow.jpeg";
import "./home.css";

const Home = () => {

	useEffect(() => {
        localStorage.clear()
	},[]);

	return (
		<Fragment>
				<img className="hero-image" src={GardenImage} alt="hero" />
		</Fragment>
	)
};

export default Home;
