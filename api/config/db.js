const mongoose = require("mongoose");

// Connect to the database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB running on", conn.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;