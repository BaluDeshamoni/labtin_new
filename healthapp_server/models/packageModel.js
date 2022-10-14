import mongoose from "mongoose";

const packageSchema = mongoose.Schema(
  {
    title: String,
    details: String,
    parameters: Number,
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
const discountSchema = mongoose.Schema(
  {
    name: String,
    promoCode: String,
    discountPercentage: Number,
    applicableTo: String,
    limit: Number,
  },
  {
    timestamps: true,
  }
);
const locationSchema = mongoose.Schema(
  {
    city: String,
  },
  {
    timestamps: true,
  }
);

var Package = mongoose.model("Package", packageSchema);
var Discount = mongoose.model("Discount", discountSchema);
var Location = mongoose.model("Location", locationSchema);

export { Package, Discount, Location };
