import React, { createContext, useState,} from 'react';

export const GardenContext = createContext();

const GardenProvider = ({ children }) => {

        const [garden, setGarden] = useState({
            id:"",
            date: "",
            gardenName: "Oh PLEASE Work",
            length: "",
            width: "",
            garden_data: [
            ],
        });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//       API.saveGarden({
//         gardenName: garden.gardenName,
//         length: garden.length,
//         width: garden.width,
//         date: garden.date
//       }).then(res => {setGarden({
//         gardenName: res.data.gardenName,
//         length: res.data.length,
//         width: res.data.length,
//         id: res.data._id
//       })
//         useHistory.push("/Garden")   //erring out
//       }).catch((err) => console.log(err));
// };

        const  handleChange = (e) => {  //date??
            const { name, value } = e.target;
            setGarden({...garden, [name]: value,});
        };
  
//   const handleChange = (e) => {
//     const { name, value, type } = e.target;

//     // switch(type) {
//     //   case 'text':
//         return setGarden({
//           ...garden,
//           [name]: value
//         });

//       case 'submit': 
//         return setGarden({
//           ...garden,
//           garden_data: [...garden, { plants }],
//           todo: ''
//         });
//     } 
//   }

    return (
        <>
        <GardenContext.Provider
            value={{
            garden,
            handleChange
            }}
        >
            {children}
        </GardenContext.Provider>
        </>
    )
}

export default GardenProvider;