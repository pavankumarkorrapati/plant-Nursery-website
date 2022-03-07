var express =require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.urlencoded({ extended:true }));

app.set("view engine", "ejs");

app.get('/', function(req,res){
    res.render("landing");
})

app.listen(1800,function(){
    console.log("it has started at 1800");
})