var express = require('express');
const res = require('express/lib/response');
var app = express();

app.set('view engine','ejs');
app.get('/profile/:name',(req,res) =>{
    var object = {
        age : 29,
        occupation : 'ninja',
        favourites : ['eating','singing','coding']
    };
    res.render('trial',{person : req.params.name,object : object});
});
app.listen(4000);