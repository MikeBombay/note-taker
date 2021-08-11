//dependencies
const router = require("express").Router();
const fs = require("fs");

//reads notes from db.json and returns 
router.get("/notes", (req, res) => {
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  return res.json(notes);
});

//post new note to page, assign id, pushes to variable and writes to db
//**additional note: I installed uuid and it seems to be automatically applying unique IDs 
//**to my notes, which seems to be over-riding what I have coded here, this seems like a
//*good problem to have so I lef it in
router.post("/notes", (req, res) => {
  let newNote = req.body;
  newNote.id = notes.length.toString();
  let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  notes.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  return res.json(notes);
});
 //deletes note
 router.delete("/notes/:id", (req, res) => {
    let deleteNote = req.params.id;
    let arr = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    //new array created/written without 
    let arr2 = arr.filter((file) => file.id !== deleteNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(arr2));
    return res.json(arr2);
  });
 

module.exports = router;