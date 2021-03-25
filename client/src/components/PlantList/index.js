import React from "react";


//set up table that lists plants
function PlantList(props) {
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
                    <td>{plant.name}</td> 
                </tr>
                )
            })
            }
        </tbody>
        </table> 
    </div>
    );
}

export default PlantList;