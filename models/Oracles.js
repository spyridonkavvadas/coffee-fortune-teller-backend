const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OracleSchema = new Schema({
   
    Predictions: {
      type: String,
      
    },
    Category: {
      type: String,
    },
    Kindof: {
      type: String,
      
    },
  },
   
    
);

module.exports = mongoose.model("Oracle", OracleSchema);
