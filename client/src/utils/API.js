import axios from "axios";
// import Routes from "../../../../routes";

export default {
  // Gets all plants in db
  getPlants: function() {
    return axios.get("http://localhost:3001/api/plants"); //added to fix CORS access error //remove when deploying
  },

  // Get all gardens for specific user id ?????
  getGardens: function(user_id) {
    return axios.get("http://localhost:3001/api/gardens/" + user_id);
  },


// Get a Garden in the database with a specific id
  getOneGarden: function(id) {
      return axios.get("http://localhost:3001/api/gardens/" + id);
    },

  // Create (Saves) a NEW Garden to the database with a specific id
  saveGarden: function(id) {
    return axios.post("http://localhost:3001/api/gardens/" + id);
  },

   // Updates a Garden with array of plots as plants are added
   updateGarden: function(id) {
    return axios.put("http://localhost:3001/api/gardens/" + id);
  },

  deleteGarden: function(id) {
    return axios.delete("http://localhost:3001/api/gardens/" + id);
  },

  // Gets Plot Cards for a specific garden
//   getPlots: function(id) {
//     return axios.get("/api/gardens/plots" + id);
//   },

//   // Updates Plot Cards with selected plant data
//   updatePlot: function(id) {
//     return axios.put("/api/gardens/plots" + id);
//   },
};
