import mongoose from "mongoose";

const testSchema = mongoose.Schema(
  {
    title: String,
    details: String,
    originalPrice: Number,
    parameters: Number,
    discountPrice: Number,
    isHighlight: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

var Test = mongoose.model("Test", testSchema);

export default Test;
