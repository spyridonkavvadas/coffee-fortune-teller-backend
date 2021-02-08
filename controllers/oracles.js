const Oracle = require('../models/Oracles');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getOracles = async (req, res, next) => {
  try {
    
    const oracles = await Oracle.find();
    console.log(oracles);
    res.json({ success: true, msg: 'show all oracles', data: oracles })
  } catch(err) {
    next(err)
  }
}


const getSingleOracle = async (req, res, next) => {
  try {
    
    const healthOracle = await Oracle.aggregate([{ $match: { category: 'health' } }]).sample(1);

const loveOracle = await Oracle.aggregate([{ $match: { category: 'love' } }]).sample(1);

const result = healthOracle[0].predictions + ' ' + loveOracle[0].predictions;
    console.log(healthOracle[0].predictions);
    console.log(result);
    
    res.json({ success: true, data: result })
  } catch(err) {
    next(err)
  }
}

const createUser = async (req, res, next) => {
  try {
    const { Name, Gender, Status, CupImageUrl } = req.body;
    const user = await user.create({  Name, Gender, Status, CupImageUrl });

    res.json({ success: true, msg: 'show new oracle', data: user })
  } catch(err) {
    next(err)
  }
};






module.exports = {
  getOracles,
  
  getSingleOracle,
  createUser
}