import React from "react";
import PropTypes from "prop-types";
import "./style.css";


//ternary below gives default image if no plant image available
//commented out handleCardSubmit and removed button 0 sholdn't need this

function Card({garden_data}) {
        
	return (
		<div className="card" style={{ width:"40px", height:"40px"}}>
			<div className="card-body">
				<div className="img-container">
					<img className="card-img-top" alt="Plant Image" src={garden_data.cardState.plantImg ? (garden_data.cardState.plantImg) : 
						("https://thumbs.dreamstime.com/b/basic-cmyk-202827463.jpg")}  />
				</div>
				{/* <button type="button" class="btn btn-primary" onClick={handleCardSubmit}>Plant Me!</button> */}
			</div>
		</div>

	);
}

Card.propTypes = {
	garden_data: PropTypes.shape({
		cardState: PropTypes.shape({
			plantImg: PropTypes.string   
		})
	}) 
};

Card.defaultProps = {
	garden_data: {}
};

export default Card;