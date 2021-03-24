import React from "react";
import "./style.css";

function List(props) {

    return(
        <ul className="list-group">
            {props.plants.map(plant=>(
                <li className="list-group-item" key={plant.id}>
                    
                    <div class="form-check">
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            value="" 
                            id="flexCheckDefault"
                            onChange={event=> props.handleSelectedPlant(event.target)}>
                            {/* // using Context  onClick={() => alert.onClick("selected", true)} className="form-check-input"> */}
                        </input>      
                        <label className="form-check-label" for="flexCheckDefault">{plant.name}</label>
                    </div>
    
                </li>
            ))}
        </ul>
    )
}

export default List;