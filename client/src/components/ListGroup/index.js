import React from "react";
// import React, {useState} from "react";
// import {Container} from "react-bootstrap";
// import Table from 'react-bootstrap/Table';
import "./style.css";


export function ListGroup({children}) {

    return(
        <div className="list-overflow-container" id="List">
        <ul className="list-group">{children} </ul>
        </div>
        );
    }


    
export function Item(props) {

    // const[checked, setChecked] = useState([])  //for future check uncheck

            return(

                <li className="list-group-item" >
                    
                    <div class="form-check">
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            // defaultChecked={props.listObject.checked}
                            value={props.plant.Name} 
                            id="checkBox"
                            // onClick={() => setChecked(!checked)}
                            onChange={props.handleSelectChange}
                            > 
                        </input>      
                        <label className="form-check-label" for="flexCheckDefault">{props.plant.Name}</label>
                    </div>
    
                </li>
            )
        }
        


