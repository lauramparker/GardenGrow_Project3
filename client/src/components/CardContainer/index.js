import React from "react";
import "./style.css";


//div Wrapper is CSS Grids

function CardContainer(props) {
    return(
        <div className = "wrapper">

            {props.data.map(data=> (
            <div className= "plot" key={data.listObject.name}>  
                Plant: {data.listObject.name}
            </div>
            ))}
        </div>

    )

}
export default CardContainer;


    
