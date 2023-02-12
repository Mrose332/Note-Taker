const fs = require("fs");
const path = require("path");

module.exports = function(app){
    app.get("/api/notes", (req, res) => {
	    const db = require('../db/db.json');
		return res.send(db)
      });

	app.post('/api/notes', (req, res) => {
		// Implement create note logic here
	})

	app.delete('/api/notes', (req, res) => {
		// Implement the delete note logic here
	})
}



    
    
    



















