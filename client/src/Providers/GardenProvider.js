import React, { createContext, useEffect, useState, } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import API from '../utils/API';



export const GardenContext = createContext();


const GardenProvider = ({ children }) => {

  const { user } = useAuth0();

  const history = useHistory();

  // const [gardenData, setGardenData] = useState(null)

  const [garden, setGarden] = useState();

  const [plants, setPlants] = useState([]);

   //Load all plants - don't pass plants to Garden.js
   useEffect(() => {
    API.getPlants()
      .then((res) => setPlants(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  useEffect(() => {
    if (garden && garden.id) {
      history.push("/Garden")
    }
  }, [garden])


  


  //When user selects plant from plant list, update component state 
  const handleSelectChange = (e) => {
    const value = e.currentTarget.value;  
    const selectedPlant = plants.filter(plant => plant.Name === value); //match to plant.name in {plants} - this is working
    console.log(selectedPlant);
    return setGarden(prevGarden => ({
      plots: [...prevGarden.plots, (selectedPlant)]  ///  add plant data to garden.plots, send to 
    }))
      .catch((err) => console.log(err));
  };

  

  const handleSave = (e) => { 
    API.updateGarden(garden.id) 
      .then(res => setGarden(res.data))
      .catch((err) => console.log(err));
      useHistory.push("/MyGarden");  //reroute to MyGardens after garden saved
  };


  return (
    <>
      <GardenContext.Provider
        value={{
          garden,
          setGarden,
          handleSelectChange,
          handleSave,
        }}
      >
        {children}
      </GardenContext.Provider>
    </>
  )
};


export default withAuthenticationRequired(GardenProvider, {
  onRedirecting: () => <Loading />,
});