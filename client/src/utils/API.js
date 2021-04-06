import axios from "axios";

const API = {
  // Create user
  createUser: function({lastName, firstName, userName, email, profilePicture}) {
    return axios.post("/api/users", {lastName, firstName, userName, email, profilePicture})
  },
  // Get user
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Gets all plants in db
  getPlants: function() {
    return axios.get("/api/plants"); 
  },
	// Get all gardens (grabs use-specific gardens when user is logged in)
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
  saveGarden: function({userId, gardenName, length, width}) {
    return axios.post("/api/gardens", {userId, gardenName, length, width} );
  },

   // Updates a Garden with array of plots as plants are added
   updateGarden: function(id, data) {
    return axios.put("/api/gardens/" + id, data);
  },

  deleteGarden: function(id) {
    return axios.delete("/api/gardens/" + id);
  },

}

export default API;
