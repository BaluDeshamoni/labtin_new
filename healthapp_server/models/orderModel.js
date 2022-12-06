import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    totalPrice: Number,
    userName: String,
    userNo: String,
    discountUsed: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderedFor: { name: String, age: String, sex: String },
    orderedOn: String,
    address: { place: String, city: String, pinCode: String, state: String },
    orderedItem: {
      item: String,
      lab: String,
    },
    status: { type: Number, default: 1 },
    uploadedFiles: {
      report: String,
      eReport: String,
    },
  },
  {
    timestamps: true,
  }
);

var Order = mongoose.model("Order", orderSchema);

export default Order;
