//dependencies
const express = require("express");
const fs = require("fs");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//initialize serbver
const app = express();
const PORT = process.env.PORT || 3005;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
