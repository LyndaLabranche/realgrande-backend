const express =require('express');
const {Houses, Users, Enquiries} = require('../models/allSchemas')
const allroutes = express.Router();
let multer = require('multer');
let upload = multer();


allroutes.get('/', (req, res) => {
    console.log("reached root")
    res.send('Reached root of realgrande')
})

allroutes.get('/houses', async (req, res) => {
    console.log("All houses")
    try{
        let houses = await Houses.find({});
        console.log(houses)
         res.send(houses)
    }catch(err){
        res.status(500).send("error with fetching houses")
    } 
})

allroutes.post('/signup', upload.none(), async (req, res) => {
    try{
        console.log(req.body)
        let newUser = new Users(req.body)
        let user = await newUser.save();
        res.send(user)
    }catch(err){
        res.status(500).send("error with saving new user")
    } 
})

allroutes.post('/login', upload.none(), async(req, res) => {
    try{
        console.log(req.body)
        let response = await Users.find({email: req.body.email, password: req.body.password});
        console.log('response',response)
        res.send(response)
    }catch(err){
        res.status(500).send("error with saving new user")
    } 
})


allroutes.get('/enquiries', async (req, res) => {
    console.log("All enquiries")
    try{
        let enquiries = await Enquiries.find({});
        console.log(enquiries)
         res.send(enquiries)
    }catch(err){
        res.status(500).send("error with fetching enquiries")
    } 
})

allroutes.post('/enquiry', upload.none(), async (req, res) => {
    try{
        console.log(req.body)
        let newEnquiry = new Enquiries(req.body)
        let enquiry = await newEnquiry.save();
         res.send(enquiry)
    }catch(err){
        res.status(500).send("error with saving new user")
    } 
})




module.exports = allroutes;