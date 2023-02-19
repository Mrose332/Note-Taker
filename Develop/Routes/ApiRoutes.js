const fs = require("fs");
const path = require("path");

const db = require('../db/db.json');

module.exports = function(app){
    app.get("/api/notes", (req, res) => {
		
		const data = fs.readFileSync('./db/db.json', 'UTF-8');
	
		res.send(data)
      });

	app.post('/api/notes', (req, res) => {
		
		const savedNotes = fs.readFileSync('./db/db.json', 'UTF-8');
	
		const data = JSON.parse(savedNotes);
		
		data.push(req.body)
		
		fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(data));
	
		res.send(JSON.stringify(data))
	})


}

    
    
    



















