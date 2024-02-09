const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    address: {
      "type": "String",
      "required": true,
    },
    county: {
      "type": "String",
      "required": true,
    },
    description: {
      "type": "String",
       "required": true,
    },
    price: {
      "type": "Number",
      "required": true,
    },
    photo: {
      "type": "String",
      "required": true,
    }
  })

  const userSchema = new mongoose.Schema(
    {
    "name": {
      "type": "String",
      "required": true
    },
    "email": {
      "type": "String",
      "required": true,
      "unique": true
    },
    "phone": {
      "type": "String",
      "required": true
    },
    "password": {
      "type": "String",
      "required": true
    },
  "role": {
    "type": "String",
    "required": true,
    "default": "customer"
  }
  })

  const enquirySchema = new mongoose.Schema({
  "address": {
    "type": "String",
    "required":true
  },
  "name": {
    "type": "String",
    "required": true,
  },
  "email": {
    "type": "String",
    "required": true
  },
  "phone": {
    "type": "String",
    "required": true
  },
  "remarks": {
    "type": "String",
    "required": true
  }
})

  let Houses = mongoose.model('House', houseSchema);
  let Users = mongoose.model('User', userSchema);
  let Enquiries = mongoose.model('Enquiry', enquirySchema);

  module.exports = {Houses, Users, Enquiries};