const fs = require("fs");
const path = require("path");

const db = require('../db/db.json');

module.exports = function(app){
    app.get("/api/notes", (req, res) => {
		// Read data in realtime from the file
		const data = fs.readFileSync('./db/db.json', 'UTF-8');
		// Send data back to server
		res.send(data)
      });

	app.post('/api/notes', (req, res) => {
		// Read the JSON file as UTF8 to get current notes
		const savedNotes = fs.readFileSync('./db/db.json', 'UTF-8');
		// Parse the data to convert from string to JSON
		const data = JSON.parse(savedNotes);
		// Add the note to the data
		data.push(req.body)
		// Write the new data to the file to override
		fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
		// Send updated data back to server
		res.send(JSON.stringify(data))
	})


}

    
    
    



















