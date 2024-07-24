import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully conncted to mongodb");
  } catch (e) {
    console.log(`ERROR: ${e.message}`);
    process.exit(1);
  }
};

export default connectDB;
