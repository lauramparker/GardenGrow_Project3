import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import GardenProvider from "./Providers/GardenProvider";

// import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Landing from "./pages/landing-page/Landing.js";
import MyGarden from "./pages/my-gardens/MyGarden.js";
import Garden from "./pages/garden/Garden";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  return (
    <Router>
      <GardenProvider>
        <div id="app" className="d-flex flex-column h-100">
          <NavBar />
          <Container className="flex-grow-1 mt-5" style={{minHeight:"100%"}}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/landing-page"
                component={Landing}
              />
              <Route exact path="/my-gardens"
                component={MyGarden}
              />
              <Route path="/garden/:id"  //not exact path because Garden ID is needed
                component={Garden}
                garden={useParams.id}
              />
            </Switch>
            <Footer />
          </Container>
        </div>
      </GardenProvider>
    </Router>
  );
};

export default App;

