const express = require("express");
const {
  getOracles,
  getOracle,
 
} = require('../controllers/oracles');

const api = express.Router();

api
  .route("/")
  .get(getOracles)
 

api
  .route('/:id')
  .get(getOracle)
  

// locahost:5000/users/:id/orders
// api
//   .route('/:id/orders')
//   .get(getUserOrders)

module.exports = api;