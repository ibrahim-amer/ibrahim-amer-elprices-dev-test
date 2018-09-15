var dbConnectionString = 'mongodb://127.0.0.1:27017/brantu';
var productsCollectionName = 'product';
var productSchema = 
{
    name : String, 
    image : String, 
    prince : Number, 
    category : {
        id : Number, 
        name : String
    }, 
    brand : String
}


exports.dbConnectionString = dbConnectionString;
exports.productsCollectionName = productsCollectionName;
exports.productSchema = productSchema;