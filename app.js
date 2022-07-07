const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
const trySchema = new mongoose.Schema({
    name:String
});
const item = mongoose.model("task",trySchema);
const todo = new item({
    name:"Create some videos"
});
const todo2 = new item({
    name:"learn dsa"
});
const todo3 = new item({
    name:"learn react"
});
//todo.save();
//todo2.save();
//todo3.save();

app.get("/",function(req,res){
    item.find({},function(err,foundItems){
        if(err){
            console.log(err);
        }
        else{
            res.render("list",{dayej : foundItems});
        }
    });
    todo3.save();
    res.redirect("/");
});
app.post("/",function(req,res){
    const itemName = req.body.elel;
    const todo3 = new item({
        name:itemName
    });
});
app.post("/delete",function(req,res){
    const checked = req.body.checkbox1;
    item.findByIdAndRemove(checked,function(err){
        if(!err){
            console.log("deleted");
            res.redirect("/");
        }
    })
});
app.listen("8000",function(){
    console.log("server is running");
});