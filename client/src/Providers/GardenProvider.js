import React, { createContext, useEffect, useState, } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import API from '../utils/API';

export const GardenContext = createContext();

const GardenProvider = ({ children }) => {
  const { user } = useAuth0();
  const history = useHistory();
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
      history.push(`/Garden/${garden.id}`);
    }
  }, [garden, history])

  const handleSave = (e) => {
    console.log(garden);
    API.updateGarden(garden.id, garden)
      .then(res => setGarden(res.data))
      .catch((err) => console.log(err));
    history.push("/My-Gardens");  //reroute to My-Gardens after garden saved
  };

  return (
    <GardenContext.Provider
      value={{
        garden,
        setGarden,
        plants,
        setPlants,
        handleSave,
      }}
    >
      {children}
    </GardenContext.Provider>
  )
};

export default withAuthenticationRequired(GardenProvider, {
  onRedirecting: () => <Loading />,
});