const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');
const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('070ad738f20d01c4c7ab2dc36970aef3');
const MongoClient = require('mongodb').MongoClient

const app = express();

app.use(bodyParser.json());
app.use(cors());



// MongoClient.connect('mongodb://localhost:27017/beer', function (err, db) {
//   if (err) throw err
//
//   db.collection('beers').find().toArray(function (err, result) {
//     if (err) throw err
//
//     console.log(result)
//   })
// })


app.get('/beerId/:beerId', function(req,res){
  brewdb.beer.getById(req.params.beerId, {}, function(err, beer) {
    if(err) {
        console.error(err);
        res.status(500).send("An error occurred");
    } else if(beer) { // we found the beer
        res.send(beer);
    } else{
        res.status(404).send('We could not find your beer');
    }
  })
});

app.get('/beer/:token', function(req,res){
  brewdb.search.beers({q: req.params.token}, function(err, beer) {
    if(err) {
        console.error(err);
        res.status(500).send("An error occurred");
    } else if(beer) { // we found the beer
        res.send(beer);
    } else{
        res.status(404).send('We could not find your beer');
    }
  })
});

app.get('/beerNode', function(req,res){

});

app.listen(3000, function() {
    console.log("working");
})
