import axios from "axios";
// import Routes from "../../../../routes";

export default {
  // Gets all plants in db
  getPlants: function() {
    return axios.get("/api/plants"); //added to fix CORS access error //remove when deploying
  },

  // Get all gardens for specific user id ?????
  getGardens: function(user_id) {
    return axios.get("/api/gardens/" + user_id);
  },


// Get a Garden in the database with a specific id
  getOneGarden: function(id) {
      return axios.get("/api/gardens/" + id);
    },

    // Get a plant with a specific id
    getOnePlant: function(id) {
      return axios.get("api/plants/" + id)
    },

  // Create (Saves) a NEW Garden to the database with a specific id
  saveGarden: function(garden) {
    return axios.post("/api/gardens", garden );
  },

   // Updates a Garden with array of plots as plants are added
   updateGarden: function(id, data) {
    return axios.put("/api/gardens/" + id, data);
  },

  deleteGarden: function(id) {
    return axios.delete("/api/gardens/" + id);
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
