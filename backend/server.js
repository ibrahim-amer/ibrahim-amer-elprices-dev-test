
var express = require('express');
const config = require('./config');
const productsManager = require('./productsManager');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res){
   res.send("Hello ibrahim!");
});

app.get('/getallproducts', function (req, res) {
    productsManager.getAllProducts(function (products) {
        res.send(products);
    });
});


app.get('/getallproductsbyname/:name', function (req, res) {
    productsManager.getProductsByName(req.params.name, function (products) {
        res.send(products);
    });
});


  

app.listen(4000);