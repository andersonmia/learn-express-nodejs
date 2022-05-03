var express = require('express');
const { listen } = require('express/lib/application');
var app = express();
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
app.get('/contact',(req,res) =>{
    /** localhost:2000/contact/?dept=marketing&name=joe
     * =============CONSOLE================
     * {dept: 'marketing', name: 'joe'}
     */
    res.render('contact',{qs:req.query});
    //gets the info frm the query and render
});
app.get('/home',(req,res) =>{
  res.render('index');
})
app.listen(2000);
