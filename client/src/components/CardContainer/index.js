import React from "react";
// import { Col, Row  } from "react-bootstrap";  //{Grid?}
import CardColumns from "react-bootstrap/CardColumns"; 
import Cards from "../Card";
import "./style.css";


//for the number of total_plots, create a card
function CardContainer(props) {
    
    return (
        <div> 
            <CardColumns>
            
                {props.data.map(data=> (
                    <Cards key={data.Name}
                        name={data.Name}
                        spacing={data.spacing}
                        harvest={data.harvest}
                        image={data.image}
                    >
                    </Cards>
                    
                ))}
                
            </CardColumns>
            <button onClick={props.handleGardenSubmit}>Save Garden</button>
        </div>
    )

};

export default CardContainer;
