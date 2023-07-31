const mongoose = require("mongoose");

const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect("mongodb+srv://natashasharif:3GySwJS12op2vxzP@cluster0.v9sk0kn.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
     
    });
    console.log(`MongoDb Connected!:${conn.connection.host}.cyan.underline`);
  } catch (error) {
    console.log(`Error:${error.message}.red.bold`);
    process.exit();
  }
};
module.exports = connectDB;
