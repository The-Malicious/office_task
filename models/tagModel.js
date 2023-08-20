const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: "Please input name this is required.",
      unique: true,
    },
    image:{type:String,default:null},
    status: { type: Boolean, default: true },
    deleted_at: { type: Date, default: null },
    updated_at: { type: Date, default: null },
  },
  { timestamps: true }
);

module.exports = model('tags',tagSchema)