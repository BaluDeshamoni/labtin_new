import mongoose from 'mongoose'

const customerSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    bookings: [String],
    address: String,
    reports: String,
  },
  {
    timestamps: true,
  }
)

var Customer = mongoose.model('Customer', customerSchema)

export default Customer
