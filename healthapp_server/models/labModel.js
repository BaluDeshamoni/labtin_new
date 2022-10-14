import mongoose from "mongoose";

const labSchema = mongoose.Schema(
  {
    title: String,
    logo: String,
    accrediation: String,
    time: String,
    state: String,
  },
  {
    timestamps: true,
  }
);
const radLabSchema = mongoose.Schema(
  {
    title: String,
    logo: String,
    accrediation: String,
    time: String,
    price: String,
    state: String,
  },
  {
    timestamps: true,
  }
);

var Lab = mongoose.model("Lab", labSchema);
var RadLab = mongoose.model("RadLab", radLabSchema);

export { Lab, RadLab };
