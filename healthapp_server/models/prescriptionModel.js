import mongoose from 'mongoose'

const prescriptionSchema = mongoose.Schema(
  {
    name: String,
    mobile: String,
    img: [String],
    files: [String],
  },
  {
    timestamps: true,
  }
)

var Prescription = mongoose.model('Prescription', prescriptionSchema)

export default Prescription
