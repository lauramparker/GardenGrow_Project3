import React from "react";
import "./style.css";


//set up table that lists plants
function Table(props) {
    return (
    <div>
      <div className = "table-wrapper-scroll-y scrollbar">
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
                <tr>
                    <td>
                        <div class="form-check">
                            <input 
                                className="form-check-input"
                                type="checkbox" 
                                value={plant.Name} 
                                // id={props.plant._id} //this doesn't work in input
                                onChange={props.handleSelectChange}
                                > 
                            </input>      
                            <label className="form-check-label" for="flexCheckDefault">{plant.Name}</label>
                        </div>
                    </td> 

                    <td>{plant.spaceInstructions}</td>

                    <td>{plant.harvestInstructions}</td>

                </tr>
                )
            })
            }
        </tbody>
        </table> 
      </div>
    </div>
    );
}

export default Table;