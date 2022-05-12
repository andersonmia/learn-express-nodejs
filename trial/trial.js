var express = require('express');
var app = express();
app.set('view engine','ejs');
app.use('/css',express.static('css'));
app.get('/home',(req,res) =>{
  res.render('home');
});
app.get('/contact',(req,res) =>{
  res.render('contact',{qs: req.query});
});
app.get('/profile/:name',(req,res) =>{  
  var attributes = {
    skincolour: 'dark',
    eyecolour: 'brown',
    haircolour: 'black',
    agerange: 'teenager',
    occupation: 'ninja',
    favourites: ['Eating','Singing','Coding','Sleeping','Swimming']
  };
  res.render('profile',{person: req.params.name,attributes: attributes});
});
app.listen(4020);
console.log('Listening from port 4020');