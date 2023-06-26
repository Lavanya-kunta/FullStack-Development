
//jshint esversion:6   <!-- for const-->
const express=require("express");
const app=express();
app.get("/", function(request,response){
  //console.log(request); //this time we not get any response get console.error();
//  response.send("hello");
response.send("<h1> helo world</h1>");
});

app.get("/contact",function(req,res){
  res.send("contact me at: angela@gmail.com");
});
app.get("/about",function(req,res){
  res.send("<h1>Hello Iam Lavanya</h1><br><p>iam eager to become a fullstack webdeveloper</p>");
});
app.get("/hobbies",function(req,res){
  res.send("<ul><li>code</li><li>coffie<</ul>");
});
app.get("/intrest",function(req,res){
  res.send("<ul><li>sleep</li><li>movie<</ul>");
});
app.listen(3000,function(){
  console.log("server started on port 3000");
});
