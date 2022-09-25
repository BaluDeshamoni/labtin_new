import mongoose from 'mongoose'

const radTestSchema = mongoose.Schema(
  {
    title: String,
    details: String,
    originalPrice: Number,
    parameters: Number,
    discountPrice: Number,
  },
  {
    timestamps: true,
  }
)

var RadTest = mongoose.model('RadTest', radTestSchema)

export default RadTest
