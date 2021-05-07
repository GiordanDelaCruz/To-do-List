//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));

// Declare Global variables
let items = ["Morning Routine", "Eat Breakfast"];

// Homepage
app.get("/", function(req, res){

  // Retreive the day of the week
  let today = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  };

  // Convert today's date into a nice String
  let day = today.toLocaleDateString("en-US", options);

  // Send the day of the week to the ejs template
  res.render("list", {dayOfWeek : day, listItems : items } );
});


// Handle POST requests on list.ejs
app.post("/", function(req, res){
  var item = req.body.todoItem;

  // Add item to the items array
  items.push(item);

  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
