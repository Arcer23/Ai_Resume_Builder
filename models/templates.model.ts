import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  layout: { type: String, required: true },
  fields: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      required: { type: Boolean, default: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Template = mongoose.model("Template", templateSchema);
module.exports = Template;
