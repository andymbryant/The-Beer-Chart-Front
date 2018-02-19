const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser');
const BreweryDb = require('brewerydb-node');
const brewdb = new BreweryDb('070ad738f20d01c4c7ab2dc36970aef3');

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/beer/:beerId', function(req,res){
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

app.get('/beer/:type', function(req,res){
  brewdb.beer.find({name: req.params.type}, function(err, beer) {
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



app.listen(3000, function() {
    console.log("working");
})
