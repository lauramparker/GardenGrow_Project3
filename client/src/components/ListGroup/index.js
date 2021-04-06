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

                <li className="list-group-item" >
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <span><strong>{props.garden.gardenName}</strong></span><br></br>
                            {/* <span>Plant Date: {props.garden.date}</span> */}
                            <small>length: {props.garden.length} ft & </small>
                            <small>width: {props.garden.width} ft</small>
                            </label>
                    </div>

                    <button style={{backgroundColor:"#F2B199", color:"white"}} className="btn" id="deleteBtn" value={props.garden._id} onClick={props.handleDelete}>
                     Delete
                    </button>
                </li>
            )
        }
        


