import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "../src/views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

import Landing from "./pages/landing-page/Landing.js";
import MyGarden from "./pages/my-gardens/MyGarden.js";
import GardenEdit from "./pages/garden-edit/GardenEdit";
import Garden from "./pages/Garden/garden-page";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
	const { isLoading, error } = useAuth0();

	if (error) {
		return <div>Oops... {error.message}</div>;
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Router history={history}>
			<div id="app" className="d-flex flex-column h-100">
				<NavBar />
				<Container className="flex-grow-1 mt-5">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/profile" component={Profile} />
						<Route path="/external-api" component={ExternalApi} />
						<Route path="/LandingPage" component={Landing} />
						<Route path="/MyGardens" component={MyGarden} />
						<Route path="/GardenEdit" component={GardenEdit} />
						<Route path="/Garden" component={Garden} />
					</Switch>
				</Container>
				<Footer />
			</div>
		</Router>
	);
};

export default App;