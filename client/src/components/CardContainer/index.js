import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { GardenContext } from "../../Providers/GardenProvider";
import "./style.css";


//div Wrapper is CSS Grids

function CardContainer( {children} ) {

    //Hard-Coded Version.. Need to DIVIDE length & WIDTH / 2 for 2 x 2 Plots
    // const[dimensions, setDimensions] = useState({
    //     length: 3,
    //     width: 3,
    // });

    const { garden } = useContext(GardenContext); 


    return(
        <div>
        <Container id ="gardenBox"> {children}
            
            <div className = "wrapper" 
                style={{"gridTemplateRows": "repeat("+ garden.length+", 100px)",
                "gridTemplateColumns": "repeat("+ garden.width+", 100px)"}}>

                {garden.plots && garden.plots.map(plant => (
                <div className= "plot" key={plant.Name}>  
                    Plant: {plant.Name} 
                    {/* Max #: {maxPlants} */}
                </div>
                ))}
            </div>

        </Container>
        </div>

    )

}
export default CardContainer;


    
