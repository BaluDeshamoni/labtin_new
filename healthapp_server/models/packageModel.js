import mongoose from "mongoose";

const packageSchema = mongoose.Schema(
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
const discountSchema = mongoose.Schema(
  {
    name: String,
    promoCode: String,
    discountPercentage: Number,
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
