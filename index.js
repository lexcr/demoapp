const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

//import router and then app.use instead const app, debajode



const routes = require('./routes/api');


// setting express app
// pass request after get
//req contiene informacion del request  parameter
//res es para enviar algo que queremos al cliente
const app = express();

//usando mongodb

mongoose.connect("mongodb://localhost/newdatabase", { useMongoClient: true });
//mongoose.connect("mongodb://localhost/facebook", { useMongoClient: true });
mongoose.Promise = global.Promise;

app.use(express.static('public'));

//body parser middleware

app.use(bodyParser.json());

app.use('/api',routes);

app.use(function(err, req, res, next){
    console.log(err);
    res.send({error:err.message});
})

/*  app.get('/api', function(req,res){
    console.log('GET request');
    res.send({name:'Mario'});
 }); */

// escuchando requests en  el puerto 4000 usando process.env.port

 app.listen(process.env.port || 4000, function(){
    console.log('Escuchando requests ');

 });

