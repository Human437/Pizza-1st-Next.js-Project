import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
      required: true,
    },
    payment_method: {
      type: Number,
      required: true,
    },
  },
  { timestaps: true }
);

// Basically checks your database to see if you already have a model called orderss
// If you do use it, otherwise create a new model
export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
