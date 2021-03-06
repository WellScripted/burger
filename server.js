var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Static content for the app from the "public" directory
app.use(express.static("public"));

//Parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Invoke routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start our server to begin listening to client requests
 
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });