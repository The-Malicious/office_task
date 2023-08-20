const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: "Please input name this is required.",
      // unique: true,
    },
    image:{type:String,default:null},
    status: { type: Boolean, default: true },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = model('caregories',categorySchema)