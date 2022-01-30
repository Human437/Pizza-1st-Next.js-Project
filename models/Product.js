import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: {
            type: Number,
            require: true,
          },
        },
      ],
    },
  },
  { timestaps: true }
);

// Basically checks your database to see if you already have a model called products
// If you do use it, otherwise create a new model
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
