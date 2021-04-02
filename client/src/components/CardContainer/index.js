import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { GardenContext } from "../../Providers/GardenProvider";
import "./style.css";


//div Wrapper is CSS Grids

function CardContainer(props) {

    //Hard-Coded Version
    // const[dimensions, setDimensions] = useState({
    //     length: 3,
    //     width: 3,
    // });

    const { garden } = useContext(GardenContext); 


    return(
        <div>
        <Container id ="gardenBox">
            
            <div className = "wrapper" 
                style={{"gridTemplateRows": "repeat("+ garden.length+", 100px)",
                "gridTemplateColumns": "repeat("+ garden.width+", 100px)"}}>

                {garden.plots && garden.plots.map(plot=> (
                <div className= "plot" key={garden.plots.plot.plant.name}>  
                    Plant: {garden.plots.plot.plant.name} 
                    Max #: {garden.plots.plot.maxPlants}
                </div>
                ))}
            </div>

        </Container>
        </div>

    )

}
export default CardContainer;


    
