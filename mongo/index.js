const MongoClient = require('mongodb').MongoClient;// connexion à mongodb
const url = 'mongodb://127.0.0.1:27017/tutorial';


MongoClient.connect(url, { useNewUrlParser: true }, function(err, db){
    if (err) throw err;
  console.log("Database created!");
  db.close();
})