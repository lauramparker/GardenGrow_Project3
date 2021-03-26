import React from "react";
import { HashRouter, Route } from "react-router-dom";

import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
// import ExternalApi from "../src/views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";

import Landing from "./pages/landing-page/Landing.js";
import MyGarden from "./pages/my-gardens/MyGarden.js";
import GardenEdit from "./pages/garden-edit/GardenEdit";
import Garden from "./pages/garden/Garden";


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
    <HashRouter>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/external-api" component={ExternalApi} /> */}
            <Route exact path="/landing-page" component={Landing} />
            <Route exact path="/my-gardens" component={MyGarden} />
            <Route exact path="/garden-edit" component={GardenEdit} />
            <Route exact path="/garden" component={Garden} />
        </Container>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;