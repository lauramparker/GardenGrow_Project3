import React from "react";
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
                        <input 
                            className="form-check-input"
                            type="checkbox" 
                            value={props.garden.gardenName} 
                            // id={props.plant._id} //this doesn't work in input
                            onChange={props.handleRenderGarden} //Render Garden info?
                            > 
                        </input>      
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            <span><strong>{props.garden.gardenName}</strong></span><br></br>
                            {/* <span>Plant Date: {props.garden.date}</span> */}
                            <small>length: {props.garden.length} ft & </small>
                            <small>width: {props.garden.width} ft</small>
                            <small>id: {props.garden._id}</small> 
                            </label>
                    </div>

                    <button className="btn" id="deleteBtn" value={props.garden._id} onClick={props.handleDelete}>
                     Delete
                    </button>
                </li>
            )
        }
        


