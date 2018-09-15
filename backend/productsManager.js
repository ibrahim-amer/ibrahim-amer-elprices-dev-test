var mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbConnectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection successfull!");
});
var productSchema = new mongoose.Schema(config.productSchema, { collection: config.productsCollectionName });
productSchema.statics.findByName = function(name, cb) {
    return this.find({ name: new RegExp(name, 'i') }, cb);
  };

  var product = mongoose.model(config.productsCollectionName, productSchema);

  function getAllProducts(cb) {
    product.find({}, function (err, products) {
        cb(products);
    })
  }


  function getProductsByName(name, cb) {
    product.findByName(name, function(err, products) {
        cb(products);
      });
  }

  exports.getAllProducts = getAllProducts;
  exports.getProductsByName = getProductsByName;
  