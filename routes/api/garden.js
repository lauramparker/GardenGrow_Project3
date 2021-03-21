const db = require("../../models");
const router = require("express").Router(); 

module.exports = app => {
	// get the user's gardens
	app.get("/api/gardens", (req, res) => {

	});

	// get a single garden by id
	app.get("/api/gardens/:id", (req, res) => {

	});
	// post a new garden
	app.post("/api/gardens", (req, res) => {

	});

	// update an existing garden
	app.update("/api.gardens/:id", (req, res) => {

	});

	// delete a garden
	app.delete("/api/gardens/:id", (req, res) => {
        
	});
};