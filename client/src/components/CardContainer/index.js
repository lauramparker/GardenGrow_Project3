import React, { useState } from "react";
import { Container } from "react-bootstrap";
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
        <Container id ="gardenBox">
            
            <div className = "wrapper" 
                style={{"gridTemplateRows": "repeat("+ dimensions.length+", 100px)",
                "gridTemplateColumns": "repeat("+ dimensions.width+", 100px)"}}>

                {props.data.map(data=> (
                <div className= "plot" key={data.listObject.name}>  
                    Plant: {data.listObject.name}
                </div>
                ))}
            </div>

        </Container>
        </div>

    )

}
export default CardContainer;


    
