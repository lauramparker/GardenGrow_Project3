import React, { createContext, useEffect, useState, } from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from '../components/Loading';
import API from '../utils/API';



export const GardenContext = createContext();



const GardenProvider = ({ children }) => {

  const { user } = useAuth0();
  const [garden, setGarden] = useState({
        id:"", //don't need?? _id automatic with mongo
        date: "",
        gardenName: "",
        length: "",
        width: "",
        plots: [
        ], //changed from garden_data to plots []
  });

   const [plants, setPlants] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
   
   

    switch (type) {
      case 'text':
      case 'select-one':
        return setGarden({
          ...garden,
          [name]: value
        });

      case 'submit':
        return setGarden({
          ...garden,
          gardenName: "",
          length: "",
          width: ""
          //   date: ""
        });
      default: break;
    }
  };

  //CREATE POST A new Garden w Name, Length, Width, Date
  const handleSubmit = (e) => {
    e.preventDefault();
      API.saveGarden({
        userId: user.email,
        gardenName: garden.gardenName,
        length: garden.length,
        width: garden.width,
        // date: dateRange.startDate //sending dateRange from local state
      }).then(res => {
        setGarden({ //setGarden?
        gardenName: res.data.gardenName,
        length: res.data.length,
        width: res.data.length,
        // date: garden.date,
        id: res.data._id //need to get Garden ID
      })
      })
      .catch((err) => console.log(err));  
      window.location.assign("/Garden/")   //need to attach ID AFTER state is updated   
  }; 


  // useEffect(() => {
  //   const id = garden.id
  //   console.log(id)
  //   window.location.assign("/Garden/" + garden.id
  //   // if (garden.id !==0) {
  //   //   window.location.assign("/Garden/" + id);
  //   // }
  // }, [garden.id]);


  


  //When user selects plant from plant list, update component state 
  const handleSelectChange = (e) => {
    const value = e.currentTarget.value  
    const selectedPlant = plants.filter(plant => plant.Name === value) //match to plant.name in {plants}
    return setGarden(prevGarden => ({
      plots: [...prevGarden.plots, selectedPlant]  ///  add plant data to garden.plots...plant schema or plot schema?
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
          handleChange,
          handleSelectChange,
          handleSave,
          handleSubmit
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