// dependencies
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Routes
require('./routes/curso.routes.js')(app);

// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado");  
    
    // listen on port 3000
    app.listen(config.serverport, () => {
        console.log("Server na porta 3000");
    });
    
}).catch(err => {
    console.log('Não Conectado', err);
    process.exit();
});


// default route
app.get('/', (request, response) => {
    response.json({"message": "TESTE"});
});