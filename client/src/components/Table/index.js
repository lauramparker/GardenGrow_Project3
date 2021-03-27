import React from "react";


//set up table that lists plants
function Table(props) {
    return (
    <div>
        <table className="table" id="plants">
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
                    <td>{plant.Name}</td> 
                    <td>{plant.spaceInstructions}</td>
                    <td>{plant.url}</td>
                </tr>
                )
            })
            }
        </tbody>
        </table> 
    </div>
    );
}

export default Table;