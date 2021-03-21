import React from "react";
import "./style.css";

//grid is  made up of individual plant cards with plant images
//ternary below gives default image if no plant image available
//button can be removed - need some functionality to associate selected plants with selected garden square
function Card({plants, handleCardSubmit}) {

    const plant= plants.map(plant => {
        
        return (
            <div className="card" style={{ width:"40px", height:"40px"}}>
                <div class="card-body">
                    <div className="img-container">
                        <img className="card-img-top" alt="Plant Image" src={plant.plantImg ? (plant.plantImg) : 
                            ("https://thumbs.dreamstime.com/b/basic-cmyk-202827463.jpg")}  />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={handleCardSubmit}>Plant Me!</button>
                </div>
            </div>

        )
    });
}

export default Card;