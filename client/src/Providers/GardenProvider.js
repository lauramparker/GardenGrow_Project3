import React, { createContext, useState,} from 'react';
import { useHistory } from "react-router-dom";
import API from '../utils/API';



export const GardenContext = createContext();

const GardenProvider = ({ children }) => {


    const [garden, setGarden] = useState({
        // id:"", //don't need?? _id automatic with mongo
        date: "",
        gardenName: "",
        length: "",
        width: "",
        garden_data: [
        ], //attached plant data
    });

  
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    console.log({ name, value, type});

    switch(type) {
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
    }
};

//CREATE POST A new Garden w Name, Length, Width, Date
const handleSubmit = (e) => {
    e.preventDefault();
      API.saveGarden({
        gardenName: garden.gardenName,
        length: garden.length,
        width: garden.width,
        // date: dateRange.startDate //sending dateRange from local state
      }).then(res => {setGarden({ //setGarden?
        gardenName: res.data.gardenName,
        length: res.data.length,
        width: res.data.length,
        // date: garden.date,
        // id: res.data._id //need to get Garden ID
      })
        useHistory.push("/Garden" + garden._id)   //erring out
      }).catch((err) => console.log(err));
  };


//When user selects plant from plant list, update component state 
  const handleSelect = (e) =>  {
    const value  = e.currentTarget.value  //need to destructure to get all plant info
    
        return setGarden(prevGarden => ({
          garden_data: [...prevGarden.garden_data, (value)]  ///  garden_data: [...prevGarden.garden_data, {plant}]  ///
      }))
      .catch((err) => console.log(err));
  };


  const handleSave = (e) => { //where does PUT/Update route go? also see garden.js (as handle submit, no routing)
      API.updateGarden()  //(id)
      .then(res =>setGarden(res.data))
      .catch((err) => console.log(err));
  };


    return (
        <>
        <GardenContext.Provider
            value={{
            garden,
            handleChange,
            handleSelect,
            handleSave,
            handleSubmit
            }}
        >
            {children}
        </GardenContext.Provider>
        </>
    )
};

export default GardenProvider;