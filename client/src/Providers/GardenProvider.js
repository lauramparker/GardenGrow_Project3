import React, { createContext, useState,} from 'react';
import API from '../utils/API';


export const GardenContext = createContext();

const GardenProvider = ({ children }) => {


    const [garden, setGarden] = useState({
        id:"",
        date: "",
        gardenName: "",
        length: "",
        width: "",
        garden_data: [
        ], //attached plant data
    });

  
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    switch(type) {
      case 'text':
        return setGarden({
          ...garden,
          [name]: value
        });

      case 'submit': 
        return setGarden({
          ...garden,
          gardenName: "",
          length: "",
          width: "",
          date: ""
        });

    default:
    console.log("Sorry, unable to create Garden");
    } 
  };


//When user selects plant from plant list, update component state 
  const handleSelect = (e) =>  {
    const value  = e.currentTarget.value  //need to destructure to get all plant info
    
        return setGarden(prevGarden => ({
          garden_data: [...prevGarden.garden_data, (value)]  ///  garden_data: [...prevGarden.garden_data, {plant}]  ///
      }))
  };


  const handleSave = (e) => { //where does PUT/Update route go? also see garden.js (as handle submit, no routing)
      API.updateGarden(id)
      .then(res =>setGarden(res.data));
  };


    return (
        <>
        <GardenContext.Provider
            value={{
            garden,
            handleChange,
            handleSelect,
            handleSave
            }}
        >
            {children}
        </GardenContext.Provider>
        </>
    )
};

export default GardenProvider;