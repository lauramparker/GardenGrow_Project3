import React, { createContext, useState, } from 'react';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from '../components/Loading';
import API from '../utils/API';



export const GardenContext = createContext();



const GardenProvider = ({ children }) => {

  const { user } = useAuth0();
  const [garden, setGarden] = useState({
        // id:"", //don't need?? _id automatic with mongo
        date: "",
        gardenName: "",
        length: "",
        width: "",
        plots: [
        ], //changed from garden_data to plots []
  });

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
      window.location.assign("/Garden/:id")   //need to attach ID AFTER state is updated
      }).catch((err) => console.log(err));
  };


  //When user selects plant from plant list, update component state 
  const handleSelect = (e) => {
    const value = e.currentTarget.value  //need to destructure to get all plant/plot info
    return setGarden(prevGarden => ({
      plots: [...prevGarden.plots, (value)]  ///  plots: [...prevGarden.plots, {plant}]  ///
    }))
      .catch((err) => console.log(err));
  };


  const handleSave = (e) => { //where does PUT/Update route go?
    API.updateGarden()  //(id)
      .then(res => setGarden(res.data))
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

export default withAuthenticationRequired(GardenProvider, {
  onRedirecting: () => <Loading />,
});