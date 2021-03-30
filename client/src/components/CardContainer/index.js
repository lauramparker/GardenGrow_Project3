import React, { useState } from "react";
import "./style.css";


//div Wrapper is CSS Grids

function CardContainer(props) {

    //correct version - need props to pass correctly from getOneGarden id
    // const[dimensions, setDimensions] = useState({
    //     length: props.length,
    //     width: props.width,
    // });

    //placeholder
    const[dimensions, setDimensions] = useState({
        length: 3,
        width: 3,
    });


    return(
        <div>
            <div className = "wrapper" 
                style={{"grid-template-rows": "repeat("+ dimensions.length+", 100px)",
                "grid-template-columns": "repeat("+ dimensions.width+", 100px)"}}>

                {props.data.map(data=> (
                <div className= "plot" key={data.listObject.name}>  
                    Plant: {data.listObject.name}
                </div>
                ))}
            </div>
        </div>

    )

}
export default CardContainer;


    
