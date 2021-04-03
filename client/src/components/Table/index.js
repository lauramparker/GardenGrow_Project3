import React, { useContext } from "react";
import { GardenContext } from "../../Providers/GardenProvider";
import "./style.css";


//set up table that lists plants
function Table(props) {

const { handleSelectChange } = useContext(GardenContext);

    return (
    <div>
      <div style={{height:"400px"}} className = "table-wrapper-scroll-y scrollbar">
        <table className="table table-bordered table-hover" id="plantList">
        <thead> 
            <tr>
                <th>Name</th>
                <th>Spacing</th>
                <th>Harvest</th>
               
            </tr>
        </thead>
        <tbody>
            {props.plants.map(plant => { 
                return (
                <tr key={plant._id}>
                    <td>
                        <div className="form-check container-fluid" id={plant._id}>
                            <input 
                                className="form-check-input"
                                type="checkbox" 
                                value={plant.Name} 
                                onChange={handleSelectChange}
                                > 
                            </input>      
                            <label className="form-check-label" htmlFor="flexCheckDefault">{plant.Name}</label>
                        </div>
                    </td> 

                    <td>{plant.spaceInstructions}</td>

                    <td>{plant.harvestInstructions}</td>

                </tr>
                )
            })}
        </tbody>
        </table> 
      </div>
    </div>

    );
}

export default Table;