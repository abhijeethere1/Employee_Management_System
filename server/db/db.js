import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    if (!uri) {
      throw new Error("❌ MONGO_URI not found in environment variables");
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
