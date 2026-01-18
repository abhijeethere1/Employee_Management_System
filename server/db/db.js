import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return; // Prevent extra connections

    const uri = process.env.MONGODB_URL;
    if (!uri) throw new Error("❌ MONGO_URI not found");

    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    // process.exit(1); <--- DELETE THIS LINE. It is killing your server.
  }
};

export default connectToDatabase;
