import React from "react";
import "./style.css";

function List(props) {

    return(
        <ul className="list-group">
            {plants.map(plant=>(
                <li className="list-group-item" key={plant.id}>
                    {plant.name}
                </li>
            )    
            )}
        </ul>
    )
}

export default List;