import React from "react";
import "./style.css";

function List(props) {
    //create a new array of the selected plants from the (all) plants list.
    //Add if/else logic to props in Garden and GardenEdit pages
    const selectedPlants = props.plants.filter(plant => plant.selected);

    return(
        <ul className="list-group">
            {selectedPlants.map(plant=>(
                <li className="list-group-item" key={plant.id}>
                    {plant.name}
                </li>
            )    
            )}
        </ul>
    )
}

export default List;