const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express()
const party = process.env.PARTY || 4001;
app.use(bodyParser.json());

//connection to the database
massive(process.env.CONNECTION_STRING)
.then( (dbInstance) => {app.set('db', dbInstance)
console.log("Connected to the DB") } )
.catch( err => {console.log(err.message)} );


//get all products
app.get( '/api/inventory', controller.getInventory )

app.post('/api/product', controller.addProduct)




app.listen(party, () => {
    console.log(`Server is doing something strange on port: ${party}`)
} )