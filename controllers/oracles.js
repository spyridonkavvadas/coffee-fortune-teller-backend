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
    const categories = ['health', 'travels', 'business', 'financial', 'love', 'family'];
    const results = await Promise.all(
      categories.map(category =>
        Oracle.aggregate([
          { $match: { category } },
          { $sample: { size: 1 } }
        ])
      )
    );

    // Collect predictions from each result
    const predictions = results
      .filter(result => result.length > 0) // Only include categories that returned results
      .map(result => result[0].predictions); // Get the `predictions` field from each result

    res.json({ success: true, data: predictions });
  } catch (err) {
    next(err);
  }
};


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
