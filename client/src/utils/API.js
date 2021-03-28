import axios from "axios";
// import Routes from "../../../../routes";

const API = {
  // Create user
  createUser: function({lastName, fistName, userName, email, profilePicture}) {
    return axios.post("/api/users", {lastName, fistName, userName, email, profilePicture})
  },
  // Gets all plants in db
  getPlants: function() {
    return axios.get("/api/plants"); //added to fix CORS access error //remove when deploying
  },

	// Get all gardens for specific user id ?????
	getGardens: function() {
		return axios.get("/api/gardens");
	},


// Get a Garden in the database with a specific id
  getOneGarden: function(id) {
      return axios.get("/api/gardens/" + id);
    },

  // Get a plant with a specific id
  getOnePlant: function(id) {
      return axios.get("api/plants/" + id)
    },

  // Create (Saves) a NEW Garden to the database
  saveGarden: function({gardenName, length, width}) {
    return axios.post("/api/gardens", {gardenName, length, width} );
  },

   // Updates a Garden with array of plots as plants are added
   updateGarden: function(id) {
    return axios.put("/api/gardens/" + id);
  },

  deleteGarden: function(id) {
    return axios.delete("/api/gardens/" + id);
  },

}

export default API;
