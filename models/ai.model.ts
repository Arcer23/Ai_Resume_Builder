import mongoose from "mongoose";

const aiModelSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
    required: true,
  },
  suggestions: [
    {
      type: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  generatedResume: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const AIModel = mongoose.model("AIModel", aiModelSchema);
module.exports = AIModel;
