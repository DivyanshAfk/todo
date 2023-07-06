const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
var items = [];
app.set("view engine", "ejs");

var today = new Date();
var currentDay = today.getDay();
var day = "";


app.get("/", function (req, res) {
 var options ={
    weekday : "long",
    day:"numeric",
    month:"long"
 };
  day = today.toLocaleDateString("en-US",options); 
  res.render("list", {kindOfDay: day, 
    newListItems  : items })
});

app.post("/",function(req,res){
  var item = (req.body.newItem)
items.push(item)
  res.redirect("/");
})


app.listen(3000, function () {
  console.log("The server is running");
});