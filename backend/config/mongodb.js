// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on('connected', () => console.log('Database Connected'))
//   await mongoose.connect(`${process.env.MONGODB_URI}/DocOnTime`)
// }

// export default connectDB

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
