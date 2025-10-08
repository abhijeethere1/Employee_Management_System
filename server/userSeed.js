import User from "./models/User.js";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/db.js";

// get MongoDB URL from environment variable
const MONGO_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/ems";

const userRegister = async () => {
  try {
    await connectToDatabase(MONGO_URL); // wait for connection

    const hashPassword = await bcrypt.hash("admin", 10);

    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });

    await newUser.save();
    console.log("✅ Admin user created successfully");

    mongoose.connection.close(); // close connection
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

userRegister();
