const   express     = require('express'),
        app         = express(),
        bodyParser  = require('body-parser'),
        routes      = require('./routes');
    
//-----------------------------------
//      Enviornment Variables
//-----------------------------------
const PORT = process.env.PORT || 3000;


//------------------------------------
//      Middlewares
//------------------------------------
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//-----------------------------------
//      Routes
//-----------------------------------
app.use(routes);


//-----------------------------------
//      App Listener
//-----------------------------------
app.listen(PORT, function(req,res){
    console.log(`The Server is running on https://localhost:${PORT}`);
})