const express = require('express');
const app = express();
const mongoose = require('mongoose');
const allroutes = require('./routes/allRoutes')
const cors = require('cors');
require('dotenv').config()
const PORT = process.env.port || 4000;


let db = async() => {
    try{
        await mongoose.connect(process.env.connectionString)
         console.log("Connected to MongoDB")
    }catch(err){
        console.log("Error connecting to MongoDB", err)
        res.status(500).send(err)
    }
}

db();

app.use(express.json())

app.use(cors(process.env.corspolicy));


app.use((req,res,next) => {
    console.log('Request received on: ' + new Date().toString());
    next();
})


app.use('/', allroutes)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))