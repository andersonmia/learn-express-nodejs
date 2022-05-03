var express = require('express');
var app = express();

//telling express that we want to use ejs as our view engine
app.set('view engine','ejs');

/** by default when we request views or templates
 * express looks in the '/views' folder so create the view folder
 */
app.get('/home',(req,res) =>{
    res.render('index');
});
app.get('/contact',(req,res) =>{
    res.render('contact');
});
app.get('/profile/:name', (req,res) =>{
    var data = {
        age : 29,
        job : 'ninja',
        favourites : ['eating','fighting','singing']
    };
    res.render('profile',{person:req.params.name,data:data});//we pass data to a view through an object then embed it to the ejs file

});

app.listen(2000);