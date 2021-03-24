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


export function Item({props}, {children}) {

            return(

                <li className="list-group-item" > {children}
                    
                    <div class="form-check">
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            value="" 
                            id="flexCheckDefault"
                            onChange={event=> props.handleSelectedPlant(event.target)}>
                        </input>      
                        <label className="form-check-label" for="flexCheckDefault">{props.plant.name}</label>
                    </div>
    
                </li>
            )
        }
        


