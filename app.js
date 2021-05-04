//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  // Retreive the day of the week
  var d = new Date();
  var day =  d.getDay();
  var strDayOfWeek;

  if( day == 0){
    // Sunday
    strDayOfWeek = "Sunday";

  }else if (day == 1){
    // Monday
    strDayOfWeek = "Monday";

  }else if (day == 2){
    // Tuesday
    strDayOfWeek = "Tuesday";

  }else if (day == 3){
    // Wednesday
    strDayOfWeek = "Wednesday";

  }else if (day == 4){
    // Thursday
    strDayOfWeek = "Thursday";

  }else if (day == 5){
    // Friday
    strDayOfWeek = "Friday";

  }else if (day == 6){
    // Saturday
    strDayOfWeek = "Saturday";
  }

  // Send the day of the week to the ejs template
  res.render("dayOfWeek", {dayOfWeek : strDayOfWeek} );
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
