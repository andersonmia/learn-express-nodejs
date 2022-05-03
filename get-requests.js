var express = require('express');

//set up an express up which can access all the functionality of express
var app = express();

/* http requests : GET, POST, DELETE, PUT
*express provides methods to respond to those requests
*app.get('route','fn'),app.post('route','fn'),app.delete('route','fn'),app.put('route','fn')
*/

//get request from user
app.get('/',(req,res) =>{
  res.send('This is the home page');
});
app.get('/contact',(req,res) =>{
  res.send('This is the contact page');
});

//route parameters (help us to get dynamic requests)
app.get('/profile/:name',(req,res) => {
  res.send('You requested to see a profile with the name ' + req.params.name);
});

//sending html pages are responses
app.get('/homepage', (req,res) =>{
  res.sendFile(__dirname + '/index.html');
});

app.get('/contactUs', (req,res) =>{
  res.sendFile(__dirname + '/contact.html');
});

// redirects
app.get('/',(req,res) =>{
  res.redirect('/homepage');
});



app.listen(3000);
console.log('Listening from port 3000');
