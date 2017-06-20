const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const debug = require('debug');
const bodyParser = require('body-parser');
debugWarn = debug('warn');
debugError = debug('error');



// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

  mongoose.connect('mongodb://localhost/nodekb');
  let db = mongoose.connection;

  //check
db.once('open',function(){
  console.log('connected to mongodb');
});

db.on('error',function(err){
    console.log(err);
});
//init app
const app = express();
//brig in model
let Articles = require('./model/article');

//install the pug engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/',function(req,res){
   Articles.find({},function(err,Articles){
     if (err) {
      console.log(err);
     } else {
            res.render('index',{
            title : 'Articles database',
            article : Articles
         });
     }
   });
});
app.get('/articles/add',function(req,res){
  res.render('add_article',{
    title : 'Addingarticle'
  });
});
//Add submit route
app.post('/articles/add',function(req,res){

        let article = new Articles();
          console.log(article);
          return;
      //article.title = req.body.title;
      //article.author = req.body.author;
      //article.body = req.body.body;
});
app.listen(3000,function(){
  console.log('server is listening to the port');
});
