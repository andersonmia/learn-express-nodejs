var express = require('express');
var app = express();
app.set('view engine','ejs');

/**instead of writing individual routes for static files
 * e.g css and images, we use built-in express middlewares to do that express.static()
 */
app.use('/assets',express.static('assets'));
/**The code above maps/directs the route (/assets/sth) to the folder assets where the static files are stored */
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

app.listen(4000);
/**app.use always has 3 params the route,folder,next
 * but above we didn't use next bcz express.static()
 * is built-in and can do that
 */
