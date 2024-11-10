const mongoose = require('mongoose');

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Ensure this is added
  };

  const conn = await mongoose.connect(process.env.MONGO_URI, options);
  console.log(`Mongo DB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
