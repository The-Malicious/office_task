const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: "Please input name this is required.",
      unique: true,
    },
    image: { type: String, default: null },
    category: { type: [Schema.Types.ObjectId], ref: "categories", default: [] },
    tag: { type: [Schema.Types.ObjectId], ref: "tags", default: [] },
    price: { type: Number, default: 0 },
    status: { type: Boolean, default: true },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = model("products", productSchema);
