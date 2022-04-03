var express =require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/user");

var app = express();

app.use(bodyParser.urlencoded({ extended:true }));

mongoose.connect("mongodb://127.0.0.1:27017/plant-nursery",{ useNewUrlParser: true,useUnifiedTopology: true });


app.set("view engine", "ejs");

app.get('/', function(req,res){
    res.render("landing");
})

app.get('/login', function(req,res){
    res.render("login");
})

app.get('/register',function(req,res){
    res.render("register");
})

app.post('/redirect',function(req,res,){
    res.render("redirect");
})

app.get('/user',function(){
    User.find({},function(err,data){
        if(err)
        console.log(err)
        else 
        res.render("user",{user:data});
    });
    
})

app.listen(1700,function(){
    console.log("it has started at 1700");
})