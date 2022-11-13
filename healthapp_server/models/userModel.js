import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    profileImage: String,
    users: [{ name: String, age: String, sex: String, img: String }],
    address: [{ place: String, city: String, pinCode: String, state: String }],
    isEmployee: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    newUser: { type: Boolean, default: true },
    dicountsUsed: [
      {
        discount: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Discount",
        },
        used: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
const complaintSchema = mongoose.Schema(
  {
    customer: String,
    number: String,
    complaint: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
const Complaint = mongoose.model("Complaint", complaintSchema);

export { User, Complaint };
