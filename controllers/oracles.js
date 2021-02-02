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

const getOracle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Oracles.findById(id);
    res.json({ success: true, msg: 'show random oracle', data: oracle })
  } catch(err) {
    next(err)
  }
};

const createUser = async (req, res, next) => {
  try {
    const { Name, Gender, Status, CupImageUrl } = req.body;
    const book = await Books.create({  Name, Gender, Status, CupImageUrl });

    res.json({ success: true, msg: 'show new oracle', data: user })
  } catch(err) {
    next(err)
  }
};






module.exports = {
  getOracles,
  getOracle,
}