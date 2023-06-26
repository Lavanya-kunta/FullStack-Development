//jshint esversion:6
/*using native driver*/
/*const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const url='mongodb://localhost:27017';

const dbname='fruitsDB';
const client=new MongoClient(url,{useNewUrlParser: true});

client.connect(function(err){
  assert.equal(null,err);
  console.log("connected succesfully to server");
  const db=client.db(dbname);
  findDocuments(db,function(){
      client.close();
  });
});

const insertDocuments=function(db,callback){
  const colection=db.collection('fruits');
  collection.insertMany([
    {
      name:"apple",
      score:8,
      review:"great"
    },
    {
      name:"orange",
      score:6,
      review:"kind-sour"
    },
    {
      name:"banana",
      score:9,
      review:"good"
    }
  ],function(err,result){
    assert.equal(err,null);
    assert.equal(3,result.result.n);
    assert.equal(3,result.ops.length);
    console.log("inserted 3 documents into collection");
    callback(result);
  });
};

const findDocuments=function(db,callback){
  const collection=db.collection('fruits');
  collection.find({}).toArray(function(err,fruits){
    assert.equal(err,null);
    console.log("found the following records");
    console.log(fruits);
    callback(fruits)
  });
}
*/













/*using mangoos*/
const mongoose=require('mongoose');
//mongoose.connect("mongodb://localhost:27017/fruitsDB");
mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB",{useNewUrlParser:true});

const fruitSchema=new mongoose.Schema({
  //name:String,
  name:{
    type:String,
    //required:[true,"pleace check your data entry, no name specified"] //true or 1  ,msg optional
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit=new Fruit({
  //name:"apple",
  rating:8,      //if it is greater then 10,below 1 get valdation error
  review:"great"
});
//fruit.save();


const personSchema=new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});

const Person=mongoose.model("Person",personSchema);

//creation of new fruit

const pineapple=new Fruit({
  name:"Pineapple",
  rating:9,
  review:"greate fruit"
});
//pineapple.save();


//adding mango is favourite fruite fruit of john
const mango=new Fruit({
  name:"Mango",
  rating:6,
  review:"sweet"
})
//mango.save();

Person.updateOne({name:"john"},{favouriteFruit:mango},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("succesfully update the document");
  }
});






//creation of new person
const person=new Person({
  name:"Amy",
  age:12,
  favouriteFruit:pineapple
});

//person.save();


/*const person=new Person({
  name:"john",
  age:30
});*/

//person.save();


const kiwi=new Fruit({
  name:"Kiwi",
  rating:10,
  review:"best"
});

const orange=new Fruit({
  name:"Orange",
  rating:4,
  review:"too sour"
});
const banana=new Fruit({
  name:"Banana",
  rating:3,
  review:"weired texture"
});

/*Fruit.insertMany([kiwi,orange,banana],function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("succesfully saved all the fruits to froitsDB");
  }
});
*/


/*imany times insert so it commented*/
/*Fruit.insertMany([kiwi,orange,banana]).then(function(err){
    console.log(err);
  })
  .catch(function(){
    console.log("succesfully saved all the fruits to froitsDB");
  });*/


  /*before runnimg this comment to insert function*/

//reading from database

/*const findDocuments=function(db,callback){
  const collection=db.collection('fruits');
  collection.find({}).toArray(function(err,fruits){
    assert.equal(err,null);
    console.log("found the following records");
    console.log(fruits);
    callback(fruits)
  });
}*/


//reading from database  not worked
Fruit.find(function(err,fruits){
 if(err){
   console.log(err);
 } else{
   //console.log(fruits);
   mongoose.connection.close();
   fruits.forEach(function(fruit){
     console.log(fruit.name);
   });
 }
});



 /*Fruit.updateOne({_id:"6481643e62997510a9cafa47"}, {name:"peach"}, function(err){
  if(err){
    console.log(err);
  } else{
    console.log("succesfully updated the document");
  }
});
*/
/*Fruit.deleteOne({name:"peach"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("succesfully deleted the document");
  }
});
*/
/*Person.deleteMany({name:"john"},function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("deleted all documents sucessfully");
  }
});
*/




/*Fruit.deleteOne({_id:"64817990c99b9d1cc8207a29"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("succesfully deleted the document");
  }
});*/
