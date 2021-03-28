import React from "react";
// import React, {useState} from "react";
// import {Container} from "react-bootstrap";
// import Table from 'react-bootstrap/Table';
import "./style.css";


export function ListGroup({children}) {

    return(
        <div className="list-overflow-container" id="gardenList">
        <ul className="list-group">{children} </ul>
        </div>
        );
    }


export function Item(props) {

    // const[checked, setChecked] = useState([])  //for future check uncheck

            return(

                <li className="list-group-item" id={props.garden._id}>
                    
                    <div class="form-check">
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            value={props.garden.gardenName} 
                            // id={props.plant._id} //this doesn't work in input
                            onChange={props.handleChange}
                            > 
                        </input>      
                        <label className="form-check-label" for="flexCheckDefault">{props.garden.gardenName}</label>
                    </div>
    
                </li>
            )
        }
        


