import mongoose from "mongoose";

const connectDb = async () => {
  const isConnected = false;
  try {
    if (isConnected) return;

    const dbUrl = await mongoose.connect(
      "mongodb+srv://lokeshgajul465:dz3VT3TlWn4XcUIZ@skillwisecluster.zzbusgi.mongodb.net/SKILLWISE?retryWrites=true&w=majority&appName=SkillWiseCluster"
    );
    dbUrl.connection.on("Connected", () => {
      console.log("Connected to MongoDB successfully");
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
