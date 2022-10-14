import mongoose from "mongoose";

const testSchema = mongoose.Schema(
  {
    title: String,
    details: String,
    availableIn: [
      {
        originalPrice: { type: Number, default: 0 },
        discountPrice: { type: Number, default: 0 },
        lab: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Lab",
        },
      },
    ],
    isHighlight: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

var Test = mongoose.model("Test", testSchema);

export default Test;
