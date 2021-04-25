const mongoose = require('mongoose');

let db = 'EmpleosDB';
let port = '27017';
let host = 'localhost';
class Database {
    constructor () {
            mongoose.connect(`mongodb://user1:empleadisimohn@empleosdb-shard-00-00.ar2xk.mongodb.net:27017,empleosdb-shard-00-01.ar2xk.mongodb.net:27017,empleosdb-shard-00-02.ar2xk.mongodb.net:27017/EmpleosDB?replicaSet=atlas-w8jaz7-shard-0&ssl=true&authSource=admin`,
                { useNewUrlParser: true, useUnifiedTopology: true }
            )
            //mongoose.connect(`mongodb+srv://empleadisimohn:empleadisimohn@empleosdb.ar2xk.mongodb.net/test`, { useNewUrlParser: true, useUnifiedTopology: true })
            //mongoose.connect(`mongodb://${host}:${port}/${db}`, {useNewUrlParser:true, useUnifiedTopology:true})
            .then(result => console.log(`Se conectó a MongoDB`))
            .catch(error => console.log(error));
        }
}

module.exports = new Database();