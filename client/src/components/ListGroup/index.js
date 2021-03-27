import React from "react";
// import {Container} from "react-bootstrap";
// import Table from 'react-bootstrap/Table';
import "./style.css";

export function ListGroup({children}) {

    return(
        <div className="list-overflow-container" id="plantList">
        <ul className="list-group">{children} </ul>
        </div>
        );
    }


export function Item(props) {

            return(

                <li className="list-group-item" >
                    
                    <div class="form-check">
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            value={props.plant.Name} //not working
                            id="broccoli"
                            onChange={event=> props.handleSelectChange(event.target)}> 
                        </input>      
                        <label className="form-check-label" for="flexCheckDefault">{props.plant.Name}</label>
                    </div>
    
                </li>
            )
        }
        


