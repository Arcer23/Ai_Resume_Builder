import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  title: { type: String, required: true },
  personalDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true },
    address: { type: String },
  },
  experience: [
    {
      jobTitle: String,
      company: String,
      startDate: Date,
      endDate: Date,
      responsibilities: [String],
    },
  ],
  education: [
    {
      degree: String,
      institution: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  skills: [String],
  certifications: [
    {
      name: String,
      issuer: String,
      date: Date,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Resume = mongoose.model("resume", resumeSchema);
