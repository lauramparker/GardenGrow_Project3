import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { GardenContext } from "../../Providers/GardenProvider";
import "./style.css";

//div Wrapper is CSS Grids
function CardContainer({ children }) {
    const { garden } = useContext(GardenContext);

    const dividedLength = (garden.length)/2;
    const dividedWidth = (garden.width)/2;

    return (
        <Container id="gardenBox"> {children}
            <div className="wrapper"
                style={{
                    "gridTemplateRows": "repeat(" + dividedLength + ", 100px)",
                    "gridTemplateColumns": "repeat(" + dividedWidth + ", 100px)"
                }}>
                {garden.plots && garden.plots.map(plant => {
                    return (
                        <div className="plot" key={plant._id}>
                            {plant.Name}
                            <br></br>
                            <br></br>
                            max # of plants: {plant.minPlants}
                        </div>
                    )
                })}
            </div>
            <div className = "fixedBox">
                {garden.plots && garden.plots.map(plant  => {
                        return (
                                <p key={plant._id}>
                                    {plant.compatiblePlants}
                                </p>
                        )
                }).reverse()}
            </div>
        </Container>
    )
}
export default CardContainer;



