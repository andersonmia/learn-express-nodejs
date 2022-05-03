var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//it is a middleware to handle post requests it parses the data and can be accessed through the req.body
var urlencodedParser = bodyParser.urlencoded({extended: true});
//if you set extended to false, you get an object of null prototype
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.get('/contact',(req,res) =>{
  res.render('contact',{qs:req.query});
});
app.post('/contact',urlencodedParser, (req,res) =>{
  console.log(req.body);
  res.render('success',{data: req.body});
});
app.listen(4000);
console.log('listening from port 4000');
