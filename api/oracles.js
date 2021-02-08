const express = require("express");
const {
  getOracles,

  getSingleOracle
 
} = require('../controllers/oracles');

const api = express.Router();

api
  .route("/")
  .get(getOracles)
 

api
	.route('/random')
  	.get(getSingleOracle)

// locahost:5000/users/:id/orders
// api
//   .route('/:id/orders')
//   .get(getUserOrders)

module.exports = api;