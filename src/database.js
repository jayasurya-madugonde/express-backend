const mongoose  = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/express";

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Database is connected sucessfully");
    }
    catch(error){
        console.log("Database is not connected", error);
    }
}

module.exports = {connectDB};