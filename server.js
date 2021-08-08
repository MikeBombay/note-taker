//dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db")

//initialize app, data parsing
const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//push new note 
app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("Added note: "+newNote.title);
});

//updates db file.json file
function updateDb() {
    fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
        if (err) {
            console.log("error")
            return console.log(err);
        }})};
//listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
