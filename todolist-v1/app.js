
//jshint esversion:6


const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

//console.log(date());

const app=express();

//var item="";    //it is over written the last value b/cit holds only one item
const items=["buy Food" ,"Cook Food" ,"Eat Food"];
const workItems=[];
app.set('view engine', 'ejs');    /*copied  from ejs.co document github*/

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){


// var today= new Date();
//  var currentDay=today.getDay();  /*give numbers*/
/*  if(today.getDay()===6 ||today.getDay()===0){
    res.send("ya it's the weekend");
  }
  else{
    res.send("Boo! I have to work");
  }
  */
/*  if(currentDay===6 ||currentDay===0){
      res.send("<h1>ya it's the weekend</h1>");
    }
    else{
      res.send("<h1>Boo! I have to work</h1>");
    }*/
    /* if want get multiple responses*/

  /*  if(currentDay===6 ||currentDay===0){
        res.write("<h1>ya it's the weekend</h1>");
      }
      else{
        res.write("<p> it is not weekend</p>");
        res.write("<h1>Boo! I have to work</h1>");
        res.send();
      }
    */



    /*if(currentDay===6 ||currentDay===0){
          res.sendFile(__dirname+"/weekend.html");
        }
        else{
          res.sendFile(__dirname+"/weekday.html");
        }
});*/
//var day="";
/*if(currentDay===6 ||currentDay===0){
      day="weekend";
      res.render("list", {kindOfDay:day});   //render will pass the info to list
    }
    else{
      day="weekday";
      res.render("list", {kindOfDay:day});
    }
*/
/*or*/

/*if(currentDay===6 ||currentDay===0){
      day="weekend";
    }
    else{
      day="weekday";
    }

      res.render("list", {kindOfDay:day});
});*/
/*switch(currentDay){
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tusday";
        break;
    case 3:
        day="Wednusday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    default:
       console.log("Error: current day is equall to: "+currentDay);
}   */




/*    hear module created in date.js
let today=new Date();     //var  used before

var options={
  weekday:"long",
  day:"numeric",
  month:"long"
};
let day=today.toLocaleDateString("en-US",options);
*/
  //res.render("list", {kindOfDay: day});
  //  res.render("list", {kindOfDay: day,newListItems: items}); //changed into onr render

  //let day=date();  //calling tha function which is binding above
  //const day=date.getDay();
  const day=date.getDate();



  res.render("list", {listTitle: day,newListItems: items});
});

app.post("/",function(req,res){
  //item=req.body.newItem;    //inorder to avoid scope error create variable at top
  //console.log(req.body);
  const item=req.body.newItem;
  if(req.body.list ==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
      items.push(item);
      res.redirect("/");
  }
  //let item=req.bodsy.newItem;
  //items.push(item);
  //console.log(item);
  //res.render("list",{newListItem:item});   //because of both renders we get error so redirect
  //res.redirect("/");    //route to home dirctory
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", newListItems:workItems});
});

app.post("/work",function(req,res){
  let item=req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.get("/about", function(req,res){
  res.render("about");
});

app.listen(3001,function(){
  console.log("server started on port 3001");
});
