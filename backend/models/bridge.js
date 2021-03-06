const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bridge = new Schema(
  {
    name: String,
    type: String,
    ip: String,
    description: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const bridgeModel = mongoose.model("bridge", bridge);
module.exports = bridgeModel;
