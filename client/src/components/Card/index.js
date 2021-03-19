import React from "react";
import "./style.css";

//grid is  made up of individual plant cards with plant images
//ternary below gives default image if no plant image available
//button can be removed - need some click handler functionality to associate selected plants with selected garden square
function Card(props) {

    //useState here for updating the plant image
    const plant= this.props.plants.map(plant => {
        
        return (
            <div className="card" style={{ width:"40px", height:"40px"}}>
                <div class="card-body">
                    <div className="img-container">
                        <img className="card-img-top" alt="Plant Image" src={plant.plantImg ? (plant.plantImg) : 
                            ("https://thumbs.dreamstime.com/b/basic-cmyk-202827463.jpg")}  />
                    </div>
                    <button type="button" class="btn btn-primary">Plant Me!</button>
                </div>
            </div>

        )
    });
}

export default Card;