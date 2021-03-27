import axios from "axios";

export default {
	// Gets all plants in db
	getPlants: function() {
		return axios.get("/api/plants");
	},

	// Get all gardens for specific user id ?????
	getGardens: function(user_id) {
		return axios.get("/api/gardens/" + user_id);
	},

	// Saves a NEW Garden to the database with a specific id
	saveGarden: function(id) {
		return axios.post("/api/gardens/" + id);
	},

	// Updates a NEW Garden as plot cards are filled in
	updateGarden: function(id, garden_data) {
		return axios.post("/api/gardens/data" + id, garden_data);
	},

	//   // Gets Plot Cards for a specific garden
	//   getPlots: function(id) {
	//     return axios.get("/api/gardens/plots" + id);
	//   },

//   // Updates Plot Cards with selected plant data
//   updatePlot: function(id) {
//     return axios.put("/api/gardens/plots" + id);
//   },
};