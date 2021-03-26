import React from "react";
// import {Col} from "react-bootstrap";  //{Grid?}
import Card from "react-bootstrap/Card"; 
import "./style.css";



function Cards({handleCardSubmit}) {
        
        return (

            <Card className="plot-card">
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/basic-cmyk-202827463.jpg" alt="plant graphic"/>
                <Card.Body>
                <button type="button" class="btn btn-success" onClick={handleCardSubmit}><small>Plant Plot!</small></button>
                </Card.Body>
            </Card>
      
     
            
//  {/* <img className="card-img-top" alt="Plant Image" src={garden_data.cardState.plantImg ? (garden_data.cardState.plantImg) : 
// ("https://thumbs.dreamstime.com/b/basic-cmyk-202827463.jpg")}  /> */ //codeblock for PlantImage

        )
}

export default Cards;