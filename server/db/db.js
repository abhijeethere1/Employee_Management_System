import mongoose from "mongoose";

const connectToDatabase = async (mongoURL) => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};

export default connectToDatabase;
