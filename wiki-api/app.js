//jsjint esversion:6

const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const mongoose=require('mongoose');

const app=express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));   //inorder to parse our requests
app.use(express.static("public"));  //pubic directory used to store static files like images,css code


mongoose.connect("mongodb://127.0.0.1:27017/wikiDB",{useNewUrlParser:true});

const articleSchema={
  title:String,
  content:String
};
const Article=mongoose.model("Article",articleSchema);


/* requeat targetting all articles*/

app.route("/articles")
.get(function(req,res){
  Article.find({},function(err,foundArticles){
    if(!err){
      res.send(foundArticles);
      //console.log(foundArticles);
    }
    else{
      res.send(err);
    }
    });
})

.post(function(req,res){
  //console.log(req.body.title);
  //console.log(req.body.content);
  const newArticle=new Article({
    title:req.body.title,
    content:req.body.content
  });
  newArticle.save(function(err){
    if(!err){
      res.send("succesfuly added new article");
    }
    else{
      res.send(err);
    }
  });
})

.delete(function(req,res){
  Article.deleteMany({},function(err){
    if(!err){
      res.send("succesfully deleted all articles");
    }
    else{
      res.send(err);
    }
  });
});




/*app.get("/articles",);

app.post("/articles",);

app.delete("/articles",);*/



/*reqquest targetting specific article*/

app.route("/articles/:articleTitle")

  .get(function(req,res){
    Article.findOne({title: req.params.articleTitle},function(err,foundArticle){
      if(foundArticle){
        res.send(foundArticle);
      }
      else{
        res.send("No article matching that title was found.")
      }
    });
  })

  .put(function(req,res){
    Article.updateOne(
      {title:req.params.articleTitle},          // condition upon which we want to perform this updata method
      {title:req.body.title,content:req.body.content},   //actual update
      {overwrite:true},
      function(err){
        if(!err){
          res.send("succesfully updated the selcted article");
        }
      }
    );
  })

  .patch(function(req,res){
    Article.update(
      {title:req.body.articleTitle},
      {$set:req.body},
      function(err){
        if(!err){
          res.send("sucesfully updated article");
        }
        else{
          res.send(err);
        }
      }
    );
  })

  .delete(function(req,res){
    Article.deleteOne(
      {title:req.params.articleTitle},
      function(err){
        if(!err){
          res.send("Succesfully deleted the corresponding article");
        }
        else{
          res.send(err);
        }
      }
    );
  });


app.listen(3000,function(){
  console.log("server started on port 3000 ")
});
