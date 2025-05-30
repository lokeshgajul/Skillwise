import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema({
  goad: String,
  roadmap: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Roadmap ||
  mongoose.model("Roadmap", roadmapSchema);
