const {urlencoded} = require('express');
const express = require('express');
const app = express();


// 1-Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json())
//____________________________________________________________


// 2- Set Static Files
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));
//____________________________________________________________


// 3- Settings
app.set('views', './public/views')
app.set('view engine', 'ejs');
const bcryptjs = require('bcryptjs'); //Call encryption module
//____________________________________________________________


// 4- Import Routes
const partRoutes = require("./public/routes/router");
//____________________________________________________________

// 5- Routes
app.use('/', partRoutes);
//____________________________________________________________


app.listen(3309, (req, res)=>{
    console.log("");
    console.log("-------------------------------------------");
    console.log("SERVER RUNNING IN http://localhost:3310");
    console.log("SERVER RUNNING IN http://localhost:3309");
});



// https://www.solumedia.com.ar/radios/8682/index.html pagina radio 