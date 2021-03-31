import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import { Container } from "reactstrap";
import { useHistory } from "react-router-dom";

// import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
// import ExternalApi from "../src/views/ExternalApi";
// import { useAuth0 } from "@auth0/auth0-react";

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
  // const { isLoading, error } = useAuth0();

  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  // if (isLoading) {
  //   return <Loading />;
  // }


//Define Garden State
  const [garden, setGarden] = useState({
    id:"",
    date: "",
    gardenName: " ",
    length: "",
    width: "",
    garden_data: [
    ],
  });

  //***saving new Garden to db
  const handleChange = (e, date) => {
    const { name, value } = e.target;
    setGarden({
      ...garden,
      [name]: value,
    });
    console.log(date); // native Date object
  };


//***saving new Garden to db
  const handleSubmit = (e) => {
      e.preventDefault();
        API.saveGarden({
          gardenName: garden.gardenName,
          length: garden.length,
          width: garden.width,
        }).then(res => {setGarden({
          gardenName: res.data.gardenName,
          length: res.data.length,
          width: res.data.length,
          id: res.data._id
        })
          useHistory.push("/Garden")   //erring out
        }).catch((err) => console.log(err));
  };


  //***When user selects plant from plant list, update component state 
  function handleSelectChange(event)  {
    const value = event.currentTarget.value
    // console.log(value);
    // setListObject({ ...listObject, name: value });
    //     console.log(listObject);
        // addGardenData(listObject);
        setGarden(prevGarden => ({
          garden_data: [...prevGarden.garden_data, (value)]  
      }))
};

//***Adds selected plant data to garden_data.  
// function addGardenData() {
//     setGarden(prevGarden => ({
//         garden_data: [...prevGarden.garden_data, {listObject}]  
//     }))
//     console.log(garden.garden_data);
// };

//***when the user saves their garden, need to reroute to MyGardens
//change to update
function handleGardenSubmit(event) { 
    event.preventDefault();
    useHistory.push("/MyGarden");  //reroute to MyGarden page
}

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/landing-page" 
                   component={Landing} 
                   garden={garden}
                   handleSubmit={handleSubmit}
                   handleChange={handleChange}
                  />
            <Route exact path={["/my-gardens", "/mygardens"]} 
                   component={MyGarden} 
                   garden={garden}
                   />
            <Route exact path="/garden-edit" component={GardenEdit} />
            <Route exact path="/garden" 
                   component={Garden} 
                   garden={garden}
                   handleSelectChange={handleSelectChange}
                   handleGardenSubmit={handleGardenSubmit}
                  />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
