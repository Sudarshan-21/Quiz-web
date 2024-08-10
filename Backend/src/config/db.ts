import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "", {
      useUnifiedTopology: true, // This option is still useful
    } as mongoose.ConnectOptions);
    console.log("MongoDB connected...");
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred:", err);
    }
  }
};

export default connectDB;
